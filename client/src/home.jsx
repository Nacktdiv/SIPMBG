import {useState, useEffect, useRef} from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { IoMenu } from "react-icons/io5"
import Bocah from "./assets/gambar-anak.png"
import Ibu from "./assets/gambar-ibu.png"

function Home() {
    const [statusCard, setStatusCard] = useState(1)

    function ubahWarna(cardNumber) {
        switch (cardNumber) {
            case 1:
                return "bg-hijau-muda-1";
            case 2:
                return "bg-hijau-muda-2";
            case 3:
                return "bg-hijau-muda-3";
            case 4:
                return "bg-hijau-muda-4";
            default:
                return "bg-hijau-muda-1"; // Tambahkan default untuk keamanan
        }
    }
    
    // 1. Definisikan data/jumlah cards (Pindah ke scope Home)
    const cardData = [
        { id: 1, title: "Lorem Ipsum is simply " },
        { id: 2, title: "Lorem Ipsum is simply " },
        { id: 3, title: "Lorem Ipsum is simply " },
        { id: 4, title: "Lorem Ipsum is simply " }, // Tambahkan card ke-4
    ];

    // 2. Buat Ref untuk elemen yang digeser (Pindah ke scope Home)
    const scrollContainerRef = useRef(null);
    // 3. State untuk menyimpan indeks card yang aktif (Pindah ke scope Home)
    const [activeIndex, setActiveIndex] = useState(0);

    // --- Fungsi Deteksi Scroll --- (Pindah ke scope Home)
    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const containerWidth = container.offsetWidth;
            const scrollLeft = container.scrollLeft;
            
            // Hitung indeks yang aktif. Kita bagi posisi scroll dengan lebar container
            const newIndex = Math.round(scrollLeft / containerWidth);
            setActiveIndex(newIndex);
        }
    };

    // Tambahkan event listener saat komponen dimuat (Pindah ke scope Home)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            // Pasang event listener saat scroll terjadi
            container.addEventListener('scroll', handleScroll);
            return () => {
                // Bersihkan event listener saat komponen dilepas
                container.removeEventListener('scroll', handleScroll);
            };
        }
    }, [scrollContainerRef.current]); // Dependency agar useEffect tahu kapan ref sudah ada

    // --- Fungsi Klik Dot --- (Pindah ke scope Home)
    const handleDotClick = (index) => {
        const container = scrollContainerRef.current;
        if (container) {
            // Geser kontainer ke posisi card yang diklik
            // Kita kalikan lebar container dengan indeks (karena setiap card punya w-full)
            const targetScrollPosition = container.offsetWidth * index;
            container.scrollTo({
                left: targetScrollPosition,
                behavior: 'smooth' // Efek geser yang mulus
            });
            // Tidak perlu setActiveIndex di sini karena handleScroll akan mendeteksinya saat scroll selesai
        }
    };

    const desktopCard = (cardId) => (
        <div key={cardId} className="flex flex-col gap-[16px] text-white items-center h-full w-full">
            <div className="flex justify-center items-center overflow-y-hidden overflow-x-hidden 
                         h-[217px] w-full  rounded-[20px]">
                <img src={Ibu} alt={`Gambar ibu ${cardId}`} className=" object-cover w-full h-full" />
            </div>
            
            <div className="bg-hijau-muda py-2 px-4 rounded-[20px] max-h-[45px]">
                <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)] text-center text-cream ">Lorem Ipsum is simply </h1>
            </div>

            <div className="flex-grow w-full min-h-0">
                <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]  text-cream ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quidem veniam, reiciendis magni dicta placeat a molestias repellat ducimus facere tempore dignissimos omnis error quia, ab quam fugiat, velit laboriosam!
                </p>
            </div>
            
            <button className="rounded-[20px] w-1/2 p-[8px] bg-hijau-muda "><p className="text-hijau-tua">button</p></button>
        </div>
    );


    return (
        <div className="bg-cream">
            <Navbar />
            <div className="pt-14">
                <main className="">

                    <section id="section-1" className="grid-container h-[861px] md:h-[544px] flex flex-col md:flex-row items-center">
                        <div className=" col-span-4 md:col-span-6 order-1 md:order-0 flex flex-col justify-center gap-[24px]">
                            <div className="flex flex-col gap-[16px]">
                                <h1 className="text-coklat text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Solusi Digital Transparan untuk Distribusi & Pengelolaan Makanan Bergizi Gratis</h1>
                                <p className="text-coklat text-xl font-[--font-family-poppins] font-[var(--font-weight-regular)]">Dapatkan informasi detail mengenai penerima, jadwal, dan pelaporan setiap alokasi makanan bergizi gratis.</p>
                            </div>
                            <div className="flex justify-center gap-[20px]">
                                <button className="bg-hijau-muda rounded-[20px] py-2 px-10"><p className="text-base text-white font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lacak</p></button>
                                <button className="border-hijau-tua border-2 border-solid rounded-[20px] p-2"><p className="text-coklat text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Masuk Dashboard</p></button>
                            </div>
                        </div>
                        <div className="col-span-4 md:col-span-6 order-0 md:order-1 h-[380px] flex justify-center items-center">
                            <img src={Bocah} alt="Gambar anak" className="col-span-6 w-[75%] h-[75%]"/>
                        </div>
                    </section>

                    <section id="section-2" className="grid-container h-[861px] md:h-[544px]">

                        <div className="hidden md:block col-span-12 h-[16px] bg-hijau-muda rounded-[20px] mt-[16px]"></div>
                        <h1 className="hidden md:block col-span-12 justify-self-center text-hijau-tua text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Fitur SIPMBG</h1>
                        <div className=" hidden md:flex col-span-12 gap-[16px] items-center">
                            <div className=" w-[calc(5/12*100%)]  h-[396px] flex justify-center ">
                                <img src={Ibu} alt="Gambar ibu" className="max-h-full max-w-full"/>
                            </div>
                            <div className=" w-[calc(7/12*100%)] flex flex-col text-white rounded-[20px] ">
                                <div className="flex relative w-full -mb-1 ">
                                    <button 
                                    onClick={() => setStatusCard(1)}
                                    className={`${statusCard == 1 ? "z-11" : "z-10"} flex relative h-[50px] flex-1 justify-center items-center bg-hijau-muda-1 text-white px-2 py-2 rounded-t-[20px] transition duration-300`}>
                                        <p className=" text-sm font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Lorem Ipsum entana</p>
                                    </button>

                                    <button 
                                    onClick={() => setStatusCard(2)}
                                    className={`${statusCard == 2 ? "z-11" : "z-9"} flex relative -ml-2 h-[50px] flex-1 justify-center items-center bg-hijau-muda-2 text-white px-2 py-2 rounded-t-[20px] transition duration-300`}>
                                        <p className="text-sm font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Lorem Ipsum entana</p>
                                    </button>

                                    <button 
                                    onClick={() => setStatusCard(3)}
                                    className={`flex relative ${statusCard == 3 ? "z-11" : "z-8"} -ml-2 h-[50px] flex-1 justify-center items-center bg-hijau-muda-3 text-white px-2 py-2 rounded-t-[20px] transition duration-300`}>
                                        <p className="text-sm font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Lorem Ipsum entana</p>
                                    </button>

                                    <button 
                                    onClick={() => setStatusCard(4)}
                                    className={`flex relative ${statusCard == 4 ? "z-11" : "z-7"} -ml-2 h-[50px] flex-1 justify-center items-center bg-hijau-muda-4 text-white px-2 py-2 rounded-t-[20px] transition duration-300`}>
                                        <p className="text-sm font-[--font-family-poppins] font-[var(--font-weight-semibold)]">Lorem Ipsum entana</p>
                                    </button>
                                </div>
                                <div className={`${ubahWarna(statusCard)} p-[8px] min-h-[296px] z-99 flex flex-col gap-5`}>
                                    <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Lorem Ipsum Entana</h1>
                                    <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className="col-span-4 md:hidden h-full ">
                            <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory h-full">
                                <div className=" flex w-full gap-[36px]">
                                    <div id="fitur-1" className="flex flex-shrink-0 w-full h-full flex-col gap-[20px] snap-start ">
                                        <div className=" h-[16px] bg-[#0DC6BF] rounded-[20px] mt-[24px] "></div>
                                        <h1 className=" justify-self-center text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Fitur SIPMBG</h1>
                                        <div className=""><img src={Ibu} alt="Gambar ibu" /></div>
                                        <div className=" bg-[#4E5F71] flex flex-col gap-[20px] text-white p-[20px] rounded-[20px]  ">
                                            <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Lorem Ipsum Entana</h1>
                                            <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lorem Ipsum is simply dummy text o</p>
                                        </div>
                                    </div>
                                    <div id="fitur-2" className=" flex flex-shrink-0 w-full flex-col gap-[20px] snap-start">
                                        <div className=" h-[16px] bg-[#0DC6BF] rounded-[20px] mt-[24px] "></div>
                                        <h1 className=" justify-self-center text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Fitur SIPMBG</h1>
                                        <div className=""><img src={Ibu} alt="Gambar ibu" /></div>
                                        <div className=" bg-[#0DC6BF] flex flex-col gap-[20px] text-white p-[20px] rounded-[20px] ">
                                            <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Lorem Ipsum Entana</h1>
                                            <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lor.</p>
                                        </div>
                                    </div>
                                    <div id="fitur-3" className=" flex flex-shrink-0 w-full flex-col gap-[20px] snap-start">
                                        <div className=" h-[16px] bg-[#0DC6BF] rounded-[20px] mt-[24px] "></div>
                                        <h1 className=" justify-self-center text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Fitur SIPMBG</h1>
                                        <div className=""><img src={Ibu} alt="Gambar ibu" /></div>
                                        <div className="bg-[#BF0D14] flex flex-col gap-[20px] text-white p-[20px] rounded-[20px] ">
                                            <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Lorem Ipsum Entana</h1>
                                            <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lorem Ipsum is simpl.</p>
                                        </div>
                                    </div>
                                    <div id="fitur-3" className=" flex flex-shrink-0 w-full flex-col gap-[20px] snap-start">
                                        <div className=" h-[16px] bg-[#0DC6BF] rounded-[20px] mt-[24px] "></div>
                                        <h1 className=" justify-self-center text-4xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Fitur SIPMBG</h1>
                                        <div className=""><img src={Ibu} alt="Gambar ibu" /></div>
                                        <div className=" bg-[#71604E] flex flex-col gap-[20px] text-white p-[20px] rounded-[20px] ">
                                            <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)]">Lorem Ipsum Entana</h1>
                                            <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="section-3" className="grid-container h-[528px] md:h-[544px] pt-[16px]">

                        <div id="section-3-laptop" className="col-span-12 hidden md:flex gap-[16px] items-center h-full bg-hijau-tua rounded-[20px] p-5">
                            {/* Memanggil komponen Card Desktop yang sudah diperbaiki 4x */}
                            {desktopCard(1)}
                            {desktopCard(2)}
                            {desktopCard(3)}
                        </div>

                        <div id="section-3-hp" className="md:hidden col-span-4 flex flex-col justify-between gap-[16px]">
                            <div 
                                // TIDAK ERROR: Karena scrollContainerRef dan handleScroll sudah di scope Home
                                ref={scrollContainerRef} 
                                className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory"
                                onScroll={handleScroll}
                            >
                                <div className=" flex w-full h-[] gap-[16px]">
                                    {cardData.map((card, index) => (
                                        <div key={card.id} className="h-full bg-[#0DC6BF] p-[8px] rounded-[20px] flex flex-col flex-shrink-0 w-full gap-[16px] text-white items-center snap-start ">
                                            <div className="flex justify-center items-center h-[217px] overflow-y-hidden overflow-x-hidden">
                                                <img src={Ibu} alt={`Gambar ibu ${card.id}`} className=" object-cover" />
                                            </div>
                                            <h1 className="text-2xl font-[--font-family-poppins] font-[var(--font-weight-bold)] text-center">{card.title}</h1>
                                            <p className="text-base font-[--font-family-poppins] font-[var(--font-weight-regular)] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                            <button className="rounded-[20px] w-1/2 p-[8px] bg-[#71604E] "><p>button</p></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="h-[48px] flex justify-center items-center gap-[8px]">
                                {/* TIDAK ERROR: Karena cardData, activeIndex, dan handleDotClick sudah di scope Home */}
                                {cardData.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`
                                            w-[12px] h-[12px] rounded-full transition-all duration-300
                                            ${index === activeIndex ? 'bg-[#0DC6BF] w-[24px]' : 'bg-gray-300'}
                                        `}
                                        onClick={() => handleDotClick(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    >
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Home;