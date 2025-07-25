const tailwindcssPlugin = require('eslint-plugin-tailwindcss')

module.exports = {
  plugins: {
    tailwindcss: tailwindcssPlugin,
  },
  rules: {
    ...tailwindcssPlugin.configs.recommended.rules,
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'cn'],
      config: false, // Disable config file resolution
      cssFiles: ['**/*.css', '**/*.scss', '**/*.sass'],
    },
  },
};