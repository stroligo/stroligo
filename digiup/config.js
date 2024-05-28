module.exports = {
  config: {
    tailwindjs: './tailwind.config.js',
    port: 9050,
  },
  plugins: {
    typography: false,
    forms: false,
    lineClamp: false,
    containerQueries: false,
  },
  paths: {
    root: './static/',
    base: './static/',
    src: {
      css: './static/src/css',
      js: './static/src/js',
    },
    build: {
      css: './static/build/css',
      js: './static/build/js',
    },
    wordpress: {
      css: './wordpress/wp-content/themes/digiup/build/css',
      js: './wordpress/wp-content/themes/digiup/build/js',
    },
  },
  extend: {
    colors: {
      digiup: {
        gray: {
          25: '#F8FDFF',
          50: '#F2FAFF',
          100: '#E7E7E7',
          200: '#B0B0B0',
          300: '#888888',
          400: '#6D6D6D',
          500: '#4F4F4F',
          600: '#3D3D3D',
        },
        blue: {
          100: '#0069AB',
          200: '#0084D4',
          300: '#00A4F4',
          400: '#0095DE',
        },
        'light-blue': {
          100: '#B6E6FF',
          200: '#A7E2FF',
          300: '#C5ECFF',
          400: '#95DDFF',
          500: '#88D8FF',
          600: '#0179B4',
        },
      },
    },
    borderRadius: {
      inherit: 'inherit',
    },

    backgroundImage: () => ({
      'gradient-text':
        'linear-gradient(270deg,var(--tw-gradient-stops))' /* Defautl degree */,
      /* #appointment */
      'gradient-radial-appointment':
        'radial-gradient(114.87% 113.36% at 40.95% -10.45%, var(--tw-gradient-stops))',
      'gradient-linear-appointment':
        'linear-gradient(-79deg,var(--tw-gradient-stops)) ',

      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }),
    fontFamily: {
      manrope: ['Manrope, sans-serif'],
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    dropShadow: {
      appointment: '3.12195px 9.36585px 21.8537px rgba(0, 0, 0, 0.06)',
    },

    screens: {
      /*       sm: '768px',
      md: '992px',
      lg: '1024px',
      xl: '1400px', */
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    animation: {
      fadeIn: 'fadeIn .7s ease-out both',
    },
  },
  variants: {
    extend: {
      fontWeight: ['responsive', 'hover', 'focus'],
    },
  },
};
