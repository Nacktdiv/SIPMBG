import {useState} from "react";
import logo from '../assets/logo.png';
import { IoMenu, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5"
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-hijau-tua h-[414px] md:h-[300px] mt-[20px] flex flex-col items-center rounded-t-[20px]">
            <div className="bg-hijau-muda w-1/2 h-3 mt-[16px] rounded-[20px]"></div>
            <div className="flex flex-col md:flex-row flex-1 mx-5 my-2 md:px-[42px] md:mt-[16px]">
                <div className="flex-1 flex flex-col items-start gap-[16px] mb-5 md:mb-0">
                    <img src={Logo} alt="logo" className="h-[60px]"/>
                    <p className="text-cream md:text-xl font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Aplikasi Web Monitoring Program Makan Bergizi Gratis Berbasis Image Classification untuk Transparansi Validasi Menu dan Kepatuhan Keuangan SPPG</p>
                </div>
                <div className=" md:flex flex-1  items-start justify-end ">
                    <div className={` flex gap-[20px] items-center  font-[--font-family-poppins] font-[var(--font-weight-bold)] `}>
                        <ul className={`text-cream text-large flex  items-center judtify-center gap-[20px]  `}>
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/lacakmbg">Lacak MBG</Link></li>
                            <li><a href="#">Kontak</a></li>
                            {/* <li><Link to="/kontak">Kontak</Link></li> */}
                        </ul>
                        <button className="text-cream  px-[4px] py-[4px] block"><p className="text-base ">Masuk Dashboard</p></button>
                    </div>
                </div>
            </div>
            <div className="flex w-full h-full md:h-auto md:justify-end items-end py-3 px-5 ">
                    <div className=" rounded-[20px] bg-hijau-muda h-fit w-fit  flex flex-col gap-3 md:items-center md:justify-center items-start  px-3 py-3 font-[--font-family-poppins] font-[var(--font-weight-semibold)]">
                        <div className="flex w-full gap-5">
                            <div className="flex md:flex-row items-center">
                                <IoLogoInstagram className="text-xl text-coklat"/>
                                <p className=" text-coklat w-fit ">@hanyaseorangarya</p>
                            </div>
                            <div className="flex md:flex-row items-center">
                                <IoLogoWhatsapp className="text-xl text-coklat"/>
                                <p className=" text-coklat w-fit">081548272241</p>
                            </div>
                        </div>
                        <div className="flex w-full gap-5">
                            <div className="flex md:flex-row items-center">
                                <IoLogoInstagram className="text-xl text-coklat"/>
                                <p className=" text-coklat w-fit ">@ahya_adib</p>
                            </div>
                            <div className="flex md:flex-row items-center">
                                <IoLogoWhatsapp className="text-xl text-coklat"/>
                                <p className=" text-coklat w-fit">083840575695</p>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="h-[30x] bg-hijau-muda w-full flex items-center justify-center">
                <p>COPYRIGHT@2025 SIPMBG</p>
            </div>
        </footer>
    );
}

export default Footer;