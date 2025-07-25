export default {
  extends: [
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
  },
  settings: {
    tailwindcss: {
      callees: ['classnames', 'clsx', 'cn'],
      config: 'tailwind.config.ts',
    },
  },
};