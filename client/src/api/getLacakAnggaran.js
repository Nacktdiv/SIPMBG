import { supabase } from "./supabase";

function bandingkanAnggaran(perencanaanObj, realisasiObj) {
    // 1. Ambil data yang dibutuhkan
    const totalPerencanaan = perencanaanObj.total;
    const totalRealisasi = realisasiObj.total;
    const itemPerencanaan = perencanaanObj.daftar_perencanaan;
    const itemRealisasi = realisasiObj.daftar_realisasi;

    // 2. Bandingkan Total Keseluruhan
    const totalSama = totalPerencanaan === totalRealisasi;

    // 3. Bandingkan Detail Item
    const hasilPerbandinganItem = itemPerencanaan.map((itemP, index) => {
        const itemR = itemRealisasi[index];

        // Asumsi: Urutan item dalam kedua array harus sama.
        // Jika item realisasi tidak ada (misal: array realisasi lebih pendek), anggap tidak sama
        if (!itemR) {
            return {
                ...itemP,
                status_kesamaan: 'Item Tidak Ada di Realisasi',
                detail_perbedaan: null
            };
        }

        const isNamaSama = itemP.nama === itemR.nama;
        const isJumlahSama = itemP.jumlah === itemR.jumlah;
        const isTotalSama = itemP.total === itemR.total;
        
        const itemSama = isNamaSama && isJumlahSama && isTotalSama;

        // Detail perbedaan (untuk debugging atau laporan)
        let perbedaan = {};
        if (!isNamaSama) perbedaan.nama = `P: ${itemP.nama} vs R: ${itemR.nama}`;
        if (!isJumlahSama) perbedaan.jumlah = `P: ${itemP.jumlah} vs R: ${itemR.jumlah}`;
        if (!isTotalSama) perbedaan.total = `P: ${itemP.total} vs R: ${itemR.total}`;


        return {
            nama: itemP.nama,
            perencanaan: { jumlah: itemP.jumlah, total: itemP.total },
            realisasi: { jumlah: itemR.jumlah, total: itemR.total },
            status_kesamaan: itemSama ? 'Sama Persis' : 'Ada Perbedaan',
            detail_perbedaan: itemSama ? null : perbedaan
        };
    });

    // 4. Hitung apakah semua item sama
    const semuaItemSama = hasilPerbandinganItem.every(item => item.status_kesamaan === 'Sama Persis');

    // 5. Kembalikan Hasil Gabungan
    return {
        // Status Keseluruhan
        total_perencanaan: totalPerencanaan,
        total_realisasi: totalRealisasi,
        total_sama: totalSama,
        semua_item_sama: semuaItemSama,
        
        // Detail Perbandingan Item
        hasil_per_item: hasilPerbandinganItem
    };
}

function hitungRentangBulan(tanggalLengkapStr) {
    // 1. Konversi string menjadi objek Date. 
    // Menggunakan format T00:00:00 di akhir memastikan kita bekerja dengan waktu midnight 
    // di zona waktu lokal, menghindari masalah zona waktu (UTC vs Lokal).
    const tanggalObj = new Date(tanggalLengkapStr + 'T00:00:00'); 
    
    // Pengecekan keamanan
    if (isNaN(tanggalObj.getTime())) {
        throw new Error("Input tanggal tidak valid.");
    }
    
    // Ambil Tahun dan Bulan (getMonth() menghasilkan 0-11)
    const tahun = tanggalObj.getFullYear();
    const bulan = tanggalObj.getMonth(); // Contoh: November = 10

    // --- A. Hitung Tanggal Awal Bulan Saat Ini (YYYY-MM-01) ---
    
    // Set tanggal ke-1 bulan yang sama (bulan 10, tanggal 1)
    const tanggalAwalBulanObj = new Date(tahun, bulan, 1);
    
    // Format ke string YYYY-MM-DD
    const tglAwalStr = tanggalAwalBulanObj.toISOString().split('T')[0];


    // --- B. Hitung Tanggal Awal Bulan Berikutnya (YYYY-MM+1-01) ---

    // Set tanggal ke-1 bulan berikutnya (bulan 11, tanggal 1)
    // Jika bulan=11 (Desember), bulan+1 akan menjadi 12 (tahun otomatis bertambah)
    const tanggalAkhirBulanObj = new Date(tahun, bulan + 1, 1);
    
    // Format ke string YYYY-MM-DD
    const tglAkhirStr = tanggalAkhirBulanObj.toISOString().split('T')[0];

    
    return {
        // Output yang Anda minta
        tanggalAwalBulan: tglAwalStr,  // 2025-11-01
        tanggalAkhirBulan: tglAkhirStr // 2025-12-01
    };
}

const getLacakAnggaran = async (criteria) => {
    const {provinsi, kota, lokasiSppg, tanggalDistribusi} = criteria

    if (!provinsi || !kota || !lokasiSppg || !tanggalDistribusi){
        console.warn("Salah satu kriteria tidak diinput")
    }

    const hasilRentang = hitungRentangBulan(tanggalDistribusi)
    const tanggalAwalBulan = hasilRentang.tanggalAwalBulan
    const tanggalAkhirBulan = hasilRentang.tanggalAkhirBulan

    try {
        //Langkah 1: Cari ID Target SPPG yang sesuai
        const { data: targetData, error: targetError } = await supabase
            .from('sppg')
            .select(`id_sppg`)
            .eq('nama_sppg', lokasiSppg)
            .eq('provinsi', provinsi)
            .eq('kota_kab', kota)
            .single(); 

        if (targetError && targetError.code !== 'PGRST116') {
            console.error("Error mencari  SPPG:", targetError.message);
            return null;
        }

        if (!targetData) {
            console.warn(" SPPG tidak ditemukan untuk kriteria ini.");
            //sweet alert
            return null;
        }

        const idTarget = targetData.id_sppg;
        // Langkah 1 END

        // Langkah 2: Mencari Data Perencanaan Anggaran yang sesuai
        const { data: rencanaData, error: rencanaError } = await supabase
            .from('perencanaan_anggaran')
            .select('daftar_perencanaan, total')
            .gte('created_at', tanggalAwalBulan)
            .lt('created_at', tanggalAkhirBulan)
            .eq('id_sppg', idTarget)
            .single(); 

        if (rencanaError && rencanaError.code !== 'PGRST116') { // PGRST116 = baris tidak ditemukan
            console.error("Error mencari perencanaan Anggaran SPPG:", targetError.message);
            return null;
        }

        if (!rencanaData) {
            console.warn("Perencanaan Anggaran SPPG tidak ditemukan untuk kriteria ini.");
            //sweeet alert
            return null;
        }
        //Langkah 2 END

        // Langkah 3: Mencari Data Perencanaan Anggaran yang sesuai
        const { data: realisasiData, error: realisasiError } = await supabase
            .from('realisasi_anggaran')
            .select('daftar_realisasi, total')
            .gte('created_at', tanggalAwalBulan)
            .lt('created_at', tanggalAkhirBulan)
            .eq('id_sppg', idTarget)
            .single(); 

        if (realisasiError && realisasiError.code !== 'PGRST116') { // PGRST116 = baris tidak ditemukan
            console.error("Error mencari perencanaan Anggaran SPPG:", targetError.message);
            return null;
        }

        if (!realisasiData) {
            console.warn("Perencanaan Anggaran SPPG tidak ditemukan untuk kriteria ini.");
            //sweeet alert
            return null;
        }
        //Langkah 3 END

        // Langkah 4 : Perbandingan Anggaran
        const hasil = bandingkanAnggaran(rencanaData, realisasiData);
        return hasil
    } catch (e) {

    }
}

export default getLacakAnggaran