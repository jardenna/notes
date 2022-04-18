module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      tsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': ['off'],
    'react/no-direct-mutation-state': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 0,
    'react/no-unknown-property': 1,
    'react/react-in-jsx-scope': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 1,
    'react/sort-comp': 1,

    'linebreak-style': ['off'],
    eqeqeq: 'error',
    'comma-dangle': 0,
    'no-extra-semi': 1,
    'no-undef': 1,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'no-warning-comments': [
      'error',
      { terms: ['todo', 'fixme', 'any other term'], location: 'anywhere' },
    ],
    //quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['warn', { allow: ['info', 'error'] }],
  },
};
