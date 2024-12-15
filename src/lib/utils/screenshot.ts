export const takeScreenshot = async (body: BodyInit) => {
  const res = await fetch(`/board/api/screenshot`, {
    method: 'POST',
    body,
  })

  if (!res.ok) {
    throw new Error('Failed to take screenshot')
  }

  const blob = await res.blob()
  return URL.createObjectURL(blob)
}

export const downloadScreenshot = (blobUrl: string, filename = 'image.png') => {
  const a = document.createElement('a')
  a.href = blobUrl
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
