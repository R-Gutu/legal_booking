import Image from "next/image"

const Home = () => {
  return (
    <div className="flex gap-4 bg-[#003D35] px-[150px] py-[50px]">
        <div className="flex flex-col gap-4 px-[100px] mt-10 justify-center">
            <h1 className="text-7xl leading-23 text-white font-bold text-left">Servicii legale rapide, clare și fără complicații</h1>
            <p className="text-[#2D9285] text-base text-start">Suntem alături de afacerea ta cu soluții juridice moderne: consultanță online, contracte personalizate, înregistrări rapide și suport complet pe bază de abonament.</p>
            <div className="flex gap-4 justify-evenly items-center">
                <div className="text-[#141414] bg-[#D2DE32] px-8 py-4 rounded-full text-sm font-semibold">Vezi servicii</div>
                <p className="text-white">sună acum +373 68099992</p>
            </div>
        </div>
        <div className="relative w-full h-full">
            <Image 
                src="/images/arc2.svg"
                alt="home"
                width={500}
                height={500}
                className="absolute top-[-30px] left-[-150px] "
                />
            <Image 
                    src="/images/arc1.svg"
                    alt="home"
                    width={500}
                    height={500}
                    className="absolute top-[-80px] left-[-80px] "
                />
            <Image 
                    src="/images/lawyer.png"
                    alt="home"
                    width={500}
                    height={500}
                    className="absolute top-[-50px] left-[-110px] "
                />
            <Image 
                    src="/images/riscuri.png"
                    alt="home"
                    width={250}
                    height={250}
                    className="absolute top-[450px] left-[-200px] "
                />
        </div>
        
            <Image 
                src="/images/lines1.png"
                alt="home"
                width={500}
                height={500}
                className="absolute top-[0px] left-[-200px] "
                />
        
    </div>
  )
}

export default Home