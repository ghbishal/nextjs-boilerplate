# Next.js 15+ Boilerplate and Starter with Tailwind CSS, next-intl, TypeScript

🚀 Welcome to the Next.js Production Ready Boilerplate and Starter, a powerful open-source template designed for scalable projects! This resource is packed with features to help you craft high-performance, maintainable, and delightful applications. Harness the combined capabilities of App Router, Tailwind CSS, and TypeScript ⚡️, all meticulously crafted with a developer-first approach using Next.js, TypeScript, ESLint, Husky, next-intl and Prettier. We've taken care of the heavy lifting so you can kick back, relax, and prepare to conquer the world with your extraordinary application! 🌍

## 📚 Features

Experience developer awesomeness with these all-in-one features:

- 🏎️ **[Next.js](https://nextjs.org)** - Fast by default, equipped with the App Router
- 💎 **[TypeScript](https://www.typescriptlang.org)** -Enhanced with the [`ts-reset`](https://github.com/total-typescript/ts-reset) library for unparalleled type safety
- 💅 **[Tailwind CSS](https://tailwindcss.com)** - A utility-first CSS framework for rapid UI development
- 🪡 **[Tailwind merge](https://github.com/dcastil/tailwind-merge)** - Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
- 🧶 **[clsx](https://github.com/lukeed/clsx)** - function can take any number of arguments, each of which can be an Object, Array, Boolean, or String.
- 💥 **[CVA](http://cva.style/)** - Create a consistent, reusable, and atomic design system
- ✨ **[ESlint](https://eslint.org)** and **[Prettier](https://prettier.io)** - Ensuring clean, consistent, and error-free code
- 📕 **[Storybook](https://storybook.js.org/)** - Create, test, and showcase your components
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Simplified Absolute import paths using the @ prefix
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for seamless workflows with GitHub Actions on pull requests
- 🗂 **[VSCode configuration](https://code.visualstudio.com/docs/getstarted/settings)** - Streamlined debugging, settings, tasks, and extensions for ESLint, Prettier, and TypeScript.
- 🍀 **[T3 Env](https://env.t3.gg/)** - Manage your type-safe environment variables with T3 Env
- 📋 **[next-intl](https://next-intl-docs.vercel.app/)** - Internationalization for Next.js
- 🦊 **[Husky](https://typicode.github.io/husky/)** - Husky for Git Hooks
- 🚫 **[Lint-Staged](https://github.com/lint-staged/lint-staged#readme)** - Lint-staged for running linters on Git staged files

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

Don't forget to ⭐ star and fork it first 🤗
```bash
git clone --depth=1 https://github.com/ghbishal/nextjs-boilerplate.git my-project-name
```

2. Install the dependencies:

```bash
cd my-project-name
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Styling and Design System

This boilerplate uses Tailwind CSS for styling and CVA for creating a powerful, easy-to-use design system. If you want to learn more about the setup, check out this fantastic video by Vercel:

[![Styling and Design System](https://img.youtube.com/vi/T-Zv73yZ_QI/0.jpg)](https://www.youtube.com/watch?v=T-Zv73yZ_QI&ab_channel=Vercel)

### CVA - A New Approach to Variants

While CSS-in-TS libraries such as [Stitches](https://stitches.dev/) and [Vanilla Extract](https://vanilla-extract.style/) are great for building type-safe UI components, they might not be the perfect fit for everyone. You may prefer more control over your stylesheets, need to use a framework like Tailwind CSS, or simply enjoy writing your own CSS.

Creating variants using traditional CSS can be a tedious task, requiring you to manually match classes to props and add types. CVA is here to take that pain away, allowing you to focus on the enjoyable aspects of UI development. By providing an easy and type-safe way to create variants, CVA simplifies the process and helps you create powerful design systems without compromising on the flexibility and control of CSS.

### tailwind-merge

Utility function to efficiently merge [Tailwind CSS](https://tailwindcss.com) classes in JS without style conflicts.

```ts
import { twMerge } from 'tailwind-merge';

twMerge('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]');
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'
```

### clsx(...input)

The `clsx` function can take ***any*** number of arguments, each of which can be an Object, Array, Boolean, or String.

> **Important:** _Any_ falsey values are discarded!<br>Standalone Boolean values are discarded as well.

```js
clsx(true, false, '', null, undefined, 0, Number.NaN);
// => ''
```

### Class Merging

The `cn` located at `utils.ts`. util handles conditional classes and class merging.

```ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```sh
  Input -> cn("px-2 bg-slate-100 py-2 bg-slate-200")
  // Outputs `p-2 bg-slate-200`
```

## 💻 Environment Variables handling

[T3 Env](https://env.t3.gg/) is a library that provides environmental variables checking at build time, type validation and transforming. It ensures that your application is using the correct environment variables and their values are of the expected type. You’ll never again struggle with runtime errors caused by incorrect environment variable usage.

Config file is located at `env.mjs`. Simply set your client and server variables and import `env` from any file in your project.

```ts
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    // Server variables
    SECRET_KEY: z.string(),
  },
  client: {
    // Client variables
    API_URL: z.string().url(),
  },
  runtimeEnv: {
    // Assign runtime variables
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 💰¥ Internationalization

[next-intl](https://next-intl-docs.vercel.app/) is a library that supports multiple languages, with your app code becoming simpler insted of more complex.

In order to add more language option just add translation file inside [messages](./messages/) file and your language locale inside `pathName.ts` also if you want a custom navigation link just add more links in the following order. For more info check [next-intl/navigation](https://next-intl-docs.vercel.app/docs/routing/navigation)

```ts
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
```

## 🤝 Contributions

Everyone is welocme to contribute to the project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements. To contribute, please follow these steps:

1. Fork the repository.
2. Create a branch whih a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## 🪪 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.
