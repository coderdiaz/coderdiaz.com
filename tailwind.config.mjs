import { orange } from '@radix-ui/colors';
import { stone, rose, blue, lime } from 'tailwindcss/colors';

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
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx}'],
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
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"','"Segoe UI Emoji"', 'Segoe UI Symbol','"Noto Color Emoji"'],
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
      }
    },
  },
  plugins: [],
}
