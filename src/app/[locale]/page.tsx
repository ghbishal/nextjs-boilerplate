import { Link } from '@/i18n/i18nNavigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Navigation' });

  return {
    title: t('home'),
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="mb-9 flex">
        <Link href="/" locale="en">
          In english
        </Link>
        |
        <Link href="/" locale="ja">
          In Japanese
        </Link>
      </div>
      <p className="w-96">{t('desc')}</p>
    </main>
  );
}
