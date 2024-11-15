import { orange } from '@radix-ui/colors';
import { stone, rose, blue, lime, amber, red } from 'tailwindcss/colors';

export function generateRadixColors(colors) {
  let count = 50;
  return Object.entries(colors).reduce((acc, [_, value], index) => {
    const color = { [count]: value };
    count += index === 0 ? 50 : 100;
    return { ...acc, ...color };
  }, {});
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,tsx,md,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      gray: stone,
      orange: generateRadixColors(orange),
      lime,
      rose,
      red,
      blue,
      accent: generateRadixColors(amber),
      tones: {
        50: '#fff7ed',
        100: '#ebe3da',
        200: '#d8d0c7',
        300: '#c5bdb4',
        400: '#b2aba2',
        500: '#a09990',
        600: '#8e877e',
        700: '#7d766d',
        800: '#6b655c',
        900: '#5b544c',
        1000: '#4b443c',
        1100: '#3b352d',
        1200: '#2c261f',
        1300: '#1e1811',
        1400: '#110b06',
        1500: '#010000',
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', 'Segoe UI Symbol','"Noto Color Emoji"'],
      serif: ['Caveat Variable', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      animation: {},
      keyframes: {},
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontFamily: `'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', 'Segoe UI Symbol','"Noto Color Emoji"'`,
            color: theme('colors.tones.1000'),
            'h1,h2': {
              fontWeight: 700,
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
              color: theme('colors.tones.1300'),
            },
            'h3,h4,h5,h6': {
              fontWeight: 600,
              marginTop: theme('spacing.7'),
              marginBottom: theme('spacing.4'),
              color: theme('colors.tones.1300'),
            },
            'strong': {
              fontSize: '1rem',
            },
            'a': {
              fontSize: '1rem',
              fontWeight: 600,
              color: theme('colors.accent.900'),
              textDecorationLine: 'underline',
              textUnderlineOffset: 2,
              '&:hover': {
                opacity: 0.8,
              }
            },
            img: {
              borderRadius: 20,
              borderWidth: 1,
              borderColor: theme('colors.tones.200'),
              borderStyle: 'solid',
            },
            'blockquote p': {
              color: theme('colors.tones.900'),
              fontStyle: 'italic',
            },
            'blockquote p:first-of-type::before': { content: 'unset' },
            'blockquote p:first-of-type::after': { content: 'unset' },
          }
        },
        'lg': {
          css: {
            'h1,h2': {
              marginTop: theme('spacing.10'),
              marginBottom: theme('spacing.5'),
            },
            'h3,h4,h5,h6': {
              marginTop: theme('spacing.8'),
              marginBottom: theme('spacing.5'),
            },
            'p+p': {
              marginBottom: `${theme('spacing.1')} !important`,
            },
            'strong': {
              fontSize: theme('fontSize.lg'),
            },
            'a': {
              fontSize: theme('fontSize.lg'),
              fontWeight: 600,
              color: theme('colors.accent.900'),
              textDecorationLine: 'underline',
              textUnderlineOffset: 2,
              '&:hover': {
                opacity: 0.8,
              }
            },
            img: {
              border: '1px solid #000',
            }
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
