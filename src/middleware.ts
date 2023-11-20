import createMiddleware from 'next-intl/middleware';
import { locales, pathnames } from './config';

export default createMiddleware({
  defaultLocale: 'en',
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ja|en)/:path*'],
};
