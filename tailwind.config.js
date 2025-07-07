/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        violet: {
          500: '#bb33ff',
          600: '#9333ea',
          700: '#7c3aed',
        },
        purple: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wave': 'wave-animation 20s infinite linear',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'translateX(-50%) translateY(-50%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) translateY(-50%) rotate(360deg)' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(187, 51, 255, 0.5)',
        'neon-lg': '0 0 30px rgba(187, 51, 255, 0.8)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};