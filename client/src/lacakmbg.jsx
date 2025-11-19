import {useState, useEffect, useRef} from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { IoSearch } from "react-icons/io5"
import GambarIbu from "./assets/gambar-ibu.png"

function LacakMbg() {
    return (
        <>
            <Navbar />
            <div className="grid-container pt-24 ">
                <div className="col-span-4 flex-col">
                    <div className="h-9 flex ">
                        <div className=" bg-blue-500 rounded-t-2xl px-4 py-2 flex items-center">
                            <p>Lacak Menu</p>
                        </div>
                        <div className=" bg-red-500 rounded-t-2xl px-4 py-2 flex items-center ">
                            <p className="">Lacak Anggaran</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 flex flex-col gap-[20px] p-5  relative">
                            <div id="lokasi" class="bg-red-500 w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                            
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
                                        
                                        <select id="provinsi" class="bg-white dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
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
                                        
                                        <select id="provinsi" class="bg-white dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
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
                            <div id="penerima" class="bg-yellow-500 w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                            
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
                                        
                                        <select id="provinsi" class="bg-white dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
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
                                        
                                        <select id="provinsi" class="bg-white dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
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

                            <div id="waktu" class="bg-green-500 w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2 mb-8">
                            
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
                                        
                                        <select id="provinsi" class="bg-white dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base">
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
                            <button className="bg-red-100  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 ">
                                <div className="py-4 px-8">
                                    <p className="text-base ">LACAK MENU</p>
                                </div>
                                <IoSearch className=" text-4xl m-auto "></IoSearch>
                            </button>
                    </div>
                </div>
                <div className=" col-span-8 flex-col ml-4">
                    <div className="h-9 flex ">
                        <div className=" bg-blue-500 rounded-t-2xl px-4 py-2 flex items-center">
                            <p>Lacak Menu</p>
                        </div>
                        <div className=" bg-red-500 rounded-t-2xl px-4 py-2 flex items-center ">
                            <p className="">Lacak Anggaran</p>
                        </div>
                    </div>
                    <div className="bg-blue-500 flex flex-col  gap-[20px] p-5 relative">
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
                                <div className="rounded-full w-10 h-10 bg-green-100 z-1"></div>
                                <div className=" bg-yellow-100 -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="rounded-full w-10 h-10 bg-green-100 z-1"></div>
                                <div className=" bg-yellow-100 -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="rounded-full w-10 h-10 bg-green-100 z-1"></div>
                                <div className=" bg-yellow-100 -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center">Ayam Goreng</p>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col min-w-0">
                                <div className="rounded-full w-10 h-10 bg-green-100 z-1"></div>
                                <div className=" bg-yellow-100 -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">Protein Hewani </p>
                                    <p className="text-base overflow-auto whitespace-nowrap w-full text-center">100gr</p>
                                    <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center">Ayam Goreng</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="h-13"></div>
            <Footer className=''/>
        </>
    );
}
export default LacakMbg;