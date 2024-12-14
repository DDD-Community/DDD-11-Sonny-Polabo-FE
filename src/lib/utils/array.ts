export const ensureArray = <T>(value: T | T[]) => {
  if (Array.isArray(value)) {
    return value
  }

  return [value]
}
