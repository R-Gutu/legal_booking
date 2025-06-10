"use client"
import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"
import { useTranslations } from "next-intl"
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import FormModal from './FormModal'

export default function Footer() {
    const t = useTranslations("footer");
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="bg-[#D2DE32] overflow-x-hidden">
            <div className="flex items-center justify-center gap-30 max-[1100px]:gap-15 max-[1000px]:flex-col py-15">
                <div className="relative">
                    {/* Fake offset border */}
                    <div className="absolute inset-0 translate-x-5 translate-y-5 border-1 border-black rounded-b-full z-0 pointer-events-none"></div>

                    {/* Main card */}
                    <div className="bg-[#003D35] flex flex-col items-center rounded-b-full relative z-10">
                        <div className="bg-white flex items-center px-10 max-[1000px]:px-5 py-6 gap-5">
                            <Image src="/images/pfp.jpg" width={74} height={74} alt={t("pfpAlt")} className="rounded-full" />
                            <div className="flex flex-col">
                                <p className="font-playfair font-bold text-[19px]">{t("profileName")}</p>
                                <p className="font-inter text-[14px]">{t("profileRole")}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 mt-10 mb-20">
                            <div className="flex items-start gap-3">
                                <Image src="/svgs/phone.svg" width={24} height={24} alt={t("phoneIconAlt")} />
                                <div>
                                    <p className="text-[#ffffffaa] font-inter text-[14px]">{t("callUs")}</p>
                                    <p className="text-white font-playfair text-[16px] font-bold">{t("phoneNumber")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Image src="/svgs/letter.svg" width={24} height={24} alt={t("mailIconAlt")} />
                                <div>
                                    <p className="text-[#ffffffaa] font-inter text-[14px]">{t("mailUs")}</p>
                                    <p className="text-white font-playfair text-[16px] font-bold">{t("email")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start max-[1000px]:items-center gap-7 px-10">
                    <p className="font-bold text-4xl font-playfair max-[1000px]:text-center">{t("ctaTitle")}</p>
                    <p className="font-inter max-[1000px]:text-center">{t("ctaDescription")}</p>
                    <div onClick={() => setModalOpen(true)} className="button-animation font-inter box-border border-1 border-black bg-black text-white rounded-full px-8 py-5 font-semibold text-sm align-middle text-center">
                        {t("contactBtn")}
                    </div>
                </div>
            </div>
            <div className="bg-[#003D35] pl-[12%] max-[600px]:pl-7 max-[600px]:pr-20 py-10 flex flex-col gap-8 font-inter rounded-tr-[200px]">
                <div className="flex items-center relative">
                    <Image src="/svgs/logo_footer.svg" width={74} height={74} alt={t("logoAlt")} />
                    <LanguageSwitcher className="absolute top-[35%] right-[30%] min-[690px]:hidden" />
                </div>
                <p className="text-[#ffffff7e] w-[420px] max-[600px]:w-auto text-wrap">{t("footerDescription")}</p>
                <div className="flex items-center gap-4">
                    <Image src="/svgs/insta.svg" width={41} height={41} alt={t("instagramAlt")} className="button-animation" />
                    <p className="text-[#ffffff7e] text-[15px] max-[600px]:text-center">{{t.rich("copyRight", {
                        link: (chunks) => <Link href={"https://www.quant-apps.com/"} target="blank">{chunks}</Link>
                    })}</p>
                    
                </div>
            </div>
            <AnimatePresence>
                {modalOpen && <FormModal isOpen={modalOpen} setIsOpen={setModalOpen} />}
            </AnimatePresence>
        </div>
    )
}
