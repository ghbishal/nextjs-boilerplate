import createNextIntlPlugin from 'next-intl/plugin';
import './src/lib/env.mjs';

const withNextIntlConfig = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    dirs: ['.'],
  },
};

export default withNextIntlConfig(nextConfig);
