import uploadGambar from "./uploadgambar";
import { supabase } from "./supabase";

async function createGambarsppg(obj) {

    // 1. Cari id_target_sppg
    const { data: targetData, error: targetError } = await supabase
        .from('sppg')
        .select('id_sppg')
        .eq('nama_sppg', obj.nama_sppg)
        .limit(1);

    if (targetError) {
        console.error("DB Error (Target SPPG):", targetError);
        return;
    }

    if (!targetData || targetData.length === 0) {
        console.warn(`[Gagal] Tidak ada SPPG yang ditemukan dengan nama_sppg: ${obj.nama_sppg}`);
        return;
    }

    const idTarget = targetData[0].id_sppg;
    console.log(targetData)
    
    //2. upload gambar di storage
    const urlGambar = await uploadGambar(obj.file);
    if (!urlGambar) {
        console.error("[Gagal] Upload file ke Storage gagal.");
        return;
    } 

    //3. membuat timestamp dan membuat payload yang akan dikirim ke collection
    const currentTimeStamp = new Date().toISOString(); 

    const payload = {
        nama_menu: obj.nama_menu,
        data_menu : obj.data_menu,
        gambar_url: urlGambar,
        id_sppg: idTarget, 
            created_at : currentTimeStamp
    };

    //3. upload ke collection upload_bukti_menu
    const { data, error } = await supabase
        .from("perencanaan_menu")
        .insert(payload);

    if (error) {
        console.error("DB Error (Upload Bukti Menu):", error);
        
    } else {
        // console.log("Data tersimpan:", data);
        console.log("✅ Proses Upload dan Penyimpanan Metadata Selesai.");
    }
}

export default createGambarsppg;