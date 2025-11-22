// SPPGForm.jsx
import { IoSearch, 
    IoFingerPrintOutline,
    IoSchoolOutline
} from "react-icons/io5"
import React, { useState, useRef } from 'react';
import createGambarsppg from "./api/creategambarsppg";

const SPPGForm = () => {
    
    const [prevPath, setprevPath] = useState(null);
    const [prevFile, setprevFile] = useState(null)

    // useRef digunakan untuk mengakses elemen input file secara langsung
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setprevPath(URL.createObjectURL(file));
            setprevFile(file);
        } else {
            setprevPath(null);
        }
    };

    const dataDummy = {
        nama_sppg : "Burengan",
        file : prevFile,
        nama_menu : "nasi ayam goreng",
        data_menu : {
          karbohidrat : {nama : "nasi putih", jumlah : "200gr"},
          protein : {nama : "ayam goreng", jumlah : "100gr"}, 
          buah : {nama : "pisang", jumlah : "150gr"},
          sayur : {nama : "tumis sawi", jumlah : "75gr"},
          susu : {nama : "Ada", jumlah : "150ml"}
        }
    }

    const handleFileSend = () => {
      createGambarsppg(dataDummy)
    };

    return (
        <div 
            className="fixed inset-0 z-50  "
            id="modal-backdrop"
            >
    
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm w-full"></div>

            <div 
                className="flex items-center justify-center relative shadow-2xl w-full h-full transform transition-all duration-300 scale-100"
                  // Mencegah klik di sini menutup modal
            >
                <div className="flex gap-5 "
                      onClick={(e) => e.stopPropagation()}>
                    <div className="flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                                <p>Upload Gambar</p>
                                
                            </div>
                        </div>
                        <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative w-125">
                            <p className="text-xl">Identitas</p>
                            <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex self-center"
                                    onClick={handleFileSend}>
                                    <div className="py-4 px-8">
                                        <p className="text-base text-white ">UNGGAH FOTO</p>
                                    </div>
                                    <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                                <p>Preview</p>
                            </div>
                        </div>
                        <div className="flex p-5 items-center justify-center bg-hijau-muda-3">
                            {/* Input file yang sebenarnya, disembunyikan secara visual */}
                            <input
                                id="hidden-file-upload" // ID unik untuk input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                ref={fileInputRef} // Kaitkan ref dengan input
                                className="hidden" // Sembunyikan input secara visual
                            />

                            <label
                                htmlFor="hidden-file-upload"
                                className="relative h-82 w-115 flex items-center justify-center cursor-pointer 
                                        bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg 
                                        hover:border-blue-500 hover:bg-gray-50 transition-colors duration-200"
                            >
                                {prevPath ? (
                                // Jika ada preview, tampilkan gambar
                                <img
                                    src={prevPath}
                                    alt="Preview Gambar"
                                    className="h-full w-full object-cover rounded-lg" // Pastikan gambar mengisi area
                                />
                                ) : (
                                // Jika tidak ada preview, tampilkan ikon atau teks placeholder
                                <div className="text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L40 32"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <p className="mt-2 text-sm text-gray-600">
                                    Klik untuk memilih gambar
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF hingga 10MB</p>
                                </div>
                                )}
                            </label>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
};

export default SPPGForm;