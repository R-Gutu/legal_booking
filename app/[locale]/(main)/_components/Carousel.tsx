import { ReactElement, useState } from "react"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import Image from "next/image"

export default function Carousel({ slides }: { slides: ReactElement[] }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [
            // add plugins here
        ]
    )

    return (<div ref={sliderRef} className="keen-slider flex">
        {slides}
        <Image
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            src="/svgs/rightArrow.svg"
            height={25}
            width={15}
            alt="right arrow"
            className="absolute top-[50%] right-[15%] cursor-pointer"
        />
        <Image
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            src="/svgs/leftArrow.svg"
            height={25}
            width={15}
            alt="right arrow"
            className="absolute top-[50%] left-[15%] cursor-pointer"
        />
    </div>
        // <div className="">         

        // </div>
    )
}