/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      minHeight: {
        16: '16px',
      },
    },
  },
  plugins: [],
};
