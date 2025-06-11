import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';


export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'], plugins: { js }, extends: ['js/recommended'],
    rules: {
      // Regras que geram erros facilmente detectáveis
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-multiple-empty-lines': ['error', { max: 2 }],
    },
  },
  { files: ['**/*.{js,mjs,cjs}'], languageOptions: { globals: globals.node } },
]);
