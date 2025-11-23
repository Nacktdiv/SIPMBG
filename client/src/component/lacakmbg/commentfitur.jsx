import updateCommentar from "../../api/createcomment";
import { useState, useEffect} from "react";
import { IoThumbsUpOutline, IoThumbsDownOutline, IoAlertCircleOutline, IoPersonOutline } from 'react-icons/io5';
import { motion } from "framer-motion";
import { showErrorAlert, showSuccesAlert } from "../sweetalert";
const CommentFitur = ({dataLacak, statusLacak}) => {

    const [Comment, setComment] = useState("");
    const [listComment, setlistComment] = useState([])

    useEffect(() => {
        if (dataLacak == null){
            return
        }else if(dataLacak[0] == 1){
            setlistComment([])
        }
        dataLacak && setlistComment(dataLacak[1].comment)
        console.log(dataLacak)
    }, [dataLacak]);

    const handleSubmit = async () => {
        if (!dataLacak){
            showErrorAlert("GAGAL", "Anda Belum Lacak MBG Silahkan Lacak Terlebih Dahulu")
            return;
        }

        const res = await updateCommentar(Comment, dataLacak[1].id_perencanaan_menu)
        setlistComment(res)
        showSuccesAlert("BERHASIL", "Komentar Anda Berhasil Ditambahkan")
    };

    const handleComment = (event) => {

        const nilaiBaru = event.target.value;
        
        setComment(nilaiBaru); 

    };





    return (
        <div id="lacak-sppg" className="col-span-4 md:col-span-5 flex-col">
            
            {/* HEADER */}
            <div className="h-9 flex">
                <div className="text-cream bg-hijau-tua rounded-t-2xl text-xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                    <p>Komentar</p>
                </div>
            </div>

            {!statusLacak ? (
                <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-hijau-tua flex flex-col gap-5 p-5 h-71 md:h-255 relative rounded-b-[20px] rounded-tr-[20px]">

                <div className="flex flex-col gap-5 overflow-y-auto">
                    {
                    listComment && listComment.map((c, i) => (
                        <div key={i} className="bg-cream p-4 rounded-xl flex flex-col gap-3 break-words">

                            {/* Top: avatar + name */}
                            <div className="flex items-center gap-3">
                                <IoPersonOutline className="w-10 h-10 rounded-full" />
                                <p className=" text-[13px] font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Anonim</p>
                            </div>

                            {/* Comment text */}
                            <p className="text-[12px] leading-relaxed pr-4 text-hitam/90">
                                {c}
                            </p>

                            {/* Button row */}
                            <div className="flex gap-3 justify-end mt-1">
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <IoThumbsUpOutline className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <IoThumbsDownOutline className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-rose-300/60 rounded-full">
                                    <IoAlertCircleOutline className="w-4 h-4" />
                                </button>
                            </div>

                        </div>
                    ))}

                </div>

                <div className="flex flex-wrap bg-cream rounded-xl px-4 py-2 gap-2">
                    <input
                        placeholder="Tulis comment atau umpan balik disini..."
                        className="flex-1 min-w-[150px] bg-transparent outline-none text-sm text-hitam"
                        onChange={handleComment}
                        value={Comment}
                    />

                    <button 
                        className="px-4 py-2 bg-hijau-muda rounded-xl text-sm text-white transition-100 active:bg-coklat"
                        onClick={handleSubmit}>
                        Kirim
                    </button>
                </div>

            </motion.div>
            ) : (
                <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-hijau-tua flex flex-col gap-5 p-5  md:h-255 relative rounded-b-[20px] rounded-tr-[20px]">

            </motion.div>
            )}
            
        </div>
    );
};

export default CommentFitur