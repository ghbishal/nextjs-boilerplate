module.exports = {
  '*.{ts,tsx}': [
    'prettier --write',
    'eslint -c ./.eslintrc.js --ext .ts,.tsx --report-unused-disable-directives --fix',
  ],
  '*.{js,jsx}': 'prettier --write',
};
