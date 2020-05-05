module.exports = {
  root: true,
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    node: true,
    jest: true, // solve the problem 'expect' is not defined from eslint
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'object-curly-newline': ['always'],
    // 'max-len': ['error', { code: 120 }],
  },

  // 'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  // settings: {
  //   'import/resolver': {
  //     node: {},
  //   },
  // },
  // overrides: [
  //   {
  //     files: ['scripts/**/*.js', '**/*mock*/**/*.js', '**/__tests__/**/*.js'],
  //     rules: {
  //       'global-require': 'off',
  //       'import/no-extraneous-dependencies': 'off',
  //       'one-var': 'off',
  //     },
  //   },
  // ],
};
