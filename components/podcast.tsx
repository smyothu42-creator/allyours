import Link from 'next/link'
import { podcast } from '@/content/site'
import { Reveal } from './reveal'
import { EpisodeList } from './episode-list'
import { Play } from './doodles'

/**
 * Kept deliberately separate from the Programs section. "Peekaboo by
 * allyours" is the podcast's full name, and the Facebook page is mostly
 * podcast video — so mixing it in with events and applications would send
 * podcast traffic to the wrong place.
 */
export function Podcast() {
  return (
    <section id="podcast" className="relative overflow-hidden bg-paper-2 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="pill -rotate-1 bg-brand text-white">{podcast.kicker}</span>
              <h2 className="section-title mt-5">{podcast.title}</h2>
              <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-60">
                {podcast.body}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={podcast.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-[0.6rem] text-ink">
                    <Play />
                  </span>
                  {podcast.primary.label}
                </Link>
                <Link
                  href={podcast.secondary.href}
                  className="link-draw px-2 py-4 text-[0.95rem] text-ink-60 transition-colors hover:text-ink"
                >
                  {podcast.secondary.label}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Episode list — hovering a row floats its thumbnail card ----- */}
          <div className="lg:col-span-5 lg:col-start-8">
            <EpisodeList episodes={podcast.episodes} href={podcast.secondary.href} />
          </div>
        </div>
      </div>
    </section>
  )
}
