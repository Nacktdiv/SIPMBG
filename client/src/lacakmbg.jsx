import {useState, useEffect} from "react";



import { 
    FaBowlFood, 
    FaDrumstickBite, 
    FaCarrot, 
    FaAppleWhole, 
} from 'react-icons/fa6';
import GambarIbu from "./assets/gambar-ibu.png"

//COMPONENT IMPORT
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LacakFitur from "./component/lacakmbg/lacakfitur"
import ModalFitur from "./component/lacakmbg/modalfitur"
import ValidasiFitur from "./component/lacakmbg/validasifitur";

//LOGIC IMPORT
import createGambarDB from "./api/creategambardb";
import getLacakMbg from "./api/getLacakMbg";




const DetailMenuFitur = () => {
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
                        src={GambarIbu}
                        alt="Deskripsi Gambar"
                        className="w-full h-full object-cover pb-14.5"
                    />
                </div>
                {/* Ojo di utak utik iki code seng angel tur jelimet*/}
                <div className="flex gap-2 items-stretch absolute left-5 right-5 top-full -translate-y-1/2">
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaBowlFood className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Karbohidrat</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Nasi Putih</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua flex items-center justify-center z-1"><FaDrumstickBite className="text-xl"/></div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Protein</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Ayam Goreng</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaAppleWhole className="text-xl"/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Buah-Buahan</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Apple</p>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col min-w-0">
                        <div className="text-coklat rounded-full w-10 h-10 bg-cream-tua z-1 flex items-center justify-center"> <FaCarrot/> </div>
                        <div className="text-coklat bg-cream-tua -mt-5 ml-5 pt-5 pb-2 flex flex-col items-center gap-2">
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sayur-Sayuran</p>
                            <p className="text-base overflow-auto whitespace-nowrap w-full text-center overflow-hidden">100gr</p>
                            <p className="text-base h-4  overflow-auto whitespace-nowrap w-full text-center overflow-hidden">Sawi Hijau</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const CommentFitur = () => {

    const [comment, setcomment] = useState("");

    const handleSubmit = () => {
        if (!comment.trim()) return;

        console.log("comment terkirim:", comment);

        // setelah kirim, kosongkan input
        setcomment("");
    };

    const comments = [
        {
            id: 1,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 2,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 3,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 4,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 5,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
        {
            id: 6,
            name: "BudiSantoso2008",
            avatar: "/avatar1.png",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eius, qui doloribus earum sapiente aut iure maxime eligendi accusantium nam..."
        },
    ];

    return (
        <div id="lacak-sppg" className="col-span-5 flex-col">
            
            {/* HEADER */}
            <div className="h-9 flex">
                <div className="text-cream bg-hijau-muda-3 rounded-t-2xl px-4 py-2 flex items-center">
                    <p>comment</p>
                </div>
            </div>

            {/* MAIN CONTAINER */}
            <div className="bg-hijau-muda-3 flex flex-col gap-5 p-5 h-227 relative rounded-b-2xl">

                

                {/* COMMENT LIST */}
                <div className="flex flex-col gap-5 overflow-y-auto">

                    {comments.map((c) => (
                        <div key={c.id} className="bg-cream p-4 rounded-xl flex flex-col gap-3">

                            {/* Top: avatar + name */}
                            <div className="flex items-center gap-3">
                                <img src={c.avatar} className="w-10 h-10 rounded-full" />
                                <p className="font-semibold text-[13px]">{c.name}</p>
                            </div>

                            {/* Comment text */}
                            <p className="text-[12px] leading-relaxed pr-4 text-hitam/90">
                                {c.text}
                            </p>

                            {/* Button row */}
                            <div className="flex gap-3 justify-end mt-1">
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <img src="/up-icon.png" className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-hijau-muda/40 rounded-full">
                                    <img src="/down-icon.png" className="w-4 h-4" />
                                </button>
                                <button className="p-2 bg-rose-300/60 rounded-full">
                                    <img src="/flag-icon.png" className="w-4 h-4" />
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
                    />

                    <button className="px-4 py-2 bg-hijau-muda rounded-xl text-sm text-cream">
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
                <LacakFitur setPathGambar={setPathGambar} setdataValidasi={setdataValidasi} setstatusValidasi={setstatusValidasi}/>
                <DetailMenuFitur />
            </div>
            <div className="h-25"></div>
            <div id="section-2" className="grid-container">
                <ValidasiFitur modalPopup={modalPopup} setmodalPopup={setmodalPopup} PathGambar={PathGambar} />
                <CommentFitur />
            </div>
            <Footer className=''/>
            {modalPopup && <ModalFitur onClose={() => setmodalPopup(false)} setFileGambar={setFileGambar} />}
        </div>
    );
}
export default LacakMbg;