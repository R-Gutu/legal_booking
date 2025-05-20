import Image from "next/image"

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#003D35]">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={100}
          height={100} 
          className=""/>
        <div className="flex gap-2.5">
            <div className="">+373 68099992</div>
            <div className="">Contacteaza-ne</div>
        </div>
    </div>
  )
}

export default Header