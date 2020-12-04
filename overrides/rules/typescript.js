module.exports = {
  rules: {
    'no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-function-return-type': [
      0,
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/explicit-member-accessibility': [2, { accessibility: 'no-public' }],
    '@typescript-eslint/no-use-before-define': [
      2,
      {
        functions: true,
        classes: true,
        variables: false,
      },
    ],
  },
};
