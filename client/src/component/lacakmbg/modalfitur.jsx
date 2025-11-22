import { IoSearch, 
    IoFingerPrintOutline,
    IoSchoolOutline
} from "react-icons/io5"

import {useState, useRef} from "react";

const ModalFitur = ({onClose, setFileGambar}) => {

    const [prevPath, setprevPath] = useState(null);
    const [prevFile, setprevFile] = useState(null)
    const [anonim, setanonim] = useState(false);
    const [namaUser, setnamaUser] = useState("");
    const [asalSekolah, setasalSekolah] = useState("MAN 2 Kota Kediri")


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

    const handleFileSend = () => {
        setFileGambar({
            file: prevFile,
            nama: anonim ? "Anonim" : namaUser,
            asalSekolah: asalSekolah,
            anonim: anonim
        });

        onClose();
    };

    return (
        <div 
            className="fixed inset-0 z-50  "
            onClick={onClose} 
            id="modal-backdrop"
            >
    
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm w-full"></div>

            <div 
                className="flex items-center justify-center relative shadow-2xl w-full h-full transform transition-all duration-300 scale-100"
                onClick={onClose}
                 // Mencegah klik di sini menutup modal
            >
                <div className="flex gap-5 "
                     onClick={(e) => e.stopPropagation()}>
                    <div className="flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                                <p>Upload Gambar</p>
                                
                            </div>
                        </div>
                        <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative w-125">
                            <p className="text-xl font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Identitas</p>
                            <div id="select-1" className="flex flex-col gap-1">
                                <div className="flex items-center mb-1 gap-2">
                                    
                                    <IoFingerPrintOutline/>
                                    <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Privasi</label>
                                </div>
                                
                                <div className="relative">
                                    
                                    <select id="anonim" 
                                            value={anonim ? "anonim" : "sinonim"}
                                            onChange={(e) => setanonim(e.target.value === "anonim")}
                                            className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">
                                        <option value="anonim" selected>anonim</option>
                                        <option value="sinonim">sinonim</option>
                                    </select>
                                    
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            {!anonim && (
                                <div id="select-2" className="flex flex-col gap-1">
                                    <div className="flex items-center mb-1 gap-2">
                                        <span className="text-accent font-semibold">👤</span>
                                        <label htmlFor="nama_input" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Nama</label>
                                    </div>
                                    
                                    <div className="relative">
                                        
                                        <input 
                                            type="text" 
                                            id="nama_input" 
                                            name="nama"
                                            value={namaUser}
                                            onChange={(e) => setnamaUser(e.target.value)} 
                                            placeholder="Masukkan Nama Anda"
                                            className="bg-cream w-full p-2 pr-4 rounded-xl text-base border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        />
                                        
                                        
                                        </div>
                                </div>
                            )}
                            <div id="select-3" className="flex flex-col gap-1">
                                <div className="flex items-center mb-1 gap-2">
                                    
                                    <IoSchoolOutline/>
                                    <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Sekolah/Pesantren/Posyandu</label>
                                </div>
                                
                                <div className="relative">
                                    
                                    <select
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]"
                                        value={asalSekolah}
                                        onChange={(e) => setasalSekolah(e.target.value)}
                                    >
                                        <option value="MAN 2 Kota Kediri">MAN 2 Kota Kediri</option>
                                        <option value="Posyandu Burengan">Posyandu Burengan</option>
                                        <option value="Ponpes Lirboyo">Ponpes Lirboyo</option>
                                    </select>
                                    
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex self-center"
                                    onClick={handleFileSend}>
                                    <div className="py-4 px-8">
                                        <p className="text-base text-white font-[--font-family-poppins] font-[var(--font-weight-semibold)]">UNGGAH FOTO</p>
                                    </div>
                                    <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="h-9 flex ">
                            <div className="text-cream text-xl bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
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
}

export default ModalFitur