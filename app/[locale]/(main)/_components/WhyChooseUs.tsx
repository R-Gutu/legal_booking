import Image from "next/image"
import { useTranslations } from "next-intl"

export default function WhyChooseUs() {
    const t = useTranslations("whyChooseUs");

    return (
        <div className="py-20 bg-white flex">
            <Image src={t("imageSrc")} width={860} height={880} alt={t("imageAlt")} className="w-[860px] h-[810px]" />
            <div>
                <p className="font-bold text-[50px] font-playfair text-[#1B1E21]">
                  {t("title")}
                </p>
                <p className="font-inter text-[#3F4242] mb-8">
                  {t("description")}
                </p>
                <div className="flex font-inter text-[#1B1E21] gap-5 mb-4">
                  {Array.from({length: 2}).map((_, idx) => (
                    <p className="flex gap-3" key={idx}>
                        <Image src="/svgs/check.svg" width={24} height={24} alt={t("iconAlt")} />
                        {t(`highlights.${idx}`)}
                    </p>
                  ))}
                </div>
                <div className="flex font-inter text-[#1B1E21] gap-5">
                  {Array.from({length: 2}).map((_, idx) => (
                    <p className="flex gap-3" key={idx}>
                        <Image src="/svgs/check.svg" width={24} height={24} alt={t("iconAlt")} />
                        {t(`highlights.${idx+2}`)}
                    </p>
                  ))}
                </div>
                <div className="flex mt-15">
                    <div className="font-inter button-animation box-border border-1 border-[#141414] bg-[#141414] text-white rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        {t("seeServices")}
                    </div>
                    <div className="font-inter box-border border-1 border-white bg-white text-[#141414] rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        {t("callNow")}
                    </div>
                </div>
            </div>
        </div>
    )
}