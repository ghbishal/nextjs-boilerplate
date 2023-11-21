import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { pathnames } from './config';
import { locales } from './i18n';

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
