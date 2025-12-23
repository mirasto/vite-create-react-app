/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],

  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.css'],
      customSyntax: 'postcss',
    },
  ],
};
