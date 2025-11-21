import { supabase } from "./supabase";

const getGambar = (bucketName, imagePath) => {
    
    if (!bucketName || !imagePath) {
        console.error("Error: Nama bucket atau path gambar tidak boleh kosong.");
        return null;
    }
    
    try {
        // Metode getPublicUrl secara langsung mengembalikan URL tanpa memanggil API
        // jika RLS (Row Level Security) untuk STORAGE sudah diatur dengan benar 
        // untuk akses publik.
        const { data } = supabase
            .storage
            .from(bucketName)
            .getPublicUrl(imagePath);

        // Jika Supabase berhasil membuat URL, properti 'publicUrl' akan tersedia
        if (data && data.publicUrl) {
            console.log("URL Gambar Publik berhasil dibuat.");
            console.log(data.publicUrl)
            return data.publicUrl;
        } else {
            // Ini mungkin terjadi jika konfigurasi Storage salah atau bucket tidak ditemukan
            console.error("Gagal mendapatkan URL publik. Periksa nama bucket dan path.");
            return null;
        }

    } catch (error) {
        console.error("Terjadi error saat mencoba mendapatkan URL gambar:", error);
        return null;
    }
};

export default getGambar