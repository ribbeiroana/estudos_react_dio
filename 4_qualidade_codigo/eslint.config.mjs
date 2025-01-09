import globals from 'globals'; // Importa variáveis globais para navegadores, como window, document, etc.
import pluginJs from '@eslint/js'; // Inclui o conjunto básico de regras do ESLint.
import eslintPluginReact from 'eslint-plugin-react'; // Importando o plugin React
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // Importando o plugin React Hooks
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'; // Importando o plugin JSX A11y
import eslintConfigAirbnb from 'eslint-config-airbnb'; // Importando a configuração do Airbnb
import eslintPluginPrettier from 'eslint-plugin-prettier'; // Importando o plugin Prettier
import eslintPluginImport from 'eslint-plugin-import'; // Importando o plugin Import

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
    },
  },
  pluginJs.configs.recommended, // Configuração padrão do ESLint
  eslintConfigAirbnb.rules, // Configuração do Airbnb (direto as regras)
  {
    plugins: {
      react: eslintPluginReact, // Plugin React
      'react-hooks': eslintPluginReactHooks, // Plugin React Hooks
      prettier: eslintPluginPrettier, // Plugin Prettier
      'jsx-a11y': eslintPluginJsxA11y, // Plugin de Acessibilidade JSX
      import: eslintPluginImport, // Plugin Import
    },
    rules: {
      camelcase: 'off',
      'no-console': 'warn',
      'no-alert': 'warn',
      'semi-spacing': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'space-before-function-paren': ['error', 'never'],
      'block-spacing': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+ não exige a importação do React no escopo
      'react-hooks/rules-of-hooks': 'error', // Garante o uso correto dos hooks
      'react-hooks/exhaustive-deps': 'warn', // Verifica dependências dos hooks
      'prettier/prettier': 'error', // Integra o Prettier ao ESLint
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
];
