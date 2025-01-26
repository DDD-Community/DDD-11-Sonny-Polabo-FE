import { Polaroid } from '@/types'

export const getClassesByLength = (length: number) => {
  if (length > 6) {
    return {
      width: 'w-[280px]',
      padding: 'px-[12px] pb-[12px] pt-[20px]',
      message: 'h-[25px] text-[24px] leading-[26px]',
      from: 'h-5 text-[20px] leading-[20px]',
    }
  }

  return {
    width: 'w-[304px]',
    padding: 'px-[14px] pb-[14px] pt-[22px]',
    message: 'h-[35px] text-[28px] leading-5',
    from: 'h-6 text-[23px] leading-4',
  }
}

export const groupPolaroidsByLength = (polaroids: Polaroid[]) => {
  const { length } = polaroids

  if (length < 1 || length > 9) {
    return [[]]
  }

  const result = []
  let groupSize

  if (length >= 2 && length < 7) {
    groupSize = 2
  } else if (length >= 6 && length < 10) {
    groupSize = 3
  } else {
    return [polaroids]
  }

  for (let i = 0; i < length; i += groupSize) {
    result.push(polaroids.slice(i, i + groupSize))
  }

  return result
}
