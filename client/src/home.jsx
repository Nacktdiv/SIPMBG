import React from "react";
import Navbar from "./component/navbar";
import { IoMenu } from "react-icons/io5"
import Bocah from "./assets/gambar-anak.png"

function Home() {
    return (
        <>
            <Navbar />
            <div className="pt-14">
                <main>
                    <section id="section-1" className="grid-container h-[839] md:h-[544px] flex flex-col md:flex-row  items-center">
                        <div className=" col-span-4 md:col-span-6 order-1 md:order-0 flex flex-col justify-center gap-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Solusi Digital Transparan untuk Distribusi & Pengelolaan Makanan Bergizi Gratis</h1>
                                <p className="text-xl font-[--font-family-poppins] font-[var(--font-weight-regular)]">Dapatkan informasi detail mengenai penerima, jadwal, dan pelaporan setiap alokasi makanan bergizi gratis.</p>
                            </div>
                            <div className="flex justify-center gap-[20px]">
                                <button className="bg-[#0DC6BF] rounded-[20px] py-2 px-10"><p className="text-base text-white font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lacak</p></button>
                                <button className="border-2 border-solid rounded-[20px] p-2"><p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Masuk Dashboard</p></button>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-6 order-0 md:order-1 h-[380px] flex justify-center items-center">
                            <img src={Bocah} alt="Gambar anak" className="col-span-6 w-[75%] h-[75%]"/>
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Home