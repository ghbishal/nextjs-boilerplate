import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { pathnames } from './config';
import { type I18nConfig, locales } from './i18n';

function getLocale(request: NextRequest, i18nConfig: I18nConfig) {
  const { locales, defaultLocale } = i18nConfig;
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales);

  return match(languages, locales, defaultLocale);
}

// #To do:- Auto Change language according to getLocale value

export default async function middleware(request: NextRequest) {
  const getDefaultLocale = getLocale(request, { locales, defaultLocale: 'us' });

  const handleI18nRouting = createMiddleware({
    defaultLocale: getDefaultLocale || 'en',
    locales,
    pathnames,
  });

  const response = handleI18nRouting(request);

  // Set the x-default-locale header in the response
  response.headers.set('default-locale', getDefaultLocale);

  return response;
}

export const config = {
  // Matcher entries are linked with a logical "or", therefore
  // if one of them matches, the middleware will be invoked.
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
};
