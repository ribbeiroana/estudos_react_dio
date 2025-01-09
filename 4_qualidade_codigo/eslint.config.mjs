import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    { languageOptions: { globals: globals.browser, ecmaVersion: 'latest' } },
    pluginJs.configs.recommended,
    {
        plugins: ['react', 'react-hooks', 'jsx-a11y'],
        extends: [
            'plugin:react/recommended',
            'airbnb',
            'plugin:prettier/recommended',
            'plugin:jsx-a11y/recommended',
        ],
        rules: {
            'camelcase': 'off',
            'no-console': 'warn',
            'no-alert': 'warn',
            'semi-spacing': 'error',
            'no-empty': 'error',
            'no-empty-function': 'error',
            'space-before-function-paren': ['error', 'never'],
            'block-spacing': 'error',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'prettier/prettier': 'error',
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
        },
    },
];
