import Image from "next/image"
export default function Consultatia() {
    return (
        <div className="fixed bottom-5 right-5 z-50 font-bold flex flex-col items-center hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
            <p className="text-[20px] text-white font-playfair [text-shadow:-1px_-1px_0_black,_1px_-1px_0_black,_-1px_1px_0_black,_1px_1px_0_black]">Online <br /> consultație!</p>
            <Image src="/svgs/consultatia.svg" width={80} height={80} alt="consultation image"/>
        </div>
    )
}