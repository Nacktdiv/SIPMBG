import { supabase } from "./supabase";

async function uploadGambar(file) {
    const fileName = `${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
    .from("gambar-mbg")        // nama bucket kamu
    .upload(fileName, file);

    if (error) {
        console.error("Upload error:", error);
        return null;
    }

    const { data: urlData } = supabase.storage
        .from("gambar-mbg")
        .getPublicUrl(fileName);

    return urlData.publicUrl;
}

export default uploadGambar