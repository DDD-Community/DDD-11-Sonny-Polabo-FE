export const copyToClipboard = (target: string): Promise<void> => {
  return navigator.clipboard.writeText(target)
}
