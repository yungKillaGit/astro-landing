const { configure, presets } = require('eslint-kit');

module.exports = configure({
  presets: [presets.imports(), presets.typescript(), presets.prettier(), presets.node()],
  extend: {
    extends: ['plugin:astro/recommended'],
    overrides: [
      {
        files: ['*.astro'],
        parser: 'astro-eslint-parser',
        parserOptions: {
          parser: '@typescript-eslint/parser',
          extraFileExtensions: ['.astro'],
        },
      },
    ],
  },
});
