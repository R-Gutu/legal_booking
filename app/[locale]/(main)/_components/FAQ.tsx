import { cn } from "@/lib/utils"
import FAQItem from "./FAQItem"

const questions = [
    {
        question: "Ce tipuri de servicii juridice oferiți pentru companii?",
        answer: "Oferim consultanță generală, redactarea și revizuirea contractelor, înregistrarea și lichidarea firmelor, asistență în fața instituțiilor de stat și sprijin juridic permanent prin abonament lunar sau anual.",
    },
    {
        question: "Ce presupune pachetul de abonament juridic lunar?",
        answer: "Acest pachet vă oferă acces la toate serviciile noastre de bază — consultanță, redactare acte, interacțiune cu instituțiile publice — cu un tarif fix lunar și suport prioritar.",
    },
    {
        question: "Cât durează înregistrarea unei firme SRL sau ÎI?",
        answer: "În mod obișnuit, procesul de înregistrare durează până la 3 zile lucrătoare, în funcție de complexitate și documentele furnizate.",
    },
    {
        question: "Ajutați și cu înregistrarea drepturilor de autor sau a mărcilor?",
        answer: "Da, oferim suport complet pentru procedurile AGEPI privind proprietatea intelectuală.",
    },
    {
        question: "Cum pot beneficia de consultanță juridică online?",
        answer: "Puteți programa o consultație rapidă pe numărul de telefon +373 68099992.",
    },
    {
        question: "Puteți reprezenta firma mea în instanță sau în fața organelor de stat?",
        answer: "Da, oferim reprezentare juridică în instanță pentru cauze civile, contravenționale și penale, dar și sprijin în relația cu instituțiile statului (FISC, primării etc.).",
    },
]

const FAQ = () => {
  return (
    <div className={cn("bg-white px-[150px] py-[100px] flex flex-col gap-[100px]", "max-xl:px-[80px] max-sm:gap-14 max-sm:px-[40px] max-sm:py-[60px] max-xs:px-[20px]")}>
        <h2 className={cn("font-playfair text-black text-5xl font-bold text-center", "max-sm:text-3xl")}>Întrebări frecvente</h2>
        <div className={cn("grid grid-cols-2 gap-12", "max-lg:grid-cols-1 max-lg:place-items-center")}>
            {questions.map((item, index) => (
                <FAQItem key={index} {...item}/>
            ))}
        </div>
    </div>
  )
}

export default FAQ