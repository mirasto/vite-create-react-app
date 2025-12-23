/** @type {import("stylelint").Config} */
export default {
  extends: ['stylelint-config-standard'],

  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      customSyntax: 'postcss-scss',
      rules: {
        'import-notation': 'string',

        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['plugin', 'import-normalize', 'tailwind', 'apply', 'responsive', 'screen'],
          },
        ],
      },
    },
    {
      files: ['**/*.css'],
      customSyntax: 'postcss',
      rules: {
        'import-notation': 'string',
      },
    },
  ],

  rules: {
    'import-notation': 'string',
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['plugin', 'import-normalize', 'tailwind', 'apply', 'responsive', 'screen'],
      },
    ],
    'declaration-empty-line-before': null,
  },
};
