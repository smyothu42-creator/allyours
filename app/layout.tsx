import type { Metadata } from 'next'
import { Outfit, Caveat } from 'next/font/google'
import { BackToTop } from '@/components/back-to-top'
import './globals.css'

// Outfit is the closest widely-available match to the allyours wordmark —
// a geometric grotesk with soft, rounded terminals.
const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans-face',
  display: 'swap',
})

// The marker script, for the one emphasised word per headline — the same
// move the brand makes with "find your Spark".
const marker = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-marker-face',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'allyours — free creative programs for young people in Myanmar',
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
    <html lang="en" className={`${sans.variable} ${marker.variable}`}>
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
