import {useState} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5"

function Navbar () {
    const [statusMenu, setStatusMenu] = useState(false)

    return (
        <nav className={`w-full h-[56px] flex bg-hijau-tua px-[16px] md:px-[160px] py-[8px] justify-between fixed z-100 rounded-b-[20px]`}>
            <img src={logo} alt="logo" className="" />
            <div className={` flex gap-[20px] font-[--font-family-poppins] font-[var(--font-weight-bold)] items-center  `}>
                    <IoMenu className="text-white text-2xl md:hidden" onClick={() => setStatusMenu(!statusMenu)} />
                    <div className={`${statusMenu ? 'bg-[#4E5F71] absolute top-[100%] right-[0px] w-max p-0' : 'hidden'}  md:flex md:flex-row gap-[20px] items-center md:h-full `}>
                        <ul className={`text-cream text-base flex ${statusMenu ? 'flex-col w-full' : 'flex-row '} items-center judtify-center gap-[20px] `}>
                            <li><Link to="/home">Beranda</Link></li>
                            <li><Link to="/lacakmbg">Lacak MBG</Link></li>
                            <li><Link to="/kontak">Kontak</Link></li>
                            <li><Link to="/testai">Test Inference</Link></li>
                        </ul>
                        <button className="bg-hijau-muda mt-[20px] md:mt-[0px] h-full rounded-[20px] px-4 block"><p className="text-base text-cream ">Masuk Dashboard</p></button>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;