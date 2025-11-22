import { supabase } from "./supabase";

const getGambar = (bucketName, imagePath) => {
    
    if (!bucketName || !imagePath) {
        console.error("Error: Nama bucket atau path gambar tidak boleh kosong.");
        return null;
    }
    
    try {
        const { data } = supabase
            .storage
            .from(bucketName)
            .getPublicUrl(imagePath);

        if (data && data.publicUrl) {
            console.log("URL Gambar Publik berhasil dibuat.");
            console.log(data.publicUrl)
            return data.publicUrl;
        } else {
            console.error("Gagal mendapatkan URL publik. Periksa nama bucket dan path.");
            return null;
        }

    } catch (error) {
        console.error("Terjadi error saat mencoba mendapatkan URL gambar:", error);
        return null;
    }
};

export default getGambar