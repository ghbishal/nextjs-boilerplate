import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ja'];

export const i18n = {
  locales,
  defaultLocale: 'en',
};

export type I18nConfig = typeof i18n;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? // When using Turbopack, this will enable HMR for `en`
          import('../messages/en.json')
        : import(`../messages/${locale}.json`))
    ).default,
  };
});
