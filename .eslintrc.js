// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'callback-return': 'error',
    'class-methods-use-this': 'off',
    'constructor-super': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'generator-star-spacing': ['error', 'after'],
    'linebreak-style': ['error', 'unix'],
    'no-catch-shadow': 'error',
    'no-console': 'off',
    'no-duplicate-imports': 'error',
    'no-else-return': 'off',
    'no-implicit-globals': 'error',
    'no-invalid-this': 'error',
    'no-label-var': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'no-this-before-super': 'error',
    'no-unexpected-multiline': 'warn',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'prefer-spread': 'error',
    'prefer-template': 'off',

    'prettier/prettier': 'error',
  },
}
