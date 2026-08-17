/**
 * Takes screenshots of the site so a change can be checked without
 * clicking through it by hand.
 *
 *   1. run the site:   pnpm dev
 *   2. in another tab: pnpm shots
 *
 * Images land in .shots/ (which git ignores).
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const BASE = process.env.BASE ?? 'http://localhost:3000'
const OUT = '.shots'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()

const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await desktop.goto(BASE, { waitUntil: 'networkidle' })
// let every scroll-reveal fire before capturing the full page
await desktop.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 600) {
    // 'instant' is required — the page sets scroll-behavior:smooth, which
    // makes a plain scrollTo animate and never arrive within the wait below
    window.scrollTo({ top: y, behavior: 'instant' })
    await new Promise((r) => setTimeout(r, 120))
  }
  window.scrollTo(0, 0)
})
await desktop.waitForTimeout(900)
await desktop.screenshot({ path: `${OUT}/home-desktop.png`, fullPage: true })
await desktop.screenshot({ path: `${OUT}/home-fold.png` })

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } })
await mobile.goto(BASE, { waitUntil: 'networkidle' })
await mobile.evaluate(async () => {
  for (let y = 0; y < document.body.scrollHeight; y += 500) {
    // 'instant' is required — the page sets scroll-behavior:smooth, which
    // makes a plain scrollTo animate and never arrive within the wait below
    window.scrollTo({ top: y, behavior: 'instant' })
    await new Promise((r) => setTimeout(r, 100))
  }
  window.scrollTo(0, 0)
})
await mobile.waitForTimeout(900)
await mobile.screenshot({ path: `${OUT}/home-mobile.png`, fullPage: true })

await browser.close()
console.log(`Screenshots written to ${OUT}/`)
