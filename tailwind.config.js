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
        // Primary Color System (Green)
        primary: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5ab77f',
          500: '#3A9355', // Main primary
          600: '#2d7a44',
          700: '#256238',
          800: '#204f2f',
          900: '#1c4128',
          950: '#0e2416',
        },
        // Secondary Color System (Premium Gold)
        secondary: {
          50: '#fefcf0',
          100: '#fef7e0',
          200: '#fdecc4',
          300: '#fbdc9c',
          400: '#f8c572',
          500: '#F3B700', // Main secondary/accent
          600: '#e0a103',
          700: '#bb7c06',
          800: '#98600c',
          900: '#7c4f0d',
          950: '#472a02',
        },
        // Premium Color System (Grays)
        neutral: {
          50: '#F8F9FA', // Premium background
          100: '#F1F3F4',
          200: '#E9ECEF', // Borders/lines
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529', // Premium text
          950: '#0D1117',
        },
        // Legacy support (will be gradually replaced)
        brand: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5ab77f',
          500: '#3A9355',
          600: '#2d7a44',
          700: '#256238',
          800: '#204f2f',
          900: '#1c4128',
          950: '#0e2416',
        },
        // Ensure all green/emerald usages map to our primary tone
        emerald: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5ab77f',
          500: '#3A9355',
          600: '#3A9355',
          700: '#256238',
          800: '#204f2f',
          900: '#1c4128',
          950: '#0e2416',
        },
        green: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5ca',
          300: '#8dd1a8',
          400: '#5ab77f',
          500: '#3A9355',
          600: '#3A9355',
          700: '#256238',
          800: '#204f2f',
          900: '#1c4128',
          950: '#0e2416',
        },
        gold: {
          50: '#fefcf0',
          100: '#fef7e0',
          200: '#fdecc4',
          300: '#fbdc9c',
          400: '#f8c572',
          500: '#F3B700',
          600: '#e0a103',
          700: '#bb7c06',
          800: '#98600c',
          900: '#7c4f0d',
          950: '#472a02',
        },
        ink: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#0D1117',
        },
        sand: {
          50: '#F8F9FA',
          100: '#F1F3F4',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
          950: '#0D1117',
        },
      },
      fontFamily: {
        sans: ['var(--font-reddit-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-reddit-sans)', 'Georgia', 'serif'],
        display: ['var(--font-reddit-sans)', 'Georgia', 'serif'],
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