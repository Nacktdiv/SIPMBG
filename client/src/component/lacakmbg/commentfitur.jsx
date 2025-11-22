import updateCommentar from "../../api/createcomment";
import { useState, useEffect} from "react";
import { IoThumbsUpOutline, IoThumbsDownOutline, IoAlertCircleOutline, IoPersonOutline } from 'react-icons/io5';

const CommentFitur = ({perencanaanMenu}) => {

    const [Comment, setComment] = useState("");
    const [listComment, setlistComment] = useState([])

    useEffect(() => {
        
        perencanaanMenu && setlistComment(perencanaanMenu.comment)
        console.log(perencanaanMenu)
    }, [perencanaanMenu]);

    const handleSubmit = async () => {
        if (!perencanaanMenu){
            console.log("Silahkan Lacak Menu sesuai tanggal")
            return;
        }

        const res = await updateCommentar(Comment, perencanaanMenu.id_perencanaan_menu)
        setlistComment(res)
        console.log("ini data listComment", listComment)
    };

    const handleComment = (event) => {

        const nilaiBaru = event.target.value;
        console.log(nilaiBaru)
        
        setComment(nilaiBaru); 

    };



    return (
        <div id="lacak-sppg" className="col-span-5 flex-col">
            
            {/* HEADER */}
            <div className="h-9 flex">
                <div className="text-cream bg-hijau-tua rounded-t-2xl text-xl px-4 py-2 flex items-center font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                    <p>Komentar</p>
                </div>
            </div>

            {/* MAIN CONTAINER */}
            <div className="bg-hijau-tua flex flex-col gap-5 p-5 h-227 relative rounded-b-2xl">

                

                {/* COMMENT LIST */}
                <div className="flex flex-col gap-5 overflow-y-auto">

                    {

                        
                    listComment && listComment.map((c, i) => (
                        <div key={i} className="bg-cream p-4 rounded-xl flex flex-col gap-3">

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

                {/* INPUT */}
                <div className="flex flex-wrap bg-cream rounded-xl px-4 py-2 gap-2">
                    <input
                        placeholder="Tulis comment atau umpan balik disini..."
                        className="flex-1 min-w-[150px] bg-transparent outline-none text-sm text-hitam"
                        onChange={handleComment}
                        value={Comment}
                    />

                    <button 
                        className="px-4 py-2 bg-hijau-muda rounded-xl text-sm text-white"
                        onClick={handleSubmit}>
                        Kirim
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CommentFitur