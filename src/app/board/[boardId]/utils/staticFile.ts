'use server'

import path from 'path'
import fs from 'fs'
import { StickerMenu } from '@/types'

export const getStickerFile = async (menu: StickerMenu) => {
  const stickersDirectory = path.join(process.cwd(), `public/stickers/${menu}`)

  try {
    const stickerFiles = fs.readdirSync(stickersDirectory)
    const svgFiles = stickerFiles
      .filter((file) => file.endsWith('.svg') || file.endsWith('.png'))
      .sort((a, b) => {
        const numA = parseInt(a.split('-')[1].split('.')[0], 10)
        const numB = parseInt(b.split('-')[1].split('.')[0], 10)
        return numA - numB
      })

    return svgFiles
  } catch (error) {
    return [] // Return an empty array if there's an error or no files
  }
}
