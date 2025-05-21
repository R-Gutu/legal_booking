import Image from "next/image"

const Team = () => {
  return (
        <div className="flex gap-4 bg-[#003D35] pt-[150px]">
            <div className="relative w-full h-full">
                <Image 
                    src="/images/team1.png"
                    alt="home"
                    width={600}
                    height={500}
                    className="absolute top-[0px] left-[0px] "
                    />
                <Image 
                    src="/images/team2.png"
                    alt="home"
                    width={400}
                    height={400}
                    className="absolute top-[450px] left-[0px] "
                    />
            </div>
            <div className="flex flex-col gap-8 px-[100px] mt-10 justify-center h-[600px] relative z-10">
                <h1 className="text-6xl leading-18 text-white font-bold text-left">Echipa noastră juridică este pregătită să răspundă tuturor nevoilor tale</h1>
                <p className="text-base text-start text-white/60">Oferim sprijin complet, de la înființare până la redactarea contractelor și gestionarea legală de zi cu zi. Totul rapid, clar și fără complicații.</p>
                <ul className="grid grid-cols-2 gap-4">
                    <li className="text-white text-base text-start">✔️ Înființare sau lichidare SRL/IP în 3 zile</li>
                    <li className="text-white text-base text-start">✔️ Contracte personalizate, redactare și revizuire</li>
                    <li className="text-white text-base text-start">✔️ Suport complet pentru granturi, achiziții și licitații</li>
                    <li className="text-white text-base text-start">✔️ Consultanță juridică pentru afaceri și familie</li>
                </ul>
                <div className="flex gap-10 items-center mt-10">
                    <div className="text-[#141414] bg-[#D2DE32] px-8 py-4 rounded-full text-sm font-semibold">Vezi servicii</div>
                    <p className="text-white">sună acum +373 68099992</p>
                </div>
            </div>
            <Image 
                src="/images/lines2.png"
                alt="home"
                width={600}
                height={600}
                className="absolute bottom-[-800px] right-[0px] "
                />     
        </div>
  )
}

export default Team