/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfe',
          300: '#7cc2fd',
          400: '#36a4f9',
          500: '#0c87ed',
          600: '#006ace',
          700: '#0055a8',
          800: '#064886',
          900: '#0a3e70',
          950: '#07254a',
        },
        secondary: {
          50: '#f2f7fd',
          100: '#e7f0fc',
          200: '#d4e2f9',
          300: '#b7cdf3',
          400: '#96aeea',
          500: '#7a8ce0',
          600: '#666ed2',
          700: '#585abb',
          800: '#4a4e97',
          900: '#3f4279',
          950: '#262848',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};