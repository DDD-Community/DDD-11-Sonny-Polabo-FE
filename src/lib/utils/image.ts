const rotateImageIfNeeded = (src: string) => {
  return new Promise<string>((resolve) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = src
    img.onload = () => {
      if (img.width > img.height) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (ctx) {
          canvas.width = img.height
          canvas.height = img.width

          ctx.translate(canvas.width / 2, canvas.height / 2)
          ctx.rotate((90 * Math.PI) / 180)
          ctx.drawImage(img, -img.width / 2, -img.height / 2)

          resolve(canvas.toDataURL())
        } else {
          resolve(src)
        }
      } else {
        resolve(src)
      }
    }
  })
}

export default rotateImageIfNeeded
