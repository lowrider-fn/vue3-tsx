module.exports = {
  root: true,
  env: { node: true },
  parser: '@typescript-eslint/parser',

  parserOptions: { ecmaVersion: 2020 },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  plugins: [
    'react',
    'import',
    'destructure-depth',
    'typescript-sort-keys'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    indent: 'off',
    'comma-spacing': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', { generics: 'ignore' }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { disallowTypeAnnotations: false }
    ],
    '@typescript-eslint/indent': [
      'error',
      2
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error'
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: [
          'PascalCase'
        ],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      },
      {
        selector: 'class',
        format: [
          'PascalCase'
        ]
      },
      {
        selector: 'enum',
        format: [
          'PascalCase'
        ]
      }
    ],
    '@typescript-eslint/no-explicit-any': [
      'warn',
      { ignoreRestArgs: true }
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/object-curly-spacing': [
      'error',
      'always'
    ],
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    'array-bracket-spacing': [
      'error',
      'never'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-body-style': [
      'error',
      'as-needed'
    ],
    'consistent-return': 'off',
    'destructure-depth/max-depth': [
      'error'
    ],
    'import/extensions': 'off',
    'import/no-duplicates': [
      'error',
      { considerQueryString: true }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': [
      'error',
      { count: 1 }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'index',
          'internal',
          'parent',
          'sibling',
          'object',
          'type'
        ],
        'newlines-between': 'always'
      }
    ],
    'import/prefer-default-export': 'off',
    // "jsx-a11y/alt-text": "warn",
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-len': [
      'warn',
      {
        code: 140,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true
      }
    ],
    'multiline-ternary': [
      'error',
      'always-multiline'
    ],
    'no-implicit-coercion': [
      'error',
      {}
    ],
    'no-mixed-operators': 'error',
    'no-multiple-empty-lines': [
      'error',
      { max: 1 }
    ],
    'no-plusplus': [
      'error',
      { allowForLoopAfterthoughts: true }
    ],
    'no-multi-spaces': 'error',
    'no-shadow': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true
        },
        ImportDeclaration: {
          minProperties: 6,
          multiline: true
        },
        ExportDeclaration: {
          minProperties: 6,
          multiline: true
        }
      }
    ],
    'object-property-newline': 'off',
    'padded-blocks': [
      'error',
      'never'
    ],
    'prefer-destructuring': 'off',
    quotes: [
      'error',
      'single'
    ],
    radix: 'warn',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      'never'
    ],
    'react/jsx-boolean-value': 'off',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline'
    ],
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'multiline'
      }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/static-property-placement': 'off',
    'react/self-closing-comp': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'typescript-sort-keys/interface': 'off',
    'typescript-sort-keys/string-enum': 'error'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: ['./tsconfig.json'] }
    }
  ]
};
