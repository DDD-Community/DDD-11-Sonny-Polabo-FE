export const getAngle = (point: { x: number; y: number }) => {
  const { x, y } = point
  if (x < 0 && y > 0) {
    return 180 + (Math.atan2(y, x) * 180) / Math.PI
  }
  if (x > 0 && y < 0) {
    return 360 + (Math.atan2(y, x) * 180) / Math.PI
  }
  if (x < 0 && y < 0) {
    return 180 + (Math.atan2(y, x) * 180) / Math.PI
  }
  return (Math.atan(y / x) * 180) / Math.PI
}

export function isPointInsideElement(
  point: { x: number; y: number },
  element: HTMLElement | null,
) {
  if (!element) return false
  const rect = element.getBoundingClientRect()
  return (
    point.x > rect.left &&
    point.x < rect.right &&
    point.y > rect.top &&
    point.y < rect.bottom
  )
}
