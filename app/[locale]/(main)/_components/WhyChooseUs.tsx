import Image from "next/image"
export default function WhyChooseUs() {
    return (
        <div className="py-20 bg-white flex">
            <Image src="/images/meeting.png" width={860} height={880} alt="business meeting" className="w-[860px] h-[810px]" />
            <div>
                <p className="font-bold text-[50px] font-playfair text-[#1B1E21]">De ce să alegi echipa noastră?</p>
                <p className="font-inter text-[#3F4242] mb-8">Avem peste 15 ani de experiență în domeniul juridic, oferind soluții clare, rapide și eficiente pentru afaceri de orice dimensiune. Ne concentrăm pe rezultate și ne adaptăm nevoilor fiecărui client — indiferent dacă ai nevoie de consultanță, reprezentare sau redactare de acte.</p>
                <div className="flex font-inter text-[#1B1E21] gap-5 mb-4">
                    <p className="flex gap-3">
                        <Image src="/svgs/check.svg" width={24} height={24} alt="check mark" />
                        Expertiză solidă
                    </p>
                    <p className="flex gap-3">
                        <Image src="/svgs/check.svg" width={24} height={24} alt="check mark" />
                        Rezultate concrete
                    </p>
                </div>
                <div className="flex font-inter text-[#1B1E21] gap-5">
                    <p className="flex gap-3">
                        <Image src="/svgs/check.svg" width={24} height={24} alt="check mark" />
                        Abordare orientată către client
                    </p>
                    <p className="flex gap-3">
                        <Image src="/svgs/check.svg" width={24} height={24} alt="check mark" />
                        Servicii personalizate
                    </p>
                </div>
                <div className="flex mt-15">
                    <div className="font-inter box-border border-1 border-[#141414] bg-[#141414] text-white rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        Vezi servicii
                    </div>
                    <div className="font-inter box-border border-1 border-white bg-white text-[#141414] rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        sună acum +373 68099992
                    </div>
                </div>
            </div>
        </div>
    )
}