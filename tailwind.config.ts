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
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard-variable)'],
        jooree: ['var(--font-jooree)'],
      },
    },
  },
  plugins: [],
}
export default config
