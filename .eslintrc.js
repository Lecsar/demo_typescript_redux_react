module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
    sourceType: 'module',
    useJSXTextNode: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-triple-slash-reference': 0,
    '@typescript-eslint/prefer-interface': 0,
    "rules": {
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { "allowTypedFunctionExpressions": true }
      ]
  }
};
