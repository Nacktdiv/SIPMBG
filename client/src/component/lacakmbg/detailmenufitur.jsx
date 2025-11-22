
import { 
    FaBowlFood, 
    FaDrumstickBite, 
    FaCarrot, 
    FaAppleWhole, 
    FaGlassWater
} from 'react-icons/fa6';

import { motion } from 'framer-motion';
import ImageLoader from '../imageloader';

const DetailMenuFitur = ({perencanaanMenu}) => {
    let urlgambar = ""
    let data_menu = null
    if(perencanaanMenu != null) {
        urlgambar = perencanaanMenu.gambar_url
        data_menu = perencanaanMenu.data_menu
    }

    return (
        <div id="container-gambar" className=" col-span-8 flex-col ml-4">
            <div className="h-9 flex shadow-2xl">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center text-xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                    <p>Menu MBG Hari Ini</p>
                </div>
            </div>
            <motion.div 
                className="bg-hijau-muda-3 flex flex-col  gap-[20px] p-5 relative shadow-2xl rounded-tr-[20px] rounded-b-[20px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}>
                <div className="h-[572px] ">
                    {/* <img
                        src={urlgambar}
                        alt="Deskripsi Gambar"
                        className="w-full h-full object-fit pb-14.5 text-4xl  rounded-[20px] transition duration-300 transition duration-300 hover:scale-105"
                    /> */}
                    <ImageLoader 
                        src={urlgambar} 
                        alt="Menu Utama Harian" 
                        className="w-full h-full rounded-lg " 
                    />
                </div>
                {/* Ojo di utak utik iki code seng angel tur jelimet*/}
                <div className="flex gap-2 items-stretch absolute -left-0 top-full -translate-y-1/2 w-full font-[--font-family-poppins] font-[var(--font-weight-semibold)] ">
                    <div className="flex flex-1 flex-col min-w-0 transition duration-300 hover:scale-115 ">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1 shadow-md"><FaBowlFood className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2 shadow-md">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Karbohidrat</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.karbohidrat.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.karbohidrat.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0 transition duration-300 hover:scale-115">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1 shadow-md"><FaDrumstickBite className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2 shadow-md">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden ">Protein</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.protein.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.protein.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0 transition duration-300 hover:scale-115">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center shadow-md"> <FaAppleWhole className="text-xl"/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2 shadow-md">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Buah-Buahan</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.buah.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.buah.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0 transition duration-300 hover:scale-115">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center shadow-md"> <FaCarrot/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2 shadow-md">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sayur-Sayuran</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.sayur.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.sayur.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0 transition duration-300 hover:scale-115">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center shadow-md"> <FaGlassWater/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2 shadow-md">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Susu</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.susu.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.susu.nama}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default DetailMenuFitur