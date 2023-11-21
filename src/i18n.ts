import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ja'];

export const i18n = {
  locales,
  defaultLocale: 'en',
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig['locales'][number];

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'en'
      ? // When using Turbopack, this will enable HMR for `en`
        import('../messages/en.json')
      : import(`../messages/${locale}.json`))
  ).default,
}));
