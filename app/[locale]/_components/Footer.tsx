import Image from "next/image"
export default function Footer() {
    return (
        <div className="bg-[#D2DE32] overflow-x-hidden">
            <div className="flex items-center justify-center gap-30 max-[1100px]:gap-15 max-[1000px]:flex-col py-15">
                <div className="relative">
                    {/* Fake offset border */}
                    <div className="absolute inset-0 translate-x-5 translate-y-5 border-1 border-black rounded-b-full z-0 pointer-events-none"></div>

                    {/* Main card */}
                    <div className="bg-[#003D35] flex flex-col items-center rounded-b-full relative z-10">
                        <div className="bg-white flex items-center px-10 max-[1000px]:px-5 py-6 gap-5">
                            <Image src="/images/pfp.jpg" width={74} height={74} alt="pfp" className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-playfair font-bold text-[19px]">Veaceslav Soltan</p>
                                <p className="font-inter text-[14px]">Jurist</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 mt-10 mb-20">
                            <div className="flex items-start gap-3">
                                <Image src="/svgs/phone.svg" width={24} height={24} alt="phone icon" />
                                <div>
                                    <p className="text-[#ffffffaa] font-inter text-[14px]">Sună-ne:</p>
                                    <p className="text-white font-playfair text-[16px] font-bold">+373 464564654</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Image src="/svgs/letter.svg" width={24} height={24} alt="letter icon" />
                                <div>
                                    <p className="text-[#ffffffaa] font-inter text-[14px]">Scrie-ne:</p>
                                    <p className="text-white font-playfair text-[16px] font-bold">law@domain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start max-[1000px]:items-center gap-7 px-10">
                    <p className="font-bold text-4xl font-playfair max-[1000px]:text-center">Vorbește cu un jurist chiar astăzi</p>
                    <p className="font-inter max-[1000px]:text-center">Ai o întrebare juridică?<br />Programează o consultație și primește răspuns rapid de la echipa noastră.</p>
                    <div className="font-inter box-border border-1 border-black bg-black text-white rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        Contactează-ne
                    </div>
                </div>
            </div>
            <div className="bg-[#003D35] pl-[12%] max-[600px]:pl-7 max-[600px]:pr-20 py-10 flex flex-col gap-8 font-inter rounded-tr-[200px]">
                <Image src="/svgs/logo_footer.svg" width={74} height={74} alt="footer_logo"/>
                <p className="text-[#ffffff7e] w-[420px] max-[600px]:w-auto text-wrap">Oferim soluții juridice rapide și eficiente pentru afacerea ta. Consultanță, redactare acte, înregistrări și reprezentare — totul într-un singur loc.</p>
                <div className="flex items-center gap-4">
                    <Image src="/svgs/insta.svg" width={41} height={41} alt="instagram logo" />
                    <p className="text-[#ffffff7e] text-[15px] max-[600px]:text-center">© 2025 Legalbooking. Toate drepturile sunt rezervate.</p>
                </div>
            </div>
        </div>
    )
}