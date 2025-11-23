import React from 'react';


const ComparisonTable = ({data}) => {
//     const data = {
//     "total_perencanaan": 20000000,
//     "total_realisasi": 20000000,
//     "total_sama": true,
//     "semua_item_sama": true,
//     "hasil_per_item": [
//         {
//             "nama": "Beras Medium",
//             "perencanaan": {
//                 "jumlah": 500,
//                 "total": 6750000
//             },
//             "realisasi": {
//                 "jumlah": 500,
//                 "total": 6750000
//             },
//             "status_kesamaan": "Sama Persis",
//             "detail_perbedaan": null
//         },
//         {
//             "nama": "Minyak Goreng Kemasan",
//             "perencanaan": {
//                 "jumlah": 200,
//                 "total": 3400000
//             },
//             "realisasi": {
//                 "jumlah": 200,
//                 "total": 3400000
//             },
//             "status_kesamaan": "Sama Persis",
//             "detail_perbedaan": null
//         },
//         {
//             "nama": "Ikan Sarden Kaleng",
//             "perencanaan": {
//                 "jumlah": 1200,
//                 "total": 9600000
//             },
//             "realisasi": {
//                 "jumlah": 1200,
//                 "total": 9600000
//             },
//             "status_kesamaan": "Sama Persis",
//             "detail_perbedaan": null
//         },
//         {
//             "nama": "Garam Beryodium",
//             "perencanaan": {
//                 "jumlah": 50,
//                 "total": 250000
//             },
//             "realisasi": {
//                 "jumlah": 50,
//                 "total": 250000
//             },
//             "status_kesamaan": "Sama Persis",
//             "detail_perbedaan": null
//         }
//     ]
// }
    console.log(data)
    let items = 0
    if (data == null) {
        items = ""
    } else {
        items = data[1].hasil_per_item;
    } 


    const formatRupiah = (angka) => {
        // Fungsi sederhana untuk memformat angka menjadi format Rupiah
        return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        }).format(angka);
    };

    const getStatusColor = (status) => {
        switch (status) {
        case 'Sama Persis':
            return 'text-green-600 bg-green-100'; // Hijau untuk sama
        case 'Berbeda':
            return 'text-red-600 bg-red-100';     // Merah untuk berbeda (jika ada)
        default:
            return 'text-gray-600 bg-gray-100';
        }
    };

    // --- Bagian Utama Komponen ---
    return (
        <>
            {data ? (
                <div className="p-4 bg-cream-tua h-full shadow-xl rounded-lg">
                    
                    {/* ### 1. Ringkasan Total (Summary Card) */}
                    <div className="mb-6  rounded-lg">
                        <h3 className="text-xl font-bold text-hijau-muda-3">Ringkasan Perbandingan Total</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm font-medium mt-2">
                            <p>Total Perencanaan: <span className="font-semibold text-gray-700">{formatRupiah(parseInt(data[1].total_perencanaan))}</span></p>
                            <p>Total Realisasi: <span className="font-semibold text-gray-700">{formatRupiah(parseInt(data[1].total_realisasi))}</span></p>
                            <p>Status Kesamaan Total: 
                                <span className={`ml-2 px-2 md:py-0.5 rounded-full ${data[1].total_sama ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                {data[1].total_sama ? 'SAMA' : 'TIDAK SAMA'}
                                </span>
                            </p>
                        <p>Semua Item Sama: 
                            <span className={`ml-2 px-2 md:py-0.5 rounded-full ${data[1].semua_item_sama ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                            {data[1].semua_item_sama ? 'YA' : 'TIDAK'}
                            </span>
                        </p>
                        </div>
                    </div>
                    
                    {/* ### 2. Detail Perbandingan Item (Table) */}
                    <h3 className="text-xl font-bold text-gray-800 ">Detail Perbandingan Item</h3>
                    
                    <div className="overflow-x-auto mt-4 ">
                        <table className="min-w-full h-full divide-y divide-gray-200 border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th rowSpan="2" className="px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                                Nama Item
                            </th>
                            <th colSpan="2" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-l border-b border-gray-200 bg-blue-100">
                                Perencanaan
                            </th>
                            <th colSpan="2" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-l border-b border-gray-200 bg-red-100">
                                Realisasi
                            </th>
                            <th rowSpan="2" className="px-6 py-3 text-center text-xs font-bold text-gray-600 uppercase tracking-wider border-b border-l border-gray-200">
                                Status
                            </th>
                            </tr>
                            <tr>
                            <th className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-l border-b border-gray-200 bg-blue-50">
                                Jumlah
                            </th>
                            <th className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-blue-50">
                                Total (Rp)
                            </th>
                            <th className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-l border-b border-gray-200 bg-red-50">
                                Jumlah
                            </th>
                            <th className="px-6 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider bg-red-50">
                                Total (Rp)
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {items.map((item, index) => {
                                // Tentukan apakah ada perbedaan nilai di Jumlah atau Total untuk penandaan baris
                                const isDiff = item.status_kesamaan !== 'Sama Persis';
                                
                                return (
                                    <tr key={index} className={isDiff ? 'bg-yellow-50 hover:bg-yellow-100' : 'hover:bg-gray-50'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">{item.nama}</td>
                                        
                                        {/* Kolom Perencanaan */}
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-center ${isDiff && item.perencanaan.jumlah !== item.realisasi.jumlah ? 'font-bold bg-yellow-200' : 'text-gray-500'}`}>
                                        {item.perencanaan.jumlah}
                                        </td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${isDiff && item.perencanaan.total !== item.realisasi.total ? 'font-bold bg-yellow-200' : 'text-gray-500'}`}>
                                        {formatRupiah(item.perencanaan.total)}
                                        </td>
                                        
                                        {/* Kolom Realisasi */}
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-center border-l ${isDiff && item.perencanaan.jumlah !== item.realisasi.jumlah ? 'font-bold bg-yellow-200' : 'text-gray-500'}`}>
                                        {item.realisasi.jumlah}
                                        </td>
                                        <td className={`px-6 py-4 whitespace-nowrap text-sm text-right ${isDiff && item.perencanaan.total !== item.realisasi.total ? 'font-bold bg-yellow-200' : 'text-gray-500'}`}>
                                        {formatRupiah(item.realisasi.total)}
                                        </td>
                                        
                                        {/* Kolom Status */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center border-l">
                                            <span className={`px-3 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.status_kesamaan)}`}>
                                                {item.status_kesamaan}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <> </>
            )}
        </>
        
    );
};

export default ComparisonTable;