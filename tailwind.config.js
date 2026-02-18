/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'umber':        '#2C241E',
        'umber-mid':    '#342C25',
        'umber-raised': '#3A3028',
        'earth-border': '#4A3F35',
        'earth-rule':   '#3E3430',
        'bone':         '#F5F5F0',
        'taupe':        '#B8A99A',
        'taupe-muted':  '#7A6D62',
        'taupe-faint':  '#5A4E46',
        'sand':         '#C4A882',
        'sand-dark':    '#A08060',
        'void':         '#1E1813',
      },
      fontFamily: {
        'serif': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'sans':  ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':  'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
