import { StickerStyle } from '@/types'

export const createQueryString = (
  searchParams: URLSearchParams,
  name: string,
  value: string,
): string => {
  const params = new URLSearchParams(searchParams.toString())
  params.set(name, value)

  return params.toString()
}

export const createPolaroidSearchParams = (
  polaroids: string[] | number[],
): string =>
  polaroids.map((id) => `polaroidIds=${encodeURIComponent(id)}`).join('&')

export const createStickerSearchParams = (stickers: StickerStyle[]): string =>
  stickers
    .map(
      ({ width, height, x, y, angle, file }) =>
        `stickers=${encodeURIComponent([width, height, x, y, angle, file].join(','))}`,
    )
    .join('&')
