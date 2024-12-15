import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer'

export async function POST(request: Request) {
  const body: { url: string; targetElementSelector: string } =
    await request.json()

  const url = `${process.env.URL}/${body.url}`

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({
    width: 1080,
    height: 1920,
  })

  try {
    await page.goto(url, { waitUntil: 'networkidle2' })

    const element = await page.$(body.targetElementSelector)
    const screenshotBuffer = await element?.screenshot()
    await browser.close()

    return new NextResponse(screenshotBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `inline; filename="screenshot.png"`,
      },
    })
  } catch (error) {
    console.log(error)
    await browser.close()
    return new NextResponse('Error taking screenshot', { status: 500 })
  }
}
