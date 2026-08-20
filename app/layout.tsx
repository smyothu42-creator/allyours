import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Caveat } from 'next/font/google'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

// Neue Haas Grotesk Display Pro | allyours' own licensed typeface, served
// from app/fonts as woff2 (about a quarter the size of the original TTFs).
//
// Only the four weights the site actually uses are shipped, and no italics,
// because nothing on the site is set in italic. Two of them cover a range:
// Medium carries 500 AND 600, because Neue Haas Medium (65) is optically
// about where a 600 sits — mapping it that way keeps buttons and pills at
// the weight they look right at. Black carries 800 and 900 so the display
// headlines get Black rather than a browser-faked bold.
const sans = localFont({
  src: [
    { path: './fonts/NeueHaasDisplay-Roman.woff2', weight: '400', style: 'normal' },
    { path: './fonts/NeueHaasDisplay-Medium.woff2', weight: '500 600', style: 'normal' },
    { path: './fonts/NeueHaasDisplay-Bold.woff2', weight: '700', style: 'normal' },
    { path: './fonts/NeueHaasDisplay-Black.woff2', weight: '800 900', style: 'normal' },
  ],
  variable: '--font-sans-face',
  display: 'swap',
})

// Ligema — the marker script, for the one emphasised word per headline, the
// same move the brand makes with "find your Spark".
const marker = localFont({
  src: './fonts/Ligema-Regular.woff2',
  variable: '--font-marker-face',
  display: 'swap',
  // next/font normally slips a metric-matched SYSTEM face in right behind
  // this one. That face has every glyph, so it would swallow the digits and
  // full stops before they could reach Caveat below — which is exactly what
  // made the About timeline years come out in a plain sans. Turning it off
  // lets the missing glyphs fall through to Caveat, where they belong.
  adjustFontFallback: false,
})

// Caveat sits UNDER Ligema in the stack, not beside it.
//
// The Ligema demo file contains 55 glyphs — the alphabet and a space, and
// nothing else. No full stops, no question marks, no digits. Most of the
// emphasised phrases on the site end in one ("this way.", "hear?"), and the
// About timeline is entirely years. Left alone, those characters would drop
// to the system cursive and land as Comic Sans next to a real script.
// Keeping Caveat as the fallback means anything Ligema lacks is still
// rendered by a handwriting face, so the register never breaks.
const markerFallback = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-marker-fallback',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'allyours | free creative programs for young people in Myanmar',
  description:
    'allyours runs Peekaboo: a free, cohort-based creative program in Myanmar, with ' +
    'specializations in Literature Arts and Design Studies. Apply, listen, or support the work.',
  openGraph: {
    title: 'allyours',
    description: 'Free creative programs for young people in Myanmar.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      // Next 16 no longer overrides `scroll-behavior: smooth` on route
      // changes by itself — this attribute opts back in, so navigating to
      // a page always starts at the top instantly (anchors stay smooth).
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${marker.variable} ${markerFallback.variable}`}
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {/* reading-progress line; invisible in browsers without scroll timelines */}
        <div aria-hidden className="scroll-progress" />
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
