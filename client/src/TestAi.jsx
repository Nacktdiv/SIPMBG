import { useState } from "react";
import BoundingBoxViewer from "./BoundingBoxViewer";
import { supabase, uploadImageToSupabase, insertDetectionRecord } from "./api/supabase";

/**
 * LOCAL test path (dev instruction): you uploaded a file earlier.
 * We expose it here for quick dev/test. Replace/remove in production.
 */
const LOCAL_TEST_FILE_PATH = "https://rvtdvbdwzalkqinrfguc.supabase.co/storage/v1/object/public/mbg-images/testMBG.png";

const ROBOFLOW_API = "https://detect.roboflow.com/sipmbg-v0-2-qnp6z/1?api_key=nSr7FZr0hImd0pJrOJE9";

/** today's menu (example) */
export const todayMenu = ["Nasi", "Ayam Goreng", "Tumis Sayur", "Tahu", "Anggur", "Susu UHT"];

export default function TestAi() {
  const [imageFile, setImageFile] = useState(null);      // File object from input
  const [imageUrl, setImageUrl] = useState(null);        // optional url (like sandbox path)
  const [predictions, setPredictions] = useState(null);
  const [saving, setSaving] = useState(false);

  // helper to convert file -> base64 raw (without header)
  const toBase64Raw = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = String(reader.result).split(",")[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  // If you want to fetch a local path (sandbox:/...) and get a Blob,
  // your environment might need special handling. This snippet shows how you'd fetch it:
  async function fetchLocalAsBlob(localPath) {
    // The host environment will translate sandbox:/... to an accessible URL.
    const resp = await fetch(localPath);
    if (!resp.ok) throw new Error("Failed to fetch local file");
    return await resp.blob();
  }

  const handleLocalTestPath = async () => {
    try {
      // fetch the local test image (dev only)
      const blob = await fetchLocalAsBlob(LOCAL_TEST_FILE_PATH);
      const file = new File([blob], "local_test.png", { type: blob.type });
      setImageFile(file);
      setImageUrl(null);
      await runInference(file);
    } catch (e) {
      console.error(e);
      alert("Gagal load local file. Replace LOCAL_TEST_FILE_PATH or use file input.");
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setImageUrl(null);
    await runInference(file);
  };

//   async function runInference(file) {
//     try {
//       const base64 = await toBase64Raw(file);

//       const res = await fetch(ROBOFLOW_API, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: base64,
//       });

//       if (!res.ok) {
//         const txt = await res.text();
//         throw new Error(`Roboflow error: ${res.status} ${txt}`);
//       }

//       const json = await res.json();
//       setPredictions(json.predictions || []);
//     } catch (err) {
//       console.error("Inference failed:", err);
//       alert("Inference failed: " + err.message);
//     }
//   }

  async function runInference(file) {
  try {
    // ubah ke base64 tanpa prefix
    const base64 = await toBase64Raw(file);

    const res = await fetch(ROBOFLOW_API, {
      method: "POST",
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: base64,
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`Roboflow error: ${res.status} ${txt}`);
    }

    const json = await res.json();

    console.log("RESULT:", json);
    
    // simpan prediction ke state
    setPredictions(json.predictions || []);

  } catch (err) {
    console.error("Inference failed:", err);
    alert("Inference failed: " + err.message);
  }
}
  

  function computeCompleteness(preds, menuList) {
    const detected = (preds || []).map(p => String(p.class).toLowerCase());
    const found = menuList.filter(m => detected.includes(String(m).toLowerCase()));
    const missing = menuList.filter(m => !detected.includes(String(m).toLowerCase()));
    const percent = Math.round((found.length / Math.max(1, menuList.length)) * 100);
    return { found, missing, percent };
  }

  async function handleSaveToSupabase() {
    if (!imageFile && !imageUrl) {
      alert("No image to save");
      return;
    }
    if (!predictions) {
      alert("No predictions yet");
      return;
    }

    try {
      setSaving(true);

      // 1) prepare file to upload
      let fileToUpload = imageFile;
      if (!fileToUpload && imageUrl) {
        // fetch URL -> blob -> file
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        fileToUpload = new File([blob], `img-${Date.now()}.png`, { type: blob.type });
      }

      const path = `uploads/${Date.now()}-${fileToUpload.name}`;

      // 2) upload to supabase storage and get public url
      const publicUrl = await uploadImageToSupabase(fileToUpload, path);

      // 3) build record
      const { found, missing, percent } = computeCompleteness(predictions, todayMenu);

      const record = {
        image_url: publicUrl,
        predictions: predictions,
        detected_names: found,
        missing_names: missing,
        completeness: percent,
        bbox_version: "roboflow_v1"
      };

      // 4) insert row
      const inserted = await insertDetection(record);

      setSaving(false);
      alert("Saved to Supabase");
    } catch (err) {
      setSaving(false);
      console.error(err);
      alert("Save failed: " + err.message);
    }
  }

  // wrapper using functions from supabaseClient (so import names match)
  async function insertDetection(record) {
    const { data, error } = await supabase
      .from("detections")
      .insert([record]);

    if (error) throw error;
    return data;
  }

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 8 }}>
        <input type="file" accept="image/*" onChange={handleUpload} />
        <button onClick={handleLocalTestPath}>Use local test image</button>
        <button onClick={handleSaveToSupabase} disabled={saving || !predictions}>
          {saving ? "Saving..." : "Save to Supabase"}
        </button>
      </div>

      <div>
        {predictions ? (
          <>
            <h4>Predictions ({predictions.length})</h4>
            <pre style={{ maxHeight: 200, overflow: "auto", background: "#f6f6f6", padding: 8 }}>
              {JSON.stringify(predictions, null, 2)}
            </pre>
          </>
        ) : <p>No prediction yet</p>}
      </div>

      <div>
        <BoundingBoxViewer
          imageFile={imageFile}
          imageUrl={imageUrl}
          predictions={predictions || []}
          todayMenu={todayMenu}
        />
      </div>

      <div>
        {predictions && (
          (() => {
            const { found, missing, percent } = computeCompleteness(predictions, todayMenu);
            return (
              <>
                <h3>Hasil Kelengkapan: {found.length}/{todayMenu.length} ({percent}%)</h3>
                <div><strong>Ditemukan:</strong> {found.join(", ") || "—"}</div>
                <div><strong>Missing:</strong> {missing.join(", ") || "—"}</div>
              </>
            );
          })()
        )}
      </div>

      <div style={{ fontSize: 12, color: "#666" }}>
        <p>Dev local test path (if needed): <code>{LOCAL_TEST_FILE_PATH}</code></p>
      </div>
    </div>
  );
}
