/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5ab77f',
          500: '#3A9355', // Primary brand color
          600: '#2d7a44',
          700: '#256238',
          800: '#204f2f',
          900: '#1c4128',
          950: '#0e2416',
        },
        gold: {
          50: '#fdfbf7',
          100: '#faf5ea',
          200: '#f4e9d0',
          300: '#ead8b0',
          400: '#dcc285',
          500: '#C8A96A', // Accent gold
          600: '#b8955a',
          700: '#9a7b4b',
          800: '#7e6340',
          900: '#675136',
          950: '#372b1d',
        },
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0F172A', // Primary text
          950: '#020617',
        },
        sand: {
          50: '#F7F5F0', // Light background
          100: '#f3f0e8',
          200: '#e8e2d4',
          300: '#d9d0ba',
          400: '#c7b99a',
          500: '#b5a37c',
          600: '#a08d67',
          700: '#857356',
          800: '#6c5e49',
          900: '#584d3e',
          950: '#2f2920',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'hero-pattern': 
          'radial-gradient(circle at 25% 25%, rgba(58, 147, 85, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(200, 169, 106, 0.05) 0%, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#0F172A',
            a: {
              color: '#3A9355',
              '&:hover': {
                color: '#2d7a44',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};