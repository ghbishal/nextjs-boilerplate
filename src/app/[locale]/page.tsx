import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';

type Props = {
  params: { locale: string };
};

export default async function HomePage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Home');
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
