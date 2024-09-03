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
      reject(new Error(imageUrl))
    }
  })
}
