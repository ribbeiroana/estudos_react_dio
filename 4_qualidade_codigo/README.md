
# Configuração do ESLint e Prettier no Projeto

Este projeto utiliza **ESLint** e **Prettier** para garantir que o código esteja consistente e siga as melhores práticas de desenvolvimento.

## Tecnologias Utilizadas
- **ESLint**: Ferramenta para encontrar e corrigir problemas no código JavaScript/React.
- **Prettier**: Ferramenta para formatação automática do código.
- **Airbnb Style Guide**: Guia de estilo utilizado como base para as regras do ESLint.
- **React Hooks Rules**: Regras adicionais para garantir boas práticas ao usar hooks do React.
- **JSX Accessibility**: Regras para melhorar a acessibilidade em componentes JSX.

---

## Instalação

### Dependências Necessárias
Execute os comandos abaixo para instalar o ESLint, Prettier e os plugins necessários:

```bash
npm install --save-dev eslint prettier eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier eslint-plugin-prettier
```

## Scripts para Linting
Adicione os seguintes scripts no arquivo `package.json` para rodar e corrigir o código automaticamente:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

## Configuração do ESLint
Explicação das Linhas de Configuração:

Resumo das configurações usadas no arquivo `eslint.config.js`:

```javascript
import globals from 'globals'; // Importa variáveis globais para navegadores, como window, document, etc.
import pluginJs from '@eslint/js'; // Inclui o conjunto básico de regras do ESLint.
import eslintPluginReact from 'eslint-plugin-react'; // Importando o plugin React
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'; // Importando o plugin React Hooks
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'; // Importando o plugin JSX A11y

export default [
  { languageOptions: { globals: globals.browser, ecmaVersion: 'latest' } }, // Configura o ambiente para JavaScript moderno.
  pluginJs.configs.recommended, // Habilita as regras recomendadas do ESLint.
  {
    plugins: {
      react: eslintPluginReact, // Definindo o plugin React no formato correto
      'react-hooks': eslintPluginReactHooks, // Definindo o plugin React Hooks
      'jsx-a11y': eslintPluginJsxA11y, // Definindo o plugin JSX A11y
    },
    extends: [
      'plugin:react/recommended', // Regras recomendadas para React.
      'airbnb', // Guia de estilo Airbnb.
      'plugin:prettier/recommended', // Integração com Prettier.
      'plugin:jsx-a11y/recommended', // Regras para acessibilidade em JSX.
    ],
    rules: {
      'camelcase': 'off', // Desativa a exigência de camelCase em variáveis.
      'no-console': 'warn', // Mostra um aviso ao usar console.log.
      'no-alert': 'warn', // Mostra um aviso ao usar alert().
      'semi-spacing': 'error', // Garante espaço correto após ponto e vírgula.
      'no-empty': 'error', // Proíbe blocos de código vazios.
      'no-empty-function': 'error', // Proíbe funções sem implementação.
      'space-before-function-paren': ['error', 'never'], // Proíbe espaços antes do parêntese em funções.
      'block-spacing': 'error', // Garante espaço entre chaves de blocos e o conteúdo.
      'react/react-in-jsx-scope': 'off', // Remove necessidade de importar React no escopo (React 17+).
      'react-hooks/rules-of-hooks': 'error', // Enforce regras para usar hooks corretamente.
      'react-hooks/exhaustive-deps': 'warn', // Verifica dependências dos hooks.
      'prettier/prettier': 'error', // Mostra erros de formatação detectados pelo Prettier.
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], // Ordena importações.
          'newlines-between': 'always', // Exige uma linha em branco entre grupos de importação.
        },
      ],
    },
  },
];
```

## Configuração do Prettier
Crie um arquivo .prettierrc na raiz do projeto com as configurações abaixo para personalizar o Prettier:

```json
{
  "singleQuote": true, // Usa aspas simples no código.
  "trailingComma": "all", // Adiciona vírgula no final de objetos e arrays.
  "semi": true, // Exige ponto e vírgula no final das linhas.
  "tabWidth": 2 // Define o tamanho da indentação como 2 espaços.
}
```

## Como Usar
Executar o Linter
Para verificar o código e encontrar problemas:

```bash
npm run lint
```

## Corrigir Problemas Automaticamente

Para corrigir problemas automaticamente:
```bash
npm run lint:fix
```

## Formatar Código com Prettier
Para formatar manualmente o código com o Prettier:
```bash
npx prettier --write .
```

## Exemplo Prático
Um exemplo de código que segue todas as regras configuradas:

```javascript
import React from 'react';

const Example = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <button type="button" onClick={handleClick}>
      Click Me
    </button>
  );
};

export default Example;
```

Com essas configurações, seu projeto estará pronto para manter um código consistente, legível e alinhado com as melhores práticas do mercado.
