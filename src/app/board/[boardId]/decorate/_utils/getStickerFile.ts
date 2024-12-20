'use server'

import path from 'path'
import fs from 'fs'
import { StickerMenu } from '@/types'

export const getStickerFile = async (menu: StickerMenu) => {
  const stickersDirectory = path.join(
    process.cwd(),
    `public/icons/stickers/${menu}`,
  )

  try {
    const stickerFiles = fs.readdirSync(stickersDirectory)
    return stickerFiles
      .filter((file) => file.endsWith('.svg') || file.endsWith('.png'))
      .sort((a, b) => {
        const numA = parseInt(a.split('-')[1].split('.')[0], 10)
        const numB = parseInt(b.split('-')[1].split('.')[0], 10)
        return numA - numB
      })
  } catch (error) {
    return []
  }
}
