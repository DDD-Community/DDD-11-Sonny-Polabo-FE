const rotateImageIfNeeded = (file: File): Promise<File> => {
  return new Promise<File>((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    const src = URL.createObjectURL(file)
    img.src = src

    img.onload = () => {
      URL.revokeObjectURL(src) // 메모리 누수 방지

      if (img.width > img.height) {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (ctx) {
          canvas.width = img.height
          canvas.height = img.width

          ctx.translate(canvas.width / 2, canvas.height / 2)
          ctx.rotate((90 * Math.PI) / 180)
          ctx.drawImage(img, -img.width / 2, -img.height / 2)

          canvas.toBlob((blob) => {
            if (blob) {
              const rotatedFile = new File([blob], file.name, {
                type: file.type,
              })
              resolve(rotatedFile)
            } else {
              reject(new Error('Canvas toBlob failed'))
            }
          }, file.type)
        } else {
          reject(new Error('Canvas context is not available'))
        }
      } else {
        resolve(file)
      }
    }

    img.onerror = () => {
      reject(new Error('Image load failed'))
    }
  })
}

export default rotateImageIfNeeded
