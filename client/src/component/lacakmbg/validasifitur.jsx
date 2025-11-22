import { IoSearch, IoHappy } from "react-icons/io5"
import jatuhFoto from "../../assets/jatuhfoto.png"
import ImageLoader from "../imageloader";
import { motion } from "framer-motion";

const DUMMY_DATA = {
  menuScore: 5,
  menuMaxScore: 5,
  portionPercentage: 90, // Nilai persentase (0-100)
};

const ValidasiFiturItem = ({user, linkGambar}) => {
    const { menuScore, menuMaxScore, portionPercentage } = DUMMY_DATA;
  
    // bar atas
    const barWidth = Math.min(100, Math.max(0, portionPercentage)); 
    const barWidth2 = Math.min(100, Math.max(0, menuScore*20)); 

    // bar bawah
    

    return (
        <div className="flex flex-col snap-start mb-20 ">
            <div className="h-12 flex justify-between -mb-6 z-1 px-5">
                <div className=" bg-cream-tua rounded-2xl px-6 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]">
                    <p>{user}</p>
                </div>
                <div className="rounded-full bg-cream-tua">
                    <IoHappy className="text-[48px]"></IoHappy>
                </div>
            </div>
            <div className="bg-cream flex flex-col  ">
                <div className="py-10 px-25  rounded-[20px]">
                    <div className="h-75 border-dashed border-2">
                        <img src={linkGambar} alt="" className="object-fit h-full w-full" />
                    </div>
                </div>
                <div className="flex flex-col -mt-6">
                    <div className="h-9 flex ">
                        <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]" >
                            <p>Hasil Analisis Menu MBG</p>
                        </div>
                        
                    </div>
                    <div className="relative z-10 text-white space-y-3 p-5 bg-hijau-muda-3">
                        
                        <div className="flex justify-between items-center text-md text-black font-[--font-family-poppins] font-[var(--font-weight-regular)]">
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
                            <div className="flex justify-between items-center text-md text-black font-[--font-family-poppins] font-[var(--font-weight-regular)]">
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

const ValidasiFitur = ({setmodalPopup, PathGambar,  }) => {

    const widthPercentage = 66;

    return (
        <div id="validasi-menu" className="col-span-7 flex flex-col mr-4">
            <div className="h-9 flex ">
                <div className="text-cream bg-hijau-tua rounded-t-2xl px-4 py-2 flex items-center text-xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                    <p>Validasi Menu</p>
                </div>
            </div>
            <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col p-5 bg-hijau-tua justify-center gap-4 rounded-b-[20px] rounded-tr-[20px]">
                <h1 className="text-cream text-xl text-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Kesesuaian Menu dan Porsi</h1>
                <p className="text-cream text-base text-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Divalidasi oleh 45 siswa</p>
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
                        
                        <div className="text-sm font-semibold text-gray-800 absolute right-4 w-full font-[--font-family-poppins] font-[var(--font-weight-semibold)]">
                            <p className="text-center">{widthPercentage}% Sesuai</p>
                        </div>

                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400 ml-auto">
                            <span role="img" aria-label="sad-face">😞</span>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-col p-5 bg-cream rounded-[20px] relative mb-6 ">
                    <div className="border-hijau-tua border-2 border-dashed mb-4">
                        <div className="h-50 ">
                            <img    src={jatuhFoto} 
                                    alt="" 
                                    className="h-full w-full object-cover" 
                                    onClick={() => setmodalPopup(true)} />
                        </div>
                        
                    </div>
                    <button className="bg-hijau-muda  w-fit pr-4 rounded-xl flex absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-hijau-muda-3"
                            onClick={() => setmodalPopup(true)}>
                            <div className="py-4 px-8">
                                <p className="text-base text-white  font-[--font-family-poppins] font-[var(--font-weight-bold)]">UNGGAH FOTO</p>
                            </div>
                            <IoSearch className=" text-4xl m-auto text-white"></IoSearch>
                    </button>
                </div>
                
                <div className="overflow-y-scroll h-[564px] flex flex-col gap-5 snap-y snap-mandatory scrollbar-hidden">
                    {Array.isArray(PathGambar) && PathGambar.length > 0 ? (
                        PathGambar.map((e) => (
                            <ValidasiFiturItem 
                                key={e.nama || e.gambar_url}
                                user={e.nama} 
                                linkGambar={e.gambar_url} 
                            />
                        ))
                    ) : (
                        <ImageLoader 
                            src="" 
                            alt="Silahkan Lacak MBG" 
                            // Kelas untuk styling gambar dan skeleton
                            className="w-full h-full rounded-lg shadow-lg" 
                        />
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default ValidasiFitur