export const FILTERS = {
  NORMAL: 'none',
  POLAROID:
    'sepia(0.2) contrast(1.3) brightness(1.0) saturate(1.2) blur(0.5px)',
  VINTAGE:
    'sepia(0.4) contrast(1.1) brightness(0.9) saturate(0.8) hue-rotate(-20deg) blur(0.6px)',
} as const

export const ONE_LINE_MSG_MAX_LEN = 20
