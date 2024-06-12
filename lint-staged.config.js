module.exports = {
  '*.{ts,tsx}': ['prettier --write', 'eslint --fix', 'eslint'],
  '*.{js,jsx}': ['prettier --write', 'eslint --fix', 'eslint'],
};
