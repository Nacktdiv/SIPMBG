import { useState } from "react";
import { supabase } from "./supabase";

const getLacakMbg = async (criteria) => {
    // Destructuring object criteria untuk mendapatkan nilai yang diperlukan
    const { lokasiSppg, penerima, tanggalDistribusi } = criteria; 
    
    try {
        // --- Langkah 1: Cari ID Target SPPG yang sesuai ---
        const { data: targetData, error: targetError } = await supabase
            .from('target_sppg')
            .select(`id_target_sppg`)
            .eq('nama_target', penerima)
            .eq('wilayah_target', lokasiSppg)
            .single(); 

        if (targetError && targetError.code !== 'PGRST116') { // PGRST116 = baris tidak ditemukan
            console.error("Error mencari Target SPPG:", targetError.message);
            return null;
        }

        if (!targetData) {
            console.warn("Target SPPG tidak ditemukan untuk kriteria ini.");
            return null;
        }


        const idTarget = targetData.id_target_sppg;
        
        // --- Langkah 2: Cari URL Gambar di upload_bukti_menu ---
        const { data: buktiData, error: buktiError } = await supabase
            .from('upload_bukti_menu')
            .select('gambar_url, nama')
            .eq('id_target_sppg', idTarget)
            .eq('created_at', tanggalDistribusi)

        console.log(buktiData)

        if (buktiError && buktiError.code !== 'PGRST116') {
            console.error("Error mencari Bukti Menu:", buktiError.message);
            return buktiError.message;
        }

        if (buktiData ) {
            return buktiData;
        } else {
            return null;
        }
        
    } catch (e) {
        console.error("Terjadi Error Umum dalam fetchBuktiMenuUrl:", e);
        return null;
    }
};

export default getLacakMbg