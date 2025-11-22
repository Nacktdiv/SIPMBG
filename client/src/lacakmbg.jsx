import {useState, useEffect} from "react";

//COMPONENT IMPORT
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LacakFitur from "./component/lacakmbg/lacakfitur"
import ModalFitur from "./component/lacakmbg/modalfitur"
import ValidasiFitur from "./component/lacakmbg/validasifitur";
import CommentFitur from "./component/lacakmbg/commentfitur";
import DetailMenuFitur from "./component/lacakmbg/detailmenufitur"

//LOGIC IMPORT
import createGambarDB from "./api/creategambardb";
import getLacakMbg from "./api/getLacakMbg";

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