import { Pathnames } from 'next-intl/navigation';

export const locales = ['en', 'ja'] as const;

export const pathnames = {
  '/': '/',
  '/home': {
    en: '/home',
    ja: '/ホーム',
  },
  '/about': {
    en: '/about',
    ja: '/およそ',
  },
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
