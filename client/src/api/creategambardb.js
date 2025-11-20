import uploadGambar from "./uploadGambar";
import { supabase } from "./supabase";

async function createGambarDB(obj) {
  // Upload file dulu
  const urlGambar = await uploadGambar(obj.file);
  if (!urlGambar) return;

  // Siapkan payload final
  const payload = {
    nama: obj.anonim ? "Anonim" : obj.nama,
    asal_sekolah: obj.asalSekolah,
    anonim: obj.anonim,
    gambar_url: urlGambar
  };

  // Insert ke database
  const { data, error } = await supabase
    .from("upload_bukti_menu")
    .insert(payload);

  if (error) {
    console.log("DB Error:", error);
  } else {
    console.log("Data tersimpan:", data);
  }
}

export default createGambarDB