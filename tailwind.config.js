/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ninja-black': '#0a0a0a',
        'ninja-dark': '#111111',
        'ninja-charcoal': '#1a1a1a',
        'ninja-gray': '#2a2a2a',
        'ninja-mid': '#3a3a3a',
        'ninja-muted': '#6b6b6b',
        'ninja-pink': '#ff2d78',
        'ninja-pink-soft': '#ff6ba8',
        'ninja-pink-glow': '#ff2d7840',
        'ninja-pink-dim': '#ff2d7820',
        'ninja-white': '#f0f0f0',
        'ninja-silver': '#c0c0c0',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-pink': 'pulse-pink 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'slide-in': 'slideIn 0.4s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        'pulse-pink': {
          '0%, 100%': { boxShadow: '0 0 10px #ff2d7840' },
          '50%': { boxShadow: '0 0 30px #ff2d78, 0 0 60px #ff2d7840' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow': {
          'from': { textShadow: '0 0 10px #ff2d78, 0 0 20px #ff2d78' },
          'to': { textShadow: '0 0 20px #ff2d78, 0 0 40px #ff2d78, 0 0 60px #ff2d78' },
        },
        'slideIn': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      backgroundImage: {
        'ninja-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a0a12 50%, #0a0a0a 100%)',
        'pink-gradient': 'linear-gradient(135deg, #ff2d78, #ff6ba8)',
        'card-gradient': 'linear-gradient(145deg, #1a1a1a, #111111)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, #ff2d7830 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
