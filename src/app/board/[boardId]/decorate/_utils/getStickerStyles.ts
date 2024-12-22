export const getStickerStyles = () => {
  const preview = document.querySelector('#preview')
  const stickers = Array.from(document.querySelectorAll('.sticker'))
  const previewRect = preview!.getBoundingClientRect()

  const ratio = 1080 / previewRect.width

  return stickers.map((sticker) => {
    const stickerStyle = sticker.getBoundingClientRect()
    const { width } = stickerStyle
    const { height } = stickerStyle
    const x = stickerStyle.left - previewRect.left
    const y = stickerStyle.top - previewRect.top

    const computedStyle = window.getComputedStyle(sticker)
    const { transform } = computedStyle
    let angle: number

    if (transform !== 'none') {
      const values = transform.match(/matrix\(([^)]+)\)/)?.[1].split(', ')
      const a = parseFloat(values![0])
      const b = parseFloat(values![1])

      angle = Math.round(Math.atan2(b, a) * (180 / Math.PI))
    } else {
      angle = 0
    }

    return {
      width: Math.round(width * ratio),
      height: Math.round(height * ratio),
      x: Math.round(x * ratio),
      y: Math.round(y * ratio),
      angle: Math.round(angle),
      file: (sticker as HTMLElement).dataset.file,
    }
  })
}
