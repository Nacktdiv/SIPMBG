import {useState, useEffect, useRef} from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { IoSearch, IoHappy } from "react-icons/io5"
import GambarIbu from "./assets/gambar-ibu.png"

const DUMMY_DATA = {
  menuScore: 5,
  menuMaxScore: 5,
  portionPercentage: 90, // Nilai persentase (0-100)
};

const ModalFiturInput = ({}) => {
    return (
        <>
        </>
    )
}

const ModalFitur = ({onClose}) => {
    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose} 
            id="modal-backdrop"
            >
    
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

            <div 
                className="relative bg-white p-6 rounded-lg shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100"
                onClick={(e) => e.stopPropagation()} // Mencegah klik di sini menutup modal
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Menu Fitur SIP MBG</h2>
                <div className="text-gray-600 space-y-3">
                    <p>Ini adalah tempat form identitas dan unggah foto Anda berada.</p>
                    <p className="text-sm italic">Konten latar belakang sudah otomatis ter-blur.</p>
                </div>
                
                <button 
                onClick={onClose} 
                className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition duration-150"
                >
                Tutup Fitur
                </button>
            </div>
        </div>
    )
}

function LacakMbg() {
    const [modalPopup, setmodalPopup] = useState(false)
    const { menuScore, menuMaxScore, portionPercentage } = DUMMY_DATA;
  
    // bar atas
    const barWidth = Math.min(100, Math.max(0, portionPercentage)); 
    const barWidth2 = Math.min(100, Math.max(0, menuScore*20)); 

    // bar bawah
    const widthPercentage = 66;



    function itemKesesuaianMenu (item) {
        return (
            <div className="flex flex-col snap-start ">
                <div className="h-12 flex justify-between -mb-6 z-1 px-5">
                    <div className=" bg-cream-tua rounded-2xl px-6 py-2 flex items-center">
                        <p>User{item}</p>
                    </div>
                    <div className="rounded-full bg-cream-tua">
                        <IoHappy className="text-[48px]"></IoHappy>
                    </div>
                </div>
                <div className="bg-cream flex flex-col  ">
                    <div className="py-10 px-25  rounded-[20px]">
                        {/* Sementara */}
                        <div className="h-50 border-dashed border-2"></div>
                    </div>
                    <div className="flex flex-col -mt-6">
                        <div className="h-9 flex ">
                            <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                                <p>Hasil Analisis Menu MBG</p>
                            </div>
                            
                        </div>
                        <div className="relative z-10 text-white space-y-3 p-5 bg-hijau-muda-3">
                            
                            <div className="flex justify-between items-center text-md text-black">
                                <span>Kesesuaian Menu</span>
                                <span className="font-semibold text-lg" >
                                    {menuScore}/{menuMaxScore}
                                </span>
                            </div>
                                <div className="w-full h-3 rounded-full overflow-hidden opacity-50 relative bg-cream"> 
                                    <div 
                                        className="absolute top-0 left-0 h-full rounded-full bg-coklat"
                                        style={{ 
                                            width: `${barWidth2}%`,  
                                            transition: 'width 0.5s ease-in-out'
                                        }}
                                    >
                                    </div>
                                </div>

                            <div className="space-y-1">
                                <div className="flex justify-between items-center text-md text-black ">
                                    <span>Kesesuaian Porsi</span>
                                    <span className="font-semibold text-lg">
                                        {portionPercentage}%
                                    </span>
                                </div>
                                
                                <div className="w-full h-3 rounded-full overflow-hidden opacity-50 relative bg-cream" > 
                                    <div 
                                        className="absolute top-0 left-0 h-full rounded-full bg-coklat"
                                        style={{ 
                                            width: `${barWidth }%`, 
                                            transition: 'width 0.5s ease-in-out'
                                        }}
                                    >
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="bg-cream">
            <Navbar />
            <div id="section-1" className="grid-container pt-24 ">
                <div id="lacak-sppg" className="col-span-4 flex-col">
                    <div className="h-9 flex ">
                        <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                            <p>Lacak Menu</p>
                        </div>
                        <div className="text-cream bg-hijau-muda rounded-t-2xl px-4 py-2 flex items-center ">
                            <p className="">Lacak Anggaran</p>
                        </div>
                    </div>
                    <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative">
                            <div id="lokasi" class="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                            
                                <h1 class="text-2xl font-bold text-center mb-6 text-accent">
                                    Lokasi Dapur SPPG
                                </h1>

                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center mb-1">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                        <label for="provinsi" class="text-accent font-semibold">Provinsi</label>
                                    </div>
                                    
                                    <div class="relative">
                                        
                                        <select id="provinsi" class="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
                                            <option value="jawa_timur" selected>Jawa Timur</option>
                                            <option value="jawa_barat">Jawa Barat</option>
                                            <option value="jawa_tengah">Jawa Tengah</option>
                                        </select>
                                        
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center mb-1">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                        <label for="provinsi" class="text-accent font-semibold">Kota/Kabupaten</label>
                                    </div>
                                    
                                    <div class="relative">
                                        
                                        <select id="provinsi" class="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
                                            <option value="jawa_timur" selected>Kota Kediri</option>
                                            <option value="jawa_barat">Kota Batu</option>
                                            <option value="jawa_tengah">Kota Kendari</option>
                                        </select>
                                        
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="penerima" class="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                            
                                <h1 class="text-2xl font-bold text-center mb-6 text-accent">
                                    Lokasi Penerima MBG
                                </h1>

                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center mb-1">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                        <label for="provinsi" class="text-accent font-semibold">Lokasi SPPG</label>
                                    </div>
                                    
                                    <div class="relative">
                                        
                                        <select id="provinsi" class="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
                                            <option value="jawa_timur" selected>SPPG Burengan</option>
                                            <option value="jawa_barat">SPPG Banjarmlati</option>
                                            <option value="jawa_tengah">SPPG Pulosari</option>
                                        </select>
                                        
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center mb-1">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                        <label for="provinsi" class="text-accent font-semibold">Sekolah/Pesantren/Posyandu</label>
                                    </div>
                                    
                                    <div class="relative">
                                        
                                        <select id="provinsi" class="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
                                            <option value="jawa_timur" selected>MAN 2 Kota Kediri</option>
                                            <option value="jawa_barat">Posyandu Burengan</option>
                                            <option value="jawa_tengah">Ponpes Lirboyo</option>
                                        </select>
                                        
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="waktu" class="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2 mb-8">
                            
                                <h1 class="text-2xl font-bold text-center mb-6 text-accent">
                                    Waktu Distribusi MBG
                                </h1>

                                <div class="flex flex-col gap-1">
                                    <div class="flex items-center mb-1">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-accent" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                        </svg>
                                        <label for="provinsi" class="text-accent font-semibold">Tanggal Distribus</label>
                                    </div>
                                    
                                    <div class="relative">
                                        
                                        <select id="provinsi" class="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
                                            <option value="jawa_timur" selected>Jawa Timur</option>
                                            <option value="jawa_barat">Jawa Barat</option>
                                            <option value="jawa_tengah">Jawa Tengah</option>
                                        </select>
                                        
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-hijau-tua  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 ">
                                <div className="py-4 px-8">
                                    <p className="text-base text-white ">LACAK MENU</p>
                                </div>
                                <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                            </button>
                    </div>
                </div>
                <div id="container-gambar" className=" col-span-8 flex-col ml-4">
                    <div className="h-9 flex ">
                        <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                            <p>Lacak Menu</p>
                        </div>
                        <div className="text-cream bg-hijau-muda rounded-t-2xl px-4 py-2 flex items-center ">
                            <p className="">Lacak Anggaran</p>
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
                                <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1"></div>
                                <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1"></div>
                                <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1"></div>
                                <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1"></div>
                                <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-13"></div>
            <div id="section-2" className="grid-container">
                <div id="validasi-menu" className="col-span-8 flex flex-col">
                    <div className="h-9 flex ">
                        <div className="text-cream bg-hijau-tua rounded-t-2xl px-4 py-2 flex items-center">
                            <p>Lacak Menu</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 bg-hijau-tua justify-center gap-4">
                        <h1 className="text-cream text-xl text-center">Kesesuaian Menu dan Porsi</h1>
                        <p className="text-cream text-base text-center">Divalidasi oleh 45 siswa</p>
                        <div className="relative h-8 rounded-full overflow-hidden full"> 
                            <div 
                            className="absolute top-0 left-0 h-full rounded-full"
                            style={{ 
                                // Mengatur lebar dinamis berdasarkan persentase
                                width: `${widthPercentage}%`,
                                // Ganti warna background dengan kode warna cokelat muda/tan dari gambar
                                backgroundColor: '#D7C395', 
                                // Menambahkan transisi agar pergerakan bar lebih mulus
                                transition: 'width 0.5s ease-in-out'
                            }}
                            >
                            </div>
                            
                            <div className="absolute top-0 left-0 w-full h-full flex items-center  justify-center">
                                
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 justify-self-start">
                                    <span role="img" aria-label="smiling-face">😊</span>
                                </div>
                                
                                <div className="text-sm font-semibold text-gray-800 absolute right-4 w-full">
                                    <p className="text-center">{widthPercentage}% Sesuai</p>
                                </div>

                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 ml-auto">
                                    <span role="img" aria-label="sad-face">😞</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col p-5 bg-cream rounded-[20px] relative mb-6 ">
                            <div className="border-hijau-tua border-2 border-dashed mb-1">
                                <div className="h-50 "></div>
                                
                            </div>
                            <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 "
                                    onClick={() => setmodalPopup(true)}>
                                    <div className="py-4 px-8">
                                        <p className="text-base text-white ">UNGGAH FOTO</p>
                                    </div>
                                    <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                            </button>
                        </div>
                        
                        <div className="overflow-y-scroll h-[464px] flex flex-col gap-5 snap-y snap-mandatory scrollbar-hidden">
                            {
                                itemKesesuaianMenu(1)
                            }
                            {
                                itemKesesuaianMenu(2)
                            }
                            {
                                itemKesesuaianMenu(3)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer className=''/>
            {modalPopup && <ModalFitur onClose={() => setmodalPopup(false)} />}
        </div>
    );
}
export default LacakMbg;