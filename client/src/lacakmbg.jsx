import {useState, useEffect} from "react";

import { IoThumbsUpOutline, IoThumbsDownOutline, IoAlertCircleOutline, IoPersonOutline } from 'react-icons/io5';

import { 
    FaBowlFood, 
    FaDrumstickBite, 
    FaCarrot, 
    FaAppleWhole, 
    FaGlassWater
} from 'react-icons/fa6';

//COMPONENT IMPORT
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LacakFitur from "./component/lacakmbg/lacakfitur"
import ModalFitur from "./component/lacakmbg/modalfitur"
import ValidasiFitur from "./component/lacakmbg/validasifitur";

//LOGIC IMPORT
import createGambarDB from "./api/creategambardb";
import getLacakMbg from "./api/getLacakMbg";
import updateCommentar from "./api/createcomment";




const DetailMenuFitur = ({perencanaanMenu}) => {
    let urlgambar = "p"
    let data_menu = null
    if(perencanaanMenu != null) {
        urlgambar = perencanaanMenu.gambar_url
        data_menu = perencanaanMenu.data_menu
    }


    return (
        <div id="container-gambar" className=" col-span-8 flex-col ml-4">
            <div className="h-9 flex ">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                    <p>Menu MBG Hari Ini</p>
                </div>
            </div>
            <div className="bg-hijau-muda-3 flex flex-col  gap-[20px] p-5 relative">
                <div className="h-[572px]">
                    <img
                        src={urlgambar}
                        alt="Deskripsi Gambar"
                        className="w-full h-full object-cover pb-14.5"
                    />
                </div>
                {/* Ojo di utak utik iki code seng angel tur jelimet*/}
                <div className="flex gap-2 items-stretch absolute -left-0 top-full -translate-y-1/2 w-full">
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaBowlFood className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Karbohidrat</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.karbohidrat.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.karbohidrat.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaDrumstickBite className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.protein.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.protein.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaAppleWhole className="text-xl"/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Buah-Buahan</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.buah.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.buah.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaCarrot/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sayur-Sayuran</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.sayur.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.sayur.nama}</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaGlassWater/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Susu</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.susu.jumlah}</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">{data_menu && data_menu.susu.nama}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

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
                <div className="text-cream bg-hijau-tua rounded-t-2xl px-4 py-2 flex items-center">
                    <p>comment</p>
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
                                <p className="font-semibold text-[13px]">Anonim</p>
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



function LacakMbg() {
    const [modalPopup, setmodalPopup] = useState(false)
    const [FileGambar, setFileGambar] = useState(null)
    const [PathGambar, setPathGambar] = useState("")
    const [dataValidasi, setdataValidasi] = useState(null)
    const [statusValidasi, setstatusValidasi] = useState(false)
    const [perencanaanMenu, setperencanaanMenu] = useState(null)

    const handleUploadAndInsert = async () => {
        try {
            if (FileGambar && statusValidasi) {
                await createGambarDB(FileGambar);
                let res = await getLacakMbg(dataValidasi)
                console.log("Berhasil", res)
                setPathGambar(res)
            } else if (FileGambar && statusValidasi === false){
                await createGambarDB(FileGambar);
            }

            setFileGambar(null); 
        } catch (e) {
            console.error("ERROR handleUploadAndInsert", e);
            setFileGambar(null); 
        }
    };

    useEffect( () => {
        handleUploadAndInsert()
    }, [FileGambar]);

    
    return (
        <div className="bg-cream">
            <Navbar />
            <div id="section-1" className="grid-container pt-24 ">
                <LacakFitur setPathGambar={setPathGambar} setdataValidasi={setdataValidasi} setstatusValidasi={setstatusValidasi} setperencanaanMenu={setperencanaanMenu}/>
                <DetailMenuFitur perencanaanMenu={perencanaanMenu} />
            </div>
            <div className="h-25"></div>
            <div id="section-2" className="grid-container">
                <ValidasiFitur modalPopup={modalPopup} setmodalPopup={setmodalPopup} PathGambar={PathGambar} />
                <CommentFitur perencanaanMenu={perencanaanMenu} />
            </div>
            <Footer className=''/>
            {modalPopup && <ModalFitur onClose={() => setmodalPopup(false)} setFileGambar={setFileGambar} />}
        </div>
    );
}
export default LacakMbg;