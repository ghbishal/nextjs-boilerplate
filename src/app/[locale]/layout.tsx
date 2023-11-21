import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import React, { ReactNode, Suspense } from 'react';
import Loading from '@/app/[locale]/loading';
import { locales } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
  };
}

export default function LocaleLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
