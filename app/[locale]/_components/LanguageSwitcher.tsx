'use client'
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";;

export default function LanguageSwitcher({ className }: { className?: string }) {
    const path = usePathname();
    const locale = useLocale().toUpperCase();

    return (
        <div className={`bg-[#00000080] flex flex-col px-0.5 rounded-br-2xl pb-1 ${className}`}>
            <Link locale="ro" href={path} className={cn("text-white", { 'text-[#D2DE32]': locale === 'RO' })} >RO</Link>
            <Link locale="ru" href={path} className={cn("text-white", { 'text-[#D2DE32]': locale === 'RU' })} >RU</Link>
        </div>

    )
}