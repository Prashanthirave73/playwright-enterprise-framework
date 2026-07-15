import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  // Ignore generated folders
  {
    ignores: ['node_modules/**', 'playwright-report/**', 'test-results/**', 'coverage/**'],
  },

  // Base configuration
  js.configs.recommended,

  ...tseslint.configs.recommended,

  // Enterprise Framework (Strict)
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'off',
    },
  },

  // Learning Folder (Relaxed Rules)
  {
    files: ['learning/**/*.js'],
    rules: {
      'no-console': 'off',
      'no-redeclare': 'off',
      'no-constant-condition': 'off',
      'no-constant-binary-expression': 'off',
      'no-useless-assignment': 'off',
      'no-unassigned-vars': 'off',
    },
  },
];
