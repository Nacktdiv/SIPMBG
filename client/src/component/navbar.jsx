import {useState} from "react";
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5"

function Navbar () {
    const [statusMenu, setStatusMenu] = useState(false)
    console.log(statusMenu)

    return (
        <nav className={`w-full h-[56px] flex bg-[#4E5F71] px-[16px] md:px-[160px] py-[8px] justify-between fixed`}>
            <img src={logo} alt="logo" className="" />
            <div className={` flex gap-[20px] font-[--font-family-poppins] font-[var(--font-weight-bold)] items-center  `}>
                    <IoMenu className="text-white text-2xl md:hidden" onClick={() => setStatusMenu(!statusMenu)} />
                    <div className={`${statusMenu ? 'bg-[#4E5F71] absolute top-[100%] right-[0px] w-max p-0' : 'hidden'}  md:flex md:flex-row gap-[20px] items-center md:h-full `}>
                        <ul className={`text-white text-base flex ${statusMenu ? 'flex-col w-full' : 'flex-row '} items-center judtify-center gap-[20px] `}>
                            <li>Beranda</li>
                            <li>Lacak Mbg</li>
                            <li>Kontak</li>
                        </ul>
                        <button className="bg-[#0DC6BF] mt-[20px] md:mt-[0px] px-[4px] py-[4px] block"><p className="text-base ">Masuk Dashboard</p></button>
                    </div>
                  
            </div>
        </nav>
    )
}

export default Navbar;