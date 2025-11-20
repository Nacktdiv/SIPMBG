import {useState} from "react";
import logo from '../assets/logo.png';
import { IoMenu } from "react-icons/io5"
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-hijau-tua h-[414px] md:h-[300px] mt-[20px] flex flex-col items-center">
            <div className="bg-hijau-muda w-1/2 h-3 mt-[16px] rounded-[20px]"></div>
            <div className="flex flex-1 px-[42px] mt-[16px]">
                <div className="flex-1 flex flex-col items-start gap-[16px] ">
                    <img src={Logo} alt="logo" className="h-[60px]"/>
                    <p className="text-white text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex-1 flex items-start justify-end ">
                    <div className={` flex gap-[20px] items-center `}>
                        <ul className={`text-cream text-base flex  items-center judtify-center gap-[20px] `}>
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/lacakmbg">Lacak MBG</Link></li>
                            <li><Link to="/kontak">Kontak</Link></li>
                        </ul>
                        <button className="text-cream mt-[20px] md:mt-[0px] px-[4px] py-[4px] block"><p className="text-base ">Masuk Dashboard</p></button>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end items-end py-[16px]">
                    <div className="rounded-[20px] bg-hijau-muda h-[40px] w-1/2"></div>
            </div>
            <div className="h-[30x] bg-hijau-muda w-full flex items-center justify-center">
                <p>COPYRIGHT@2025 SIPMBG</p>
            </div>
        </footer>
    );
}

export default Footer;