/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bone':        '#F4EFE8',
        'linen':       '#EDE6DA',
        'clay':        '#E4D8C8',
        'warm-border': '#CEC4B8',
        'warm-rule':   '#DDD5C8',
        'ink':         '#1C1814',
        'ink-mid':     '#4A4039',
        'warm-secondary': '#6B6059',
        'warm-muted':  '#A89D95',
        'warm-faint':  '#C0B5AA',
        'terra':       '#6B5744',
        'terra-mid':   '#9A8A7A',
        'charcoal':    '#2C2820',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'mono':    ['"JetBrains Mono"', 'monospace'],
        'serif':   ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':  'fadeIn 0.2s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        'fadeIn': {
          'from': { opacity: '0', transform: 'translateY(6px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        'slideIn': {
          'from': { opacity: '0', transform: 'translateY(14px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
