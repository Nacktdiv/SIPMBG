import {useState, useEffect} from "react";

import { IoSearch, 
    IoLocationOutline, 
    IoChevronDownOutline, 
    IoAlarmOutline, 
} from "react-icons/io5"

import { 
    FaBowlFood, 
    FaDrumstickBite, 
    FaCarrot, 
    FaAppleWhole, 
} from 'react-icons/fa6';
import GambarIbu from "./assets/gambar-ibu.png"

//COMPONENT IMPORT
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LacakFitur from "./component/lacakmbg/lacakfitur"
import ModalFitur from "./component/lacakmbg/modalfitur"
import ValidasiFitur from "./component/lacakmbg/validasifitur";

//LOGIC IMPORT
import createGambarDB from "./api/creategambardb";
import getLacakMbg from "./api/getLacakMbg";



// const ModalFitur = ({onClose, setFileGambar}) => {

//     const [prevPath, setprevPath] = useState(null);
//     const [prevFile, setprevFile] = useState(null)
//     const [anonim, setanonim] = useState(false);
//     const [namaUser, setnamaUser] = useState("");
//     const [asalSekolah, setasalSekolah] = useState("MAN 2 Kota Kediri")


//     // useRef digunakan untuk mengakses elemen input file secara langsung
//     const fileInputRef = useRef(null);

//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//         setprevPath(URL.createObjectURL(file));
//         setprevFile(file);
//         } else {
//         setprevPath(null);
//         }
//     };

//     const handleFileSend = () => {
//         setFileGambar({
//             file: prevFile,
//             nama: anonim ? "Random User" : namaUser,
//             asalSekolah: asalSekolah,
//             anonim: anonim
//         });

//         onClose();
//     };

//     return (
//         <div 
//             className="fixed inset-0 z-50  "
//             onClick={onClose} 
//             id="modal-backdrop"
//             >
    
//             <div className="absolute inset-0 bg-black/30 backdrop-blur-sm w-full"></div>

//             <div 
//                 className="flex items-center justify-center relative shadow-2xl w-full h-full transform transition-all duration-300 scale-100"
//                 onClick={onClose}
//                  // Mencegah klik di sini menutup modal
//             >
//                 <div className="flex gap-5 "
//                      onClick={(e) => e.stopPropagation()}>
//                     <div className="flex-col">
//                         <div className="h-9 flex ">
//                             <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
//                                 <p>Upload Gambar</p>
                                
//                             </div>
//                         </div>
//                         <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative w-125">
//                             <p className="text-xl">Identitas</p>
//                             <div id="select-1" className="flex flex-col gap-1">
//                                 <div className="flex items-center mb-1 gap-2">
                                    
//                                     <IoFingerPrintOutline/>
//                                     <label htmlFor="provinsi" className="text-accent font-semibold">Privasi</label>
//                                 </div>
                                
//                                 <div className="relative">
                                    
//                                     <select id="anonim" 
//                                             value={anonim ? "anonim" : "sinonim"}
//                                             onChange={(e) => setanonim(e.target.value === "anonim")}
//                                             className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
//                                         <option value="anonim" selected>anonim</option>
//                                         <option value="sinonim">sinonim</option>
//                                     </select>
                                    
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             {!anonim && (
//                                 <div id="select-2" className="flex flex-col gap-1">
//                                     <div className="flex items-center mb-1 gap-2">
//                                         <span className="text-accent font-semibold">👤</span>
//                                         <label htmlFor="nama_input" className="text-accent font-semibold">Nama</label>
//                                     </div>
                                    
//                                     <div className="relative">
                                        
//                                         <input 
//                                             type="text" 
//                                             id="nama_input" 
//                                             name="nama"
//                                             value={namaUser}
//                                             onChange={(e) => setnamaUser(e.target.value)} 
//                                             placeholder="Masukkan Nama Anda"
//                                             className="bg-cream w-full p-2 pr-4 rounded-xl text-base border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                                         />
                                        
                                        
//                                         </div>
//                                 </div>
//                             )}
//                             <div id="select-3" className="flex flex-col gap-1">
//                                 <div className="flex items-center mb-1 gap-2">
                                    
//                                     <IoSchoolOutline/>
//                                     <label htmlFor="provinsi" className="text-accent font-semibold">Sekolah/Pesantren/Posyandu</label>
//                                 </div>
                                
//                                 <div className="relative">
                                    
//                                     <select
//                                         className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base"
//                                         value={asalSekolah}
//                                         onChange={(e) => setasalSekolah(e.target.value)}
//                                     >
//                                         <option value="MAN 2 Kota Kediri">MAN 2 Kota Kediri</option>
//                                         <option value="Posyandu Burengan">Posyandu Burengan</option>
//                                         <option value="Ponpes Lirboyo">Ponpes Lirboyo</option>
//                                     </select>
                                    
//                                     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//                                     </div>
//                                 </div>
//                             </div>

//                             <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex self-center"
//                                     onClick={handleFileSend}>
//                                     <div className="py-4 px-8">
//                                         <p className="text-base text-white ">UNGGAH FOTO</p>
//                                     </div>
//                                     <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="flex flex-col">
//                         <div className="h-9 flex ">
//                             <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
//                                 <p>Preview</p>
//                             </div>
//                         </div>
//                         <div className="flex p-5 items-center justify-center bg-hijau-muda-3">
//                             {/* Input file yang sebenarnya, disembunyikan secara visual */}
//                             <input
//                                 id="hidden-file-upload" // ID unik untuk input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={handleFileChange}
//                                 ref={fileInputRef} // Kaitkan ref dengan input
//                                 className="hidden" // Sembunyikan input secara visual
//                             />

//                             <label
//                                 htmlFor="hidden-file-upload"
//                                 className="relative h-82 w-115 flex items-center justify-center cursor-pointer 
//                                         bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg 
//                                         hover:border-blue-500 hover:bg-gray-50 transition-colors duration-200"
//                             >
//                                 {prevPath ? (
//                                 // Jika ada preview, tampilkan gambar
//                                 <img
//                                     src={prevPath}
//                                     alt="Preview Gambar"
//                                     className="h-full w-full object-cover rounded-lg" // Pastikan gambar mengisi area
//                                 />
//                                 ) : (
//                                 // Jika tidak ada preview, tampilkan ikon atau teks placeholder
//                                 <div className="text-center">
//                                     <svg
//                                     className="mx-auto h-12 w-12 text-gray-400"
//                                     stroke="currentColor"
//                                     fill="none"
//                                     viewBox="0 0 48 48"
//                                     aria-hidden="true"
//                                     >
//                                     <path
//                                         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32"
//                                         strokeWidth="2"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     />
//                                     </svg>
//                                     <p className="mt-2 text-sm text-gray-600">
//                                     Klik untuk memilih gambar
//                                     </p>
//                                     <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
//                                 </div>
//                                 )}
//                             </label>
//                         </div>
//                     </div>
//                 </div>            
//             </div>
//         </div>
//     )
// }

// const LacakFitur = ({setPathGambar, setdataValidasi, setstatusValidasi}) => {

//     const  handleLacakMenu = async () => {
//         // 1. Ambil nilai dari semua elemen menggunakan ID
//         const provinsi = document.getElementById('select_provinsi').value;
//         const kota = document.getElementById('select_kota').value;
//         const lokasiSppg = document.getElementById('select_lokasi_sppg').value;
//         const penerima = document.getElementById('select_penerima').value;
//         const tanggalDistribusi = document.getElementById('tanggal_distribusi').value;

//         // 2. Kumpulkan data dalam satu objek
//         const dataForm = {
//             provinsi: provinsi,
//             kota: kota,
//             lokasiSppg: lokasiSppg,
//             penerima: penerima,
//             tanggalDistribusi: tanggalDistribusi
//         };

//         try {
//             setdataValidasi(dataForm)
//             let res = await getLacakMbg(dataForm)
//             console.log("Berhasil", res)
//             setPathGambar(res)
//             setstatusValidasi(true)
//         } catch (e) {
//             console.log("Error ada di", e)
//         }
//     };

//     return (
//         <div id="lacak-sppg" className="col-span-4 flex-col">
//             <div className="h-9 flex ">
//                 <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
//                     <p>Lacak Menu</p>
//                 </div>
//                 {/* <div className="text-cream bg-hijau-muda rounded-t-2xl px-4 py-2 flex items-center ">
//                     <p className="">Lacak Anggaran</p>
//                 </div> */}
//             </div>
//             <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative">
//                     <div id="lokasi" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                    
//                         <h1 className="text-2xl font-bold text-center mb-6 text-accent">
//                             Lokasi Dapur SPPG
//                         </h1>

//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center mb-1">
                                
//                                 <IoLocationOutline/>
//                                 <label htmlFor="provinsi" className="text-accent font-semibold">Provinsi</label>
//                             </div>
                            
//                             <div className="relative">
                                
//                                 <select id="select_provinsi" 
//                                         className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base"
//                                         defaultValue="Jawa Timur">
//                                     <option value="Jawa Timur" >Jawa Timur</option>
//                                     <option value="Jawa Barat">Jawa Barat</option>
//                                     <option value="Jawa Tengah">Jawa Tengah</option>
//                                 </select>
                                
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <IoChevronDownOutline/>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center mb-1">
                                
//                                 <IoLocationOutline/>
//                                 <label htmlFor="provinsi" className="text-accent font-semibold">Kota/Kabupaten</label>
//                             </div>
                            
//                             <div className="relative">
                                
//                                 <select id="select_kota" 
//                                         className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base"
//                                         defaultValue="Kota Kediri">
//                                     <option value="Kota Kediri" >Kota Kediri</option>
//                                     <option value="Kota Batu">Kota Batu</option>
//                                     <option value="Kota Kendari">Kota Kendari</option>
//                                 </select>
                                
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <IoChevronDownOutline/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div id="penerima" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                    
//                         <h1 className="text-2xl font-bold text-center mb-6 text-accent">
//                             Lokasi Penerima MBG
//                         </h1>

//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center mb-1">
                                
//                                 <IoLocationOutline/>
//                                 <label htmlFor="provinsi" className="text-accent font-semibold">Lokasi SPPG</label>
//                             </div>
                            
//                             <div className="relative">
                                
//                                 <select id="select_lokasi_sppg" 
//                                         className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base"
//                                         defaultValue="Burengan">
//                                     <option value="Burengan" >Burengan</option>
//                                     <option value="Banjarmlati">Banjarmlati</option>
//                                     <option value="Pulosari">Pulosari</option>
//                                 </select>
                                
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <IoChevronDownOutline/>
//                                 </div>
//                             </div>
//                         </div>
                        
//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center mb-1">
                                
//                                 <IoLocationOutline/>
//                                 <label htmlFor="provinsi" className="text-accent font-semibold">Sekolah/Pesantren/Posyandu</label>
//                             </div>
                            
//                             <div className="relative">
                                
//                                 <select id="select_penerima" 
//                                         className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base"
//                                         defaultValue="MAN 2 Kota Kediri">
//                                     <option value="MAN 2 Kota Kediri" >MAN 2 Kota Kediri</option>
//                                     <option value="Posyandu Burengan">Posyandu Burengan</option>
//                                     <option value="Ponpes Lirboyo">Ponpes Lirboyo</option>
//                                 </select>
                                
//                                 <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                     <IoChevronDownOutline/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div id="waktu" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2 mb-8">
                    
//                         <h1 className="text-2xl font-bold text-center mb-6 text-accent">
//                             Waktu Distribusi MBG
//                         </h1>

//                         <div className="flex flex-col gap-1">
//                             <div className="flex items-center mb-1">
                                
//                                 <IoAlarmOutline />
//                                 <label htmlFor="provinsi" className="text-accent font-semibold">Tanggal Distribus</label>
//                             </div>
                            
//                             <div className="relative">
//                             <input 
//                                 id="tanggal_distribusi" 
//                                 name="tanggal_distribusi"
//                                 type="date" 
//                                 className="bg-cream dropdown-style w-full p-2 pr-10 round" 
//                             />
//                             </div>
//                         </div>
//                     </div>
//                     <button className="bg-hijau-tua  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 "
//                             onClick={handleLacakMenu}>
//                         <div className="py-4 px-8">
//                             <p className="text-base text-white ">LACAK MENU</p>
//                         </div>
//                         <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
//                     </button>
//             </div>
//         </div>
//     )
// }

const DetailMenuFitur = () => {
    return (
        <div id="container-gambar" className=" col-span-8 flex-col ml-4">
            <div className="h-9 flex ">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                    <p>Menu MBG Hari Ini</p>
                </div>
            </div>
            <div className="bg-hijau-muda-3 flex flex-col  gap-[20px] p-5 relative">
                <div className="h-[572px]">
                    <img
                        src={GambarIbu}
                        alt="Deskripsi Gambar"
                        className="w-full h-full object-cover pb-14.5"
                    />
                </div>
                {/* Ojo di utak utik iki code seng angel tur jelimet*/}
                <div className="flex gap-2 items-stretch absolute left-5 right-5 top-full -translate-y-1/2">
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaBowlFood className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Karbohidrat</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Nasi Putih</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaDrumstickBite className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaAppleWhole className="text-xl"/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Buah-Buahan</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Apple</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaCarrot/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sayur-Sayuran</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sawi Hijau</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CommentFitur = () => {

    const comments = [
        {
            id: 1,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 2,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 3,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 4,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 5,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 6,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
    ];

    return (
        <div id="lacak-sppg" className="col-span-5 flex-col">
            
            {/* HEADER */}
            <div className="h-9 flex">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                    <p>Feedback</p>
                </div>
            </div>

            {/* MAIN CONTAINER */}
            <div className="bg-hijau-muda-3 flex flex-col gap-5 p-5 h-227 relative rounded-b-2xl">

                

                {/* COMMENT LIST */}
                <div className="flex flex-col gap-5 overflow-y-auto">

                    {comments.map((c) => (
                        <div key={c.id} className="bg-cream p-4 rounded-xl flex flex-col gap-3">

                            {/* Top: avatar + name */}
                            <div className="flex items-center gap-3">
                                <img src={c.avatar} className="w-10 h-10 rounded-full" />
                                <p className="font-semibold text-[13px]">{c.name}</p>
                            </div>

                            {/* Comment text */}
                            <p className="text-[12px] leading-relaxed pr-4 text-hitam/90">
                                {c.text}
                            </p>

                            {/* Button row */}
                            <div className="flex gap-3 justify-end mt-1">
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <img src="/up-icon.png" className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <img src="/down-icon.png" className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-rose-300/60 rounded-full">
                                    <img src="/flag-icon.png" className="w-4 h-4" />
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

                {/* INPUT */}
                <div className="flex flex-wrap bg-cream rounded-xl px-4 py-2 gap-2">
                    <input
                        placeholder="Tulis feedback atau umpan balik disini..."
                        className="flex-1 min-w-[150px] bg-transparent outline-none text-sm text-hitam"
                    />

                    <button className="px-4 py-2 bg-hijau-muda rounded-xl text-sm text-cream">
                        Kirim
                    </button>
                </div>

            </div>
        </div>
    );
};



function LacakMbg() {
    const [modalPopup, setmodalPopup] = useState(false)
    const [FileGambar, setFileGambar] = useState(null)
    const [PathGambar, setPathGambar] = useState("")
    const [dataValidasi, setdataValidasi] = useState(null)
    const [statusValidasi, setstatusValidasi] = useState(false)

    const handleUploadAndInsert = async () => {
        try {
            if (FileGambar && statusValidasi) {
                await createGambarDB(FileGambar);
                let res = await getLacakMbg(dataValidasi)
                console.log("Berhasil", res)
                setPathGambar(res)
            } else if (FileGambar && statusValidasi === false){
                await createGambarDB(FileGambar);
            }

            setFileGambar(null); 
        } catch (e) {
            console.error("ERROR handleUploadAndInsert", e);
            setFileGambar(null); 
        }
    };

    useEffect( () => {
        handleUploadAndInsert()
    }, [FileGambar]);
    
    return (
        <div className="bg-cream">
            <Navbar />
            <div id="section-1" className="grid-container pt-24 ">
                <LacakFitur setPathGambar={setPathGambar} setdataValidasi={setdataValidasi} setstatusValidasi={setstatusValidasi}/>
                <DetailMenuFitur />
            </div>
            <div className="h-25"></div>
            <div id="section-2" className="grid-container">
                <ValidasiFitur modalPopup={modalPopup} setmodalPopup={setmodalPopup} PathGambar={PathGambar} />
                <CommentFitur />
            </div>
            <Footer className=''/>
            {modalPopup && <ModalFitur onClose={() => setmodalPopup(false)} setFileGambar={setFileGambar} />}
        </div>
    );
}
export default LacakMbg;