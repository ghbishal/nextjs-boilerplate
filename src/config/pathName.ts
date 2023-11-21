import { Pathnames } from 'next-intl/navigation';
import { locales } from '@/i18n';

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
