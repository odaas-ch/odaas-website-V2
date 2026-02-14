/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Brand Guide
        brand: {
          // Swiss Red - Primary brand color #B00020
          red: '#B00020',
          'red-light': '#dc3d5a',
          'red-dark': '#8a001b',
          // Deep Black #1A1A1A
          black: '#1A1A1A',
          // Grays from Brand Guide
          'gray-dark': '#333333',
          'gray-medium': '#666666',
          'gray-light': '#F5F5F5',
          'gray-border': '#E0E0E0',
        },
        // Primary palette based on Swiss Red #B00020
        primary: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d0d7',
          300: '#f4a9b6',
          400: '#ec7489',
          500: '#dc3d5a',
          600: '#B00020',  // Main Swiss Red
          700: '#9a001b',
          800: '#800317',
          900: '#6d0718',
          950: '#3d0009',
        },
        // Functional colors from Brand Guide
        success: '#2E7D32',
        warning: '#F57C00',
        error: '#C62828',
        info: '#1565C0',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        'btn': '8px',
        'card': '12px',
      },
    },
  },
  plugins: [],
}
