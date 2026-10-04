const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script',
      globals: {
        ...require('globals').browser,
        ...require('globals').node,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
