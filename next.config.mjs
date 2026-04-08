import path from 'node:path';
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/lib/env.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/* This path is supported by default: ./(src/)i18n/request.{js,jsx,ts,tsx} .
If you want to use a different path, you can pass a custom path to the plugin:
*/
const withNextIntlConfig = createNextIntlPlugin('./src/i18n/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
};

export default withNextIntlConfig(nextConfig);
