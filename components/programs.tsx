'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { programs } from '@/content/site'
import { Reveal } from './reveal'
import { Arrow, Squiggle } from './doodles'

/**
 * The Peekaboo programs, as a horizontal rail of big cards — every cohort
 * and pilot so far, ending with the two programs running now. Each card
 * follows the big Peekaboo card design: solid colour, the brand ribbon as
 * texture, a pill tag, a small meta table and one clear action. The rail
 * scrolls natively (swipe, trackpad, wheel) and snaps card by card; the
 * buttons under it drive the same scroll for mouse users.
 */

// Accent per card, written out in full — Tailwind only ships a class it
// can see as a whole string, so `bg-${x}` would silently produce nothing.
const accents = [
  {
    card: 'bg-brand text-white',
    ribbon: 'text-white/15',
    pill: 'bg-white text-brand',
    body: 'text-white/75',
    rule: 'border-white/20',
    metaKey: 'text-white/50',
    cta: 'bg-mint text-ink',
  },
  {
    card: 'bg-magenta text-ink',
    ribbon: 'text-white/30',
    pill: 'bg-white text-magenta-ink',
    body: 'text-ink/70',
    rule: 'border-ink/15',
    metaKey: 'text-ink/50',
    cta: 'bg-white text-ink',
  },
  {
    card: 'bg-mint text-ink',
    ribbon: 'text-white/40',
    pill: 'bg-white text-mint-ink',
    body: 'text-ink/70',
    rule: 'border-ink/15',
    metaKey: 'text-ink/50',
    cta: 'bg-ink text-white',
  },
] as const

export function Programs() {
  const rail = useRef<HTMLDivElement>(null)

  function scroll(dir: 1 | -1) {
    const el = rail.current
    if (!el) return
    // one card (plus the gap) per click
    const card = el.querySelector<HTMLElement>('[data-card]')
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 480) + 20), behavior: 'smooth' })
  }

  return (
    <section id="programs" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-magenta-ink text-white">{programs.kicker}</span>
            <h2 className="section-title mt-5">
              {/* black-on-pink, like the IdeaFest name labels */}
              The Peekaboo <span className="tag tag-stamp bg-magenta text-ink">programs.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[42ch] text-lg leading-relaxed text-ink-60">{programs.intro}</p>
          </Reveal>
        </div>

        {/* ── The rail ─────────────────────────────────────────────────── */}
        <Reveal delay={100}>
          {/* full-bleed: the rail spans the whole viewport so cards slide
              off the screen edge instead of being cut at the container.
              The padding puts the first card back on the content grid,
              and scroll-padding keeps the snap aligned with it. */}
          <div
            ref={rail}
            className="mx-[calc(50%-50vw)] mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50vw-50%+1.25rem)] pb-2 scroll-px-[calc(50vw-50%+1.25rem)] sm:mt-16 sm:px-[calc(50vw-50%+2rem)] sm:scroll-px-[calc(50vw-50%+2rem)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {programs.cards.map((card, i) => {
              const a = accents[i % accents.length]
              return (
                <article
                  data-card
                  key={card.name}
                  className={`group relative flex w-[86vw] max-w-[30rem] shrink-0 snap-start flex-col overflow-hidden rounded-[2rem] p-7 sm:w-[30rem] sm:p-10 ${a.card}`}
                >
                  <Squiggle
                    className={`pointer-events-none absolute -right-16 -top-12 h-auto w-[22rem] transition-transform duration-700 group-hover:scale-105 ${a.ribbon}`}
                  />

                  <div className="relative flex h-full flex-col">
                    <span className={`pill w-fit -rotate-1 ${a.pill}`}>{card.tag}</span>

                    <h3 className="mt-6 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                      {card.name}
                    </h3>
                    <p className={`mt-5 max-w-[40ch] leading-relaxed ${a.body}`}>
                      {card.description}
                    </p>

                    <dl className="mt-7">
                      {card.meta.map((m) => (
                        <div
                          key={m.k}
                          className={`flex items-baseline justify-between gap-6 border-t py-2.5 last:border-b ${a.rule}`}
                        >
                          <dt
                            className={`text-xs font-semibold uppercase tracking-[0.14em] ${a.metaKey}`}
                          >
                            {m.k}
                          </dt>
                          <dd className="text-right text-sm">{m.v}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-auto pt-8">
                      <Link
                        href={card.cta.href}
                        className={`btn-pop inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.95rem] font-semibold ${a.cta}`}
                      >
                        {card.cta.label}
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Reveal>

        {/* ── Prev / next ──────────────────────────────────────────────── */}
        <Reveal delay={140}>
          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous program"
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next program"
              onClick={() => scroll(1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Arrow />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
