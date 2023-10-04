module.exports = {
  extends: [
    'next',
    'prettier',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-extraneous-class': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      1,
      {
        groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'env',
            group: 'internal',
          },
          {
            pattern: 'theme',
            group: 'internal',
          },
          {
            pattern: 'public/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx}', '**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import', 'unused-imports'],
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
      rules: {
        'import/no-unresolved': 'error',
        'import/no-named-as-default': 'off',
      },
    },
  ],
};
