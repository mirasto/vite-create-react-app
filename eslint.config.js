import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint'; // Додаємо підтримку TS
import prettierConfig from 'eslint-config-prettier'; // Тільки конфіг

export default tseslint.config(
  // 1. Ігнорування папок (замість globalIgnores)
  { ignores: ['dist', 'node_modules', 'build'] },

  // 2. Базовий конфіг для JS та TS
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // Оновлюємо розширення файлів
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      // Використовуємо TS парсер
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      // Налаштування для невикористаних змінних (враховуючи TS)
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // 3. Prettier Config — ЗАВЖДИ ОСТАННІЙ
  // Він просто вимикає правила ESLint, які конфліктують з Prettier
  prettierConfig,
);
