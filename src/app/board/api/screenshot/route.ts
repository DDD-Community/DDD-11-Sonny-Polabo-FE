import { NextResponse } from 'next/server'
import puppeteer, { Browser } from 'puppeteer'
import { StickerStyle } from '@/types'
import {
  createPolaroidSearchParams,
  createStickerSearchParams,
} from '@/lib/utils/query'

type RequestBodyType = {
  boardId: string
  polaroids: string[]
  stickers: StickerStyle[]
}

const initializeBrowser = async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--no-zygote',
      '--no-first-run',
      '--disable-default-apps',
    ],
    defaultViewport: null,
  })
  const page = await browser.newPage()
  await page.setViewport({
    width: 1080,
    height: 1920,
  })
  return { browser, page }
}

export async function POST(request: Request) {
  let browser: Browser | null = null

  try {
    const {
      boardId,
      polaroids,
      stickers = [],
    }: RequestBodyType = await request.json()

    const polaroidParams = createPolaroidSearchParams(polaroids)
    const stickerParams = createStickerSearchParams(stickers)
    const url = `${process.env.URL}/board/${encodeURIComponent(
      boardId,
    )}/screenshot?${polaroidParams}&${stickerParams}`

    const { browser: initializedBrowser, page } = await initializeBrowser()
    browser = initializedBrowser

    await page.goto(url, { waitUntil: 'networkidle2' })

    const element = await page.$('div#screenshot_target')
    if (!element) {
      throw new Error('Screenshot target element not found.')
    }

    const screenshotBuffer = await element.screenshot()

    return new NextResponse(screenshotBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `inline; filename="screenshot.png"`,
      },
    })
  } catch (error) {
    console.error('Error taking screenshot:', error)
    return new NextResponse('Error taking screenshot', { status: 500 })
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}
