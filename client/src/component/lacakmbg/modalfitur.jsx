import { IoSearch, 
    IoFingerPrintOutline,
    IoSchoolOutline,
    IoArrowDown
} from "react-icons/io5"

import {useState, useRef} from "react";
import BoundingBoxViewer from "../../BoundingBoxViewer";
// import { todayMenu } from "../../TestAi";

const ROBOFLOW_API = "https://detect.roboflow.com/sipmbg-v0-2-qnp6z/1?api_key=nSr7FZr0hImd0pJrOJE9";

const todayMenu = ["Nasi", "Ayam Goreng", "Tumis Sayur", "Tahu", "Anggur", "Susu UHT"];

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


const ModalFitur = ({onClose, setFileGambar}) => {

    // States
    const [prevPath, setprevPath] = useState(null);
    const [prevFile, setprevFile] = useState(null)
    const [anonim, setanonim] = useState(false);
    const [namaUser, setnamaUser] = useState("");
    const [asalSekolah, setasalSekolah] = useState("MAN 2 Kota Kediri")

    const [imageAiFile, setImageAiFile] = useState(null);      // File object from input
    const [imageAiUrl, setImageAiUrl] = useState(null);        // optional url (like sandbox path)
    const [predictions, setPredictions] = useState(null);
    // const [saving, setSaving] = useState(false);


    const fileInputRef = useRef(null);

    // Ai Inference
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

    // File change
    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setprevPath(URL.createObjectURL(file));
            setprevFile(file);
            await runInference(file);
        } else {
            setprevPath(null);
        }
    };

    //Compute Menu
    function computeCompleteness(preds, menuList) {
        const detected = (preds || []).map(p => String(p.class).toLowerCase());
        const found = menuList.filter(m => detected.includes(String(m).toLowerCase()));
        const missing = menuList.filter(m => !detected.includes(String(m).toLowerCase()));
        const percent = Math.round((found.length / Math.max(1, menuList.length)) * 100);
        return { found, missing, percent };
    }

    const handleFileSend = () => {
        setFileGambar({
            file: imageAiFile,
            nama: anonim ? "Anonim" : namaUser,
            asalSekolah: asalSekolah,
            anonim: anonim
        });

        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 "onClick={onClose} id="modal-backdrop">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm w-full  "></div>

            <div 
                className="flex  items-center justify-center relative shadow-2xl w-full h-full transform transition-all duration-300 scale-100"
                onClick={onClose}
                 // Mencegah klik di sini menutup modal
            >
                <div 
                    className="flex md:flex-row flex-col md:items-center gap-5 h-full overflow-y-auto pt-19 md:pt-0 "
                    >
                    <div className="flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                                <p>Upload Gambar</p>
                                
                            </div>
                        </div>
                        <div className="bg-hijau-muda-3 flex flex-col gap-2 md:gap-5 p-5  relative w-full md:w-125"
                            onClick={(e) => e.stopPropagation()}>
                            <p className="text-xl font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Identitas</p>
                            <div id="select-1" className="flex flex-col gap-1">
                                <div className="flex items-center mb-1 gap-2">
                                    
                                    <IoFingerPrintOutline/>
                                    <label htmlFor="provinsi" className=" text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Privasi</label>
                                </div>
                                
                                <div className="relative">
                                    
                                    <select
                                        id="anonim"
                                        value={anonim ? "anonim" : "sinonim"}
                                        onChange={(e) => setanonim(e.target.value === "anonim")}
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none  font-[--font-family-poppins] font-[var(--font-weight-regular)]"
                                    >
                                        <option defaultValue="anonim">anonim</option>
                                        <option value="sinonim">publik</option>
                                    </select>

                                    
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <IoArrowDown/>
                                    </div>
                                </div>
                            </div>
                            {!anonim && (
                                <div id="select-2" className="flex flex-col gap-1">
                                    <div className="flex items-center mb-1 gap-2">
                                        <span className="text-accent font-semibold">👤</span>
                                        <label htmlFor="nama_input" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Nama</label>
                                    </div>
                                    
                                    <div className="relative">
                                        
                                        <input 
                                            type="text" 
                                            id="nama_input" 
                                            name="nama"
                                            value={namaUser}
                                            onChange={(e) => setnamaUser(e.target.value)} 
                                            placeholder="Masukkan Nama Anda"
                                            className="bg-cream w-full p-2 pr-4 rounded-xl  border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        />
                                        
                                        
                                        </div>
                                </div>
                            )}
                            <div id="select-3" className="flex flex-col gap-1">
                                <div className="flex items-center mb-1 gap-2">
                                    
                                    <IoSchoolOutline/>
                                    <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Sekolah/Pesantren/Posyandu</label>
                                </div>
                                
                                <div className="relative">
                                    
                                    <select
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none font-[--font-family-poppins] font-[var(--font-weight-regular)]"
                                        value={asalSekolah}
                                        onChange={(e) => setasalSekolah(e.target.value)}
                                    >
                                        <option value="MAN 2 Kota Kediri">MAN 2 Kota Kediri</option>
                                        <option value="Posyandu Burengan">Posyandu Burengan</option>
                                        <option value="Ponpes Lirboyo">Ponpes Lirboyo</option>
                                    </select>
                                    
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <IoArrowDown/>
                                    </div>
                                </div>
                            </div>

                            {/* button */}
                            <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex self-center"
                                    onClick={handleFileSend}>
                                    <div className="md:py-4 md:px-8 py-2 px-4">
                                        <p className="text-sm md:text-base text-white font-[--font-family-poppins] font-[var(--font-weight-semibold)]">UNGGAH FOTO</p>
                                    </div>
                                    <IoSearch className="text-xl md:text-4xl m-auto text-white"></IoSearch>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col"
                        onClick={(e) => e.stopPropagation()}>
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                                <p>Preview</p>
                            </div>
                        </div>

                        {/* panel 2 */}
                        <div className="flex flex-col gap-5 p-5 items-center justify-center bg-hijau-muda-3">
                            {/* Input file yang sebenarnya, disembunyikan secara visual */}
                            <input
                                id="hidden-file-upload" // ID unik untuk input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef} // Kaitkan ref dengan input
                                className="hidden" // Sembunyikan input secara visual
                            />

                            <label
                                htmlFor="hidden-file-upload"
                                className="relative h-fit md:h-82 w-full md:w-170 flex items-center justify-center cursor-pointer 
                                        bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg 
                                        hover:border-blue-500 hover:bg-gray-50 transition-colors duration-200"
                            >
                                {prevPath ? (
                                <div className="flex  gap-5">
                                <div className="w-full">
                                    <img
                                    src={prevPath}
                                    alt="Preview Gambar"
                                    className="h-25 md:h-full w-full object-cover rounded-lg" // Pastikan gambar mengisi area
                                    />
                                    <p>Sebelum bounding box</p>
                                </div>
                                
                                <div className="w-full h-full" >
                                    <BoundingBoxViewer
                                    imageFile={prevFile}
                                    imageUrl={imageAiUrl}
                                    predictions={predictions || []}
                                    todayMenu={todayMenu}
                                    onCanvasReady={(blob) => {
                                        setImageAiFile(blob);
                                        setImageAiUrl(URL.createObjectURL(blob));
                                    }}
                                    />
                                    <p>Setelah bounding box</p>
                                </div>

                                
                                </div>
                                ) : (
                                // Jika tidak ada preview, tampilkan ikon atau teks placeholder
                                <div className="text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">
                                        Klik untuk memilih gambar
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
                                </div>
                                )}
                                
                            </label>
                            <div>
                                    {predictions && (
                                    (() => {
                                        const { found, missing, percent } = computeCompleteness(predictions, todayMenu);
                                        return (
                                        <div className="w-64 md:w-115" >
                                            <h3>Hasil Kelengkapan: {found.length}/{todayMenu.length} ({percent}%)</h3>
                                            <div><strong>Ditemukan:</strong> {found.join(", ") || "—"}</div>
                                            <div><strong>Missing:</strong> {missing.join(", ") || "—"}</div>
                                        </div>
                                        );
                                    })()
                                    )}
                                </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                                <p>Validasi AI</p>
                            </div>
                        </div>
                        <div> ini aslinya comment
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
                            imageFile={prevFile}
                            imageUrl={imageAiUrl}
                            predictions={predictions || []}
                            todayMenu={todayMenu}
                             onCanvasReady={(blob) => {
                                setImageAiFile(blob);
                                setImageAiUrl(URL.createObjectURL(blob));
                            }}
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
                    </div> */}
                </div>            
            </div>
        </div>
    )
}

export default ModalFitur