import { getRequestConfig } from 'next-intl/server';
import { routing } from './i18nNavigation';

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming locale is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === 'en'
        ? import('../../messages/en.json')
        : import(`../../messages/${locale}.json`))
    ).default,
  };
});
