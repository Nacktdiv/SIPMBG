import { motion } from 'framer-motion';
const KepuasanFitur = ({KepuasanLacak}) => {

    const kepuasan = [5, 2, 45] 

    return (
        <div id="validasi-menu" className="col-span-4 md:col-span-12  flex flex-col md:mr-4 mt-5">
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
                <h1 className="text-cream text-xl text-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Kepuasan Penerima MBG</h1>
                <h1 className="text-cream text-xl text-center font-[--font-family-poppins] font-[var(--font-weight-semibold)]">jumlah Validator {kepuasan[3]}</h1>
                <div className="relative overflow-hidden full flex w-full  gap-5"> 
                    <div className="w-1/2 bg-cream-tua p-5 rounded-md">
                            <p>Kepuasan Terhadap SPPG <span>{kepuasan[0]/5 * 100} %</span></p> 
                    </div>
                    <div className="w-1/2  bg-cream-tua p-5 rounded-md">
                            <p>Kepuasan Terhadap SPPG <span>{kepuasan[1]/5 * 100} %</span></p>
                    </div>
                </div>
            </motion.div>
            
            
        </div>
    )
}

export default KepuasanFitur;