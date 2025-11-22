import { IoSearch, 
    IoLocationOutline, 
    IoChevronDownOutline, 
    IoAlarmOutline, 
} from "react-icons/io5"

import getLacakMbg from "../../api/getLacakMbg";

const LacakFitur = ({setPathGambar, setdataValidasi, setstatusValidasi, setperencanaanMenu}) => {

    const  handleLacakMenu = async () => {
        // 1. Ambil nilai dari semua elemen menggunakan ID
        const provinsi = document.getElementById('select_provinsi').value;
        const kota = document.getElementById('select_kota').value;
        const lokasiSppg = document.getElementById('select_lokasi_sppg').value;
        const penerima = document.getElementById('select_penerima').value;
        const tanggalDistribusi = document.getElementById('tanggal_distribusi').value;

        // 2. Kumpulkan data dalam satu objek
        const dataForm = {
            provinsi: provinsi,
            kota: kota,
            lokasiSppg: lokasiSppg,
            penerima: penerima,
            tanggalDistribusi: tanggalDistribusi
        };

        try {
            setdataValidasi(dataForm)
            let res = await getLacakMbg(dataForm)
            console.log("Berhasil", res)
            const resBukti = res[0]
            const resRencana = res[1]
            setPathGambar(resBukti)
            setperencanaanMenu(resRencana)
            setstatusValidasi(true)
        } catch (e) {
            console.log("Error ada di", e)
        }
    };

    return (
        <div id="lacak-sppg" className="col-span-4 flex-col">
            <div className="h-9 flex ">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center text-xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                    <p>Lacak Menu</p>
                </div>
                {/* <div className="text-cream bg-hijau-muda rounded-t-2xl px-4 py-2 flex items-center ">
                    <p className="">Lacak Anggaran</p>
                </div> */}
            </div>
            <div className="bg-hijau-muda-3 flex flex-col gap-[20px] p-5  relative">
                    <div id="lokasi" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                    
                        <h1 className="text-2xl font-bold text-center mb-6 font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                            Lokasi Dapur SPPG
                        </h1>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center mb-1">
                                
                                <IoLocationOutline/>
                                <label htmlFor="provinsi" className=" font-[--font-family-poppins] font-[var(--font-weight-semibold)] ">Provinsi</label>
                            </div>
                            
                            <div className="relative">
                                
                                <select id="select_provinsi" 
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]"
                                        defaultValue="Jawa Timur">
                                    <option value="Jawa Timur" >Jawa Timur</option>
                                    <option value="Jawa Barat">Jawa Barat</option>
                                    <option value="Jawa Tengah">Jawa Tengah</option>
                                </select>
                                
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <IoChevronDownOutline/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center mb-1">
                                
                                <IoLocationOutline/>
                                <label htmlFor="provinsi" className="font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Kota/Kabupaten</label>
                            </div>
                            
                            <div className="relative">
                                
                                <select id="select_kota" 
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]"
                                        defaultValue="Kota Kediri">
                                    <option value="Kota Kediri" >Kota Kediri</option>
                                    <option value="Kota Batu">Kota Batu</option>
                                    <option value="Kota Kendari">Kota Kendari</option>
                                </select>
                                
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <IoChevronDownOutline/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="penerima" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2">
                    
                        <h1 className="text-2xl font-bold text-center mb-6 text-accent">
                            Lokasi Penerima MBG
                        </h1>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center mb-1">
                                
                                <IoLocationOutline/>
                                <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Lokasi SPPG</label>
                            </div>
                            
                            <div className="relative">
                                
                                <select id="select_lokasi_sppg" 
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none font-[--font-family-poppins] font-[var(--font-weight-regular)] text-base"
                                        defaultValue="Burengan">
                                    <option value="Burengan" >Burengan</option>
                                    <option value="Banjarmlati">Banjarmlati</option>
                                    <option value="Pulosari">Pulosari</option>
                                </select>
                                
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <IoChevronDownOutline/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center mb-1">
                                
                                <IoLocationOutline/>
                                <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)] font-semibold">Sekolah/Pesantren/Posyandu</label>
                            </div>
                            
                            <div className="relative">
                                
                                <select id="select_penerima" 
                                        className="bg-cream dropdown-style w-full p-2 pr-10 rounded-xl appearance-none font-[--font-family-poppins] font-[var(--font-weight-regular)] text-base"
                                        defaultValue="MAN 2 Kota Kediri">
                                    <option value="MAN 2 Kota Kediri" >MAN 2 Kota Kediri</option>
                                    <option value="Posyandu Burengan">Posyandu Burengan</option>
                                    <option value="Ponpes Lirboyo">Ponpes Lirboyo</option>
                                </select>
                                
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <IoChevronDownOutline/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="waktu" className="bg-cream-tua w-full max-w-sm rounded-xl shadow-2xl flex flex-col gap-4 p-2 mb-8">
                    
                        <h1 className="text-2xl font-bold text-center mb-6 text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">
                            Waktu Distribusi MBG
                        </h1>

                        <div className="flex flex-col gap-1">
                            <div className="flex items-center mb-1">
                                
                                <IoAlarmOutline />
                                <label htmlFor="provinsi" className="text-accent font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Tanggal Distribusi</label>
                            </div>
                            
                            <div className="relative">
                            <input 
                                id="tanggal_distribusi" 
                                name="tanggal_distribusi"
                                type="date" 
                                className="bg-cream dropdown-style w-full p-2 pr-10 round" 
                            />
                            </div>
                        </div>
                    </div>
                    <button className="bg-hijau-tua  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 "
                            onClick={handleLacakMenu}>
                        <div className="py-4 px-8 ">
                            <p className="text-base text-white font-[--font-family-poppins] font-[var(--font-weight-bold)] w-full ">LACAK MENU</p>
                        </div>
                        <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                    </button>
            </div>
        </div>
    )
}

export default LacakFitur