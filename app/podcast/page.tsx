import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { EpisodeList } from '@/components/episode-list'
import { Arrow, Play, Squiggle } from '@/components/doodles'
import { podcastPage } from '@/content/site'

import { ComingSoon } from '@/components/coming-soon'

export const metadata = { title: 'Peekaboo by allyours | Podcast' }

// Flip to false when the full podcast page below is ready to show.
const COMING_SOON = true

export default function Page() {
  if (COMING_SOON) {
    return (
      <ComingSoon
        kicker="Podcast"
        title="This page is coming soon."
        emphasis="soon."
        body={
          'We are still building the podcast’s home here. The conversations are already out ' +
          'in the world, though. Listen while we finish up.'
        }
        linksLabel="listen on"
        links={podcastPage.listen.filter((l) => l.label === 'YouTube' || l.label === 'Spotify')}
      />
    )
  }
  return <PodcastPageFull />
}

/**
 * The podcast's own home, deliberately separate from the programs:
 * hero + where to listen → the latest episode, big → the archive →
 * the guests so far → suggest a guest.
 */
function PodcastPageFull() {
  const p = podcastPage

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
          <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[110rem]">
            <Reveal delay={80}>
              <h1 className="display max-w-[14ch]">
                {p.title.replace(p.emphasis, '')}
                <span className="tag tag-stamp bg-mint text-ink">{p.emphasis}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {p.body}
              </p>
              {/* where to listen */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="pill -rotate-1 bg-brand text-white">listen on</span>
                {p.listen.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-ink px-5 py-2 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Latest episode --------------------------------------------- */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <article className="group relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:p-12 lg:p-16">
                <Squiggle
                  className="pointer-events-none absolute -right-20 -top-16 h-auto w-[26rem] text-white/15 sm:w-[32rem]"
                />

                <div className="relative grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-8">
                    <span className="pill -rotate-1 bg-white text-brand">{p.latest.tag}</span>
                    <h2 className="mt-7 text-4xl font-extrabold tracking-[-0.025em] sm:text-6xl">
                      {p.latest.title}
                    </h2>
                    <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/75">
                      {p.latest.blurb}
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                      <Link
                        href={p.latest.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pop inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-[0.95rem] font-semibold text-ink"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-ink text-[0.6rem] text-mint">
                          <Play />
                        </span>
                        {p.latest.cta.label}
                      </Link>
                    </div>
                  </div>
                  <dl className="lg:col-span-3 lg:col-start-10 lg:self-end">
                    {[
                      { k: 'Episode', v: p.latest.no },
                      { k: 'Guest', v: p.latest.guest },
                      { k: 'Who they are', v: p.latest.guestRole },
                      { k: 'Length', v: p.latest.length },
                    ].map((m) => (
                      <div
                        key={m.k}
                        className="flex items-baseline justify-between gap-6 border-t border-white/20 py-3.5 last:border-b"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                          {m.k}
                        </dt>
                        <dd className="text-right text-[0.95rem]">{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Archive ---------------------------------------------------- */}
        <section className="bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <span className="pill -rotate-1 bg-magenta-ink text-white">Every episode</span>
                <h2 className="section-title mt-5">The archive.</h2>
                <p className="mt-6 max-w-[36ch] leading-relaxed text-ink-60">
                  Newest first. Every episode lives on the pages linked above. Nothing is
                  members-only.
                </p>
              </Reveal>
              {/* hovering a row floats its thumbnail card alongside the cursor */}
              <div className="lg:col-span-7 lg:col-start-6">
                <EpisodeList episodes={p.archive} href={p.listen[0].href} external />
              </div>
            </div>
          </div>
        </section>

        {/* Guests ----------------------------------------------------- */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <span className="pill -rotate-1 bg-mint text-ink">Guests</span>
              <h2 className="section-title mt-5">{p.guestsTitle}</h2>
            </Reveal>
            <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {p.guests.map((g, i) => {
                const tint = ['bg-brand/12', 'bg-magenta/14', 'bg-mint/18'][i % 3]
                const initialTone = ['text-brand', 'text-magenta-ink', 'text-mint-ink'][i % 3]
                return (
                  <Reveal key={`${g.name}-${i}`} as="li" variant="pop" delay={(i % 6) * 60} className="group">
                    {/* the arch-shaped portrait from the team-page references.
                        Drop a real photo in /public and put an <Image> here. */}
                    <div
                      className={`grid aspect-3/4 place-items-center rounded-t-full rounded-b-2xl transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-1.5 ${tint}`}
                    >
                      <span
                        aria-hidden
                        className={`wiggle-on-hover marker text-6xl opacity-30 ${initialTone}`}
                      >
                        {g.name.charAt(0)}
                      </span>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="tag bg-mint px-1.5 text-[0.9rem] font-medium text-ink">
                        {g.name}
                      </span>
                      <p className="mt-1.5 text-xs text-ink-60">{g.role}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Suggest a guest -------------------------------------------- */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-paper-2 px-7 py-14 text-center sm:px-14">
                <span aria-hidden className="tape left-8 top-5 hidden -rotate-6 sm:block" />
                <h2 className="section-title mx-auto max-w-[18ch]">
                  {p.suggest.title.replace('hear?', '')}
                  <span className="tag tag-stamp bg-brand text-white">hear?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-[40ch] leading-relaxed text-ink-60">
                  {p.suggest.body}
                </p>
                <Link
                  href={p.suggest.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop mt-8 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
                >
                  {p.suggest.cta.label}
                  <span><Arrow /></span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
