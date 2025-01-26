export const ensureArray = <T>(value: T | T[]) => {
  if (Array.isArray(value)) {
    return value
  }

  if (value === null || value === undefined) {
    return []
  }

  return [value]
}
