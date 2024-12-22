export const getImageWidthHeight = (
  imageUrl: string,
): Promise<[number, number]> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = imageUrl

    img.onload = () => {
      URL.revokeObjectURL(imageUrl) // 메모리 누수 방지
      resolve([img.width, img.height])
    }

    img.onerror = () => {
      reject(new Error('Image load failed'))
    }
  })
}

export const downloadImage = (imageUrl: string, imageName = 'file') => {
  const a = document.createElement('a')
  a.href = imageUrl
  a.download = `${imageName}.png`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(imageUrl)
}
