import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations('test');
  return (
    <div>
      {t('testing')}
    </div>
  );
}
