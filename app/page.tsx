import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Programs } from '@/components/programs'
// import { Podcast } from '@/components/podcast' — section hidden for now
import { Behind } from '@/components/behind'
import { Impact } from '@/components/impact'
// import { Alumni } from '@/components/alumni' — section hidden for now
import { Partner } from '@/components/partner'
import { Newsletter } from '@/components/newsletter'

/**
 * The order below is the argument the page makes, in sequence:
 *
 *   who we are  →  what you can join  →  what we sound like  →
 *   why we exist  →  what your money does  →  proof it works  →
 *   how an organisation joins  →  stay in touch
 *
 * Apply (Goal 1) is reachable in the hero, the programs block and the
 * header. Donate (Goal 2) in the hero, the impact block and the header.
 */
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Marquee />
        <Programs />
        {/* <Podcast /> — hidden for now, put back when the podcast page is ready */}
        <Behind />
        <Impact />
        {/* <Alumni /> — hidden for now, put back with the alumni showcase */}
        <Partner />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  )
}
