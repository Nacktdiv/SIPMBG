import uploadGambar from "./uploadGambar.js";
import { supabase } from "./supabase";

async function createGambarDB(obj) {

    // 1. Cari id_target_sppg
    const { data: targetData, error: targetError } = await supabase
        .from('target_sppg')
        .select('id_target_sppg')
        .eq('nama_target', obj.asalSekolah)
        .limit(1);

    if (targetError) {
        console.error("DB Error (Target SPPG):", targetError);
        return;
    }

    if (!targetData || targetData.length === 0) {
        console.warn(`[Gagal] Tidak ada Target SPPG yang ditemukan dengan nama_target: ${obj.asalSekolah}`);
        return;
    }

    const idTarget = targetData[0].id_target_sppg;
    
    //2. upload gambar di storage
    const urlGambar = await uploadGambar(obj.file);
    if (!urlGambar) {
        console.error("[Gagal] Upload file ke Storage gagal.");
        return;
    } 

    //3. membuat timestamp dan membuat payload yang akan dikirim ke collection
    const currentTimeStamp = new Date().toISOString(); 

    const payload = {
        nama: obj.anonim ? "Anonim" : obj.nama,
        asal_sekolah: obj.asalSekolah,
        anonim: obj.anonim,
        gambar_url: urlGambar,
        // Properti yang didapatkan dari Langkah 1
        id_target_sppg: idTarget, 
        created_at : currentTimeStamp
        // Catatan: created_at harus diisi otomatis oleh database (DEFAULT VALUE: now())
    };

    //3. upload ke collection upload_bukti_menu
    const { data, error } = await supabase
        .from("upload_bukti_menu")
        .insert(payload);

    if (error) {
        console.error("DB Error (Upload Bukti Menu):", error);
        
    } else {
        // console.log("Data tersimpan:", data);
        console.log("✅ Proses Upload dan Penyimpanan Metadata Selesai.");
    }
}

export default createGambarDB;