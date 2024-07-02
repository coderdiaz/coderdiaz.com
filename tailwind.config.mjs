import { orange } from '@radix-ui/colors';
import { stone, rose, blue, lime, amber } from 'tailwindcss/colors';

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
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', 'Segoe UI Symbol','"Noto Color Emoji"'],
      serif: ['Caveat Variable', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    extend: {
      animation: {
        glitch: 'glitch-anim-1 3s infinite',
      },
      keyframes: {
        'glitch-anim-1': {
          '0%': { clip: 'rect(13px,140px,15px,0)' },
          '5%': { clip: 'rect(5px,140px,16px,0)' },
          '10%': { clip: 'rect(16px,140px,6px,0)' },
          '15%': { clip: 'rect(19px,140px,13px,0)' },
          '20%': { clip: 'rect(6px,140px,18px,0)' },
          '25%': { clip: 'rect(12px,140px,5px,0)' },
          '30%': { clip: 'rect(4px,140px,20px,0)' },
          '35%': { clip: 'rect(6px,140px,8px,0)' },
          '40%': { clip: 'rect(17px,140px,7px,0)' },
          '45%': { clip: 'rect(19px,140px,3px,0)' },
          '50%': { clip: 'rect(6px,140px,5px,0)' },
          '55%': { clip: 'rect(3px,140px,13px,0)' },
          '60%': { clip: 'rect(15px,140px,14px,0)' },
          '65%': { clip: 'rect(14px,140px,14px,0)' },
          '70%': { clip: 'rect(8px,140px,15px,0)' },
          '75%': { clip: 'rect(14px,140px,14px,0)' },
          '80%': { clip: 'rect(12px,140px,19px,0)' },
          '85%': { clip: 'rect(2px,140px,14px,0)' },
          '90%': { clip: 'rect(12px,140px,5px,0)' },
          '95%': { clip: 'rect(7px,140px,1px,0)' },
          to: { clip: 'rect(19px,140px,2px,0)' },
        },
      },
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
