import React from "react";
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5"

function Navbar () {
    return (
        <nav className="width-full h-[56px] flex bg-[#4E5F71] px-[160px] py-[8px] justify-between ">
            <img src={logo} alt="logo" className="" />
            <div className=" flex gap-[20px] font-[--font-family-poppins] font-[var(--font-weight-bold)]">
                <ul className="text-white text-base flex items-center gap-[20px]">
                    <li>Beranda</li>
                    <li>Lacak Mbg</li>
                    <li>Kontak</li>
                </ul>
                <button className="bg-[#0DC6BF] px-2"><p className="text-base ">Masuk Dashboard</p></button>
            </div>
        </nav>
    )
}

export default Navbar;