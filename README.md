# Next.js 13+ Boilerplate and Starter with Tailwind CSS 3.3 and TypeScript

🚀 Welcome to the Next.js Boilerplate and Starter, a powerful open-source template designed for scalable projects! This resource is packed with features to help you craft high-performance, maintainable, and delightful applications. Harness the combined capabilities of App Router, Tailwind CSS, and TypeScript ⚡️, all meticulously crafted with a developer-first approach using Next.js, TypeScript, ESLint, and Prettier. We've taken care of the heavy lifting so you can kick back, relax, and prepare to conquer the world with your extraordinary application! 🌍

## 📚 Features

Experience developer awesomeness with these all-in-one features:

- 🏎️ **[Next.js](https://nextjs.org)** - Fast by default, equipped with the App Router
- 💎 **[TypeScript](https://www.typescriptlang.org)** -Enhanced with the [`ts-reset`](https://github.com/total-typescript/ts-reset) library for unparalleled type safety
- 💅 **[Tailwind CSS](https://tailwindcss.com)** - A utility-first CSS framework for rapid UI development
- ✨ **[ESlint](https://eslint.org)** and **[Prettier](https://prettier.io)** - Ensuring clean, consistent, and error-free code
- 🎯 **[Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)** - Simplified Absolute import paths using the @ prefix
- 🚀 **[GitHub Actions](https://github.com/features/actions)** - Pre-configured actions for seamless workflows with GitHub Actions on pull requests
- 🗂 **[VSCode configuration](https://code.visualstudio.com/docs/getstarted/settings)** - Streamlined debugging, settings, tasks, and extensions for ESLint, Prettier, and TypeScript.
- 🍀 **[T3 Env](https://env.t3.gg/)** - Manage your type-safe environment variables with T3 Env

## 🎯 Getting Started

To get started with this boilerplate, follow these steps:

1. Fork & clone repository:

```bash
## Don't forget to ⭐ star and fork it first :)
git clone https://github.com/<your_username)/next-js-starter-boilerplate.git
```

2. Install the dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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
})
```

If the required environment variables are not set, you'll get an error message:

```sh
  ❌ Invalid environment variables: { SECRET_KEY: [ 'Required' ] }
```

## 🤝 Contributions

Everyone is welocme to contribute to the project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements. To contribute, please follow these steps:

1. Fork the repository.
2. Create a branch whih a descriptive name.
3. Make your changes, and commit them using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0) format.
4. Push your changes to the forked repository.
5. Create a pull request, and we'll review your changes.

## 🪪 License

This project is licensed under the MIT License. For more information, see the [LICENSE](./LICENSE) file.``