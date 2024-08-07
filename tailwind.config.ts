/* eslint-disable global-require */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        0: '#ffffff',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0a0a0a',
      },
      neutral: {
        500: '#737373',
      },
      positive: '#10b981',
      negative: '#ef4444',
      transparent: 'transparent',
      kakao: '#FEE500',
    },
    fontSize: {
      xxs: '10px',
      xs: '12px',
      sm: '16px',
      md: '18px',
      lg: '20px',
      xl: '24px',
      '2xl': '28px',
      '3xl': '32px',
      '4xl': '36px',
    },
    lineHeights: {
      xxs: '12px',
      xs: '16px',
      sm: '24px',
      md: '32px',
      lg: '40px',
      xl: '48px',
      '2xl': '52px',
    },
    fontWeight: {
      thin: '100',
      regular: '400',
      semiBold: '600',
      bold: '700',
    },
    letterSpacing: {
      tight: '-0.2px',
    },
    extend: {
      height: {
        dvh: 'var(--dynamic-vh)',
      },
      minHeight: {
        dvh: 'var(--dynamic-vh)',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard-variable)'],
        jooree: ['var(--font-jooree)'],
        hesom: ['var(--font-hesom)'],
      },
      keyframes: {
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'slide-left-delay': {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-200%)',
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translateX(-100%)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        'slide-right-delay': {
          '0%': {
            transform: 'translateX(-200%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
      animation: {
        'slide-left': 'slide-left 30s linear -30s infinite',
        'slide-left-delay': 'slide-left-delay 30s linear -15s infinite',
        'slide-right': 'slide-right 30s linear -30s infinite',
        'slide-right-delay': 'slide-right-delay 30s linear -15s infinite',
      },
      boxShadow: {
        header: '0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
        button: '0px 4px 8px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
