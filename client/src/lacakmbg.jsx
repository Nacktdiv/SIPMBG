import {useState, useEffect} from "react";

//COMPONENT IMPORT
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import LacakFitur from "./component/lacakmbg/lacakfitur"
import ModalFitur from "./component/lacakmbg/modalfitur"
import ValidasiFitur from "./component/lacakmbg/validasifitur";
import CommentFitur from "./component/lacakmbg/commentfitur";
import DetailMenuFitur from "./component/lacakmbg/detailmenufitur"
import { showSuccesAlert, showErrorAlert } from "./component/sweetalert";
import KepuasanFitur from "./component/lacakmbg/kepuasanfitur";

//tsrt
// import ComparisonTable from "./component/lacakmbg/comparisontable";

//LOGIC IMPORT
import createGambarDB from "./api/creategambardb";
import getLacakMbg from "./api/getLacakMbg";

function LacakMbg() {
    const [modalPopup, setmodalPopup] = useState(false)
    const [FileGambar, setFileGambar] = useState(null)
    const [PathGambar, setPathGambar] = useState("")
    const [dataValidasi, setdataValidasi] = useState(null)
    const [statusValidasi, setstatusValidasi] = useState(false)
    const [statusLacak, setstatusLacak] = useState(false)
    const [dataLacak, setdataLacak] = useState(null)
    const [kepuasanLacak, setkepuasanLacak] = useState(null)

    

    const handleUploadAndInsert = async () => {
        try {
            if (FileGambar && statusValidasi) {
                await createGambarDB(FileGambar);
                let res = await getLacakMbg(dataValidasi)
                setPathGambar(res)
                showSuccesAlert("BERHASIL","Gambar Telah Diupload dan data bukti serta perencanaan berhasil diperbarui")
            } else if (FileGambar && statusValidasi === false){
                await createGambarDB(FileGambar);
                showSuccesAlert("BERHASIL","Gambar Telah Diupload")
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
            <div id="section-1" className="grid-container pt-24">
                <LacakFitur setPathGambar={setPathGambar} setdataValidasi={setdataValidasi} setstatusValidasi={setstatusValidasi} setdataLacak={setdataLacak} setstatusLacak={setstatusLacak} statusLacak={statusLacak}/>
                <DetailMenuFitur dataLacak={dataLacak} statusLacak={statusLacak}  />
            </div>
            <div className="md:h-25 h-10"></div>
            <div id="section-2" className="grid-container">
                <ValidasiFitur modalPopup={modalPopup} setmodalPopup={setmodalPopup} PathGambar={PathGambar} statusLacak={statusLacak}/>
                <CommentFitur dataLacak={dataLacak} statusLacak={statusLacak}/>
                {/* <ComparisonTable/> */}
            </div>
            <div id="section-3" className="grid-container">
                <KepuasanFitur kepuasanLacak={kepuasanLacak}/>
            </div>
            <Footer className=''/>
            {modalPopup && <ModalFitur onClose={() => setmodalPopup(false)} setFileGambar={setFileGambar} />}
        </div>
    );
}
export default LacakMbg;