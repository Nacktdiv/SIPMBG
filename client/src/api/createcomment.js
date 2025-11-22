import { supabase } from "./supabase";

const updateCommentar = async (komentar, id_menu) => {
    
    if (!komentar || !id_menu) {
        console.error("Argumen komentar dan ID perencanaan menu harus diisi.");
        return null;
    }

    try {
        // 1. CARI DATA LAMA (Kolom commentar)
        // Kita hanya mengambil kolom 'commentar' dan ID
        const { data: menuData, error: fetchError } = await supabase
            .from('perencanaan_menu')
            .select('id_perencanaan_menu, comment')
            .eq('id_perencanaan_menu', id_menu)
            .single();

        if (fetchError || !menuData) {
            console.error("Gagal mencari menu atau menu tidak ditemukan:", fetchError);
            return null;
        }

        // 2. MODIFIKASI COMMENTAR LAMA DI JAVASCRIPT
        let currentCommentar = menuData.comment || [];

        // Pastikan data lama adalah Array, jika tidak, inisialisasi sebagai Array kosong
        if (!Array.isArray(currentCommentar)) {
             // Jika data JSONB lama adalah objek seperti {0:"a", 1:"b"}, kita ubah ke array string
             currentCommentar = Object.values(currentCommentar);
        }

        // 3. PUSH KOMENTAR BARU
        currentCommentar.push(komentar);
        
        // 4. UPDATE DATA BARU KE DATABASE
        const { data: updatedData, error: updateError } = await supabase
            .from('perencanaan_menu')
            .update({ comment: currentCommentar }) // Mengirim array baru
            .eq('id_perencanaan_menu', id_menu)
            .select('comment') // Ambil hasil komentar setelah di-push
            .single();

        if (updateError) {
            console.error("Gagal mengupdate komentar:", updateError);
            return null;
        }

        // 5. DAPATKAN HASIL AKHIR (Output JSON Array yang Sudah di-push)
        console.log("Komentar berhasil di-push. Hasil akhir:");
        console.log(updatedData.comment); 
        
        return updatedData.comment;

    } catch (error) {
        console.error("Terjadi error tak terduga:", error);
        return null;
    }
};

export default updateCommentar 