import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="flex h-screen items-center justify-center">
      <p className="w-96">{t('desc')}</p>
    </main>
  );
}
