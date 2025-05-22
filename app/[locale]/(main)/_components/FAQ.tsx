import { cn } from "@/lib/utils"
import FAQItem from "./FAQItem"
import { useTranslations } from "next-intl"

const FAQ = () => {
  const t = useTranslations('faq');
  const faqCount = 6; // Number of questions in translation

  return (
    <div className={cn("bg-white px-[150px] py-[100px] flex flex-col gap-[100px]", "max-xl:px-[80px] max-sm:gap-14 max-sm:px-[40px] max-sm:py-[60px] max-xs:px-[20px]")}>
      <h2 className={cn("font-playfair text-black text-5xl font-bold text-center", "max-sm:text-3xl")}>
        {t("title")}
      </h2>
      <div className={cn("grid grid-cols-2 gap-12", "max-lg:grid-cols-1 max-lg:place-items-center")}>
        {Array.from({ length: faqCount }).map((_, idx) => (
          <FAQItem
            key={idx}
            question={t(`questions.${idx}.question`)}
            answer={t(`questions.${idx}.answer`)}
          />
        ))}
      </div>
    </div>
  )
}

export default FAQ