/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0b1f3a',
          800: '#12345b',
          700: '#1a4b80',
        },
        brand: {
          600: '#2563a6',
          500: '#3478c5',
          100: '#e9f2fb',
          50: '#f4f8fc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 35px rgba(7, 20, 38, 0.08)',
        soft: '0 8px 24px rgba(7, 20, 38, 0.06)',
      },
    },
  },
  plugins: [],
}
