import { NextResponse } from 'next/server'
import puppeteer, { Browser, Page } from 'puppeteer'
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

let browser: Browser | null = null

const initializeBrowser = async () => {
  browser = await puppeteer.launch({
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
}

const openPage = async () => {
  if (browser === null) {
    await initializeBrowser()
  }

  const page = await browser!.newPage()
  await page.setViewport({
    width: 1080,
    height: 1920,
  })
  return page
}

export async function POST(request: Request) {
  let page: Page | null = null
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

    page = await openPage()
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
      await page?.close()
    }
  }
}
