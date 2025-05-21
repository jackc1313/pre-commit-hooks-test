import js from '@eslint/js';

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        console: 'readonly',
        window: 'readonly',
        process: 'readonly',
        // aggiungi altri globali se serve
      },
    },
    rules: {
      'no-console': 'off', // se vuoi permettere i console.log
    },
  },
];
