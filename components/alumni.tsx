'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { alumni } from '@/content/site'
import { Reveal } from './reveal'
import { Arrow } from './doodles'

const accent = {
  magenta: {
    text: 'text-magenta-ink',
    tile: 'bg-magenta/12',
    rule: 'bg-magenta/35',
  },
  mint: { text: 'text-mint-ink', tile: 'bg-mint/16', rule: 'bg-mint/40' },
} as const

/**
 * Alumni work as a horizontal rail of zine-cover cards — same mechanics
 * as the programs rail: full-bleed, native scroll with snap, prev/next
 * buttons for mouse users.
 *
 * The tiles are typographic placeholders. To use real photographs, drop
 * them in /public and swap the coloured <div> for a <next/image>.
 */
export function Alumni() {
  const rail = useRef<HTMLDivElement>(null)

  function scroll(dir: 1 | -1) {
    const el = rail.current
    if (!el) return
    // one card (plus the gap) per click
    const card = el.querySelector<HTMLElement>('[data-card]')
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 352) + 20), behavior: 'smooth' })
  }

  return (
    <section id="alumni" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-magenta-ink text-white">{alumni.kicker}</span>
            <h2 className="section-title mt-5">
              The work <span className="tag tag-stamp bg-mint text-ink">speaks first.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-lg leading-relaxed text-ink-60">{alumni.body}</p>
            <Link
              href={alumni.cta.href}
              className="link-draw mt-4 inline-block text-[0.95rem] font-semibold text-brand"
            >
              {alumni.cta.label} <Arrow />
            </Link>
          </Reveal>
        </div>

        {/* ── The rail — full-bleed, like the programs rail ────────────── */}
        <Reveal delay={100}>
          <div
            ref={rail}
            className="mx-[calc(50%-50vw)] mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[calc(50vw-50%+1.25rem)] pb-2 pt-2 scroll-px-[calc(50vw-50%+1.25rem)] sm:mt-14 sm:gap-6 sm:px-[calc(50vw-50%+2rem)] sm:scroll-px-[calc(50vw-50%+2rem)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {alumni.works.map((w, i) => {
              const c = accent[w.accent]
              return (
                <div data-card key={w.title} className="w-[16rem] shrink-0 snap-start sm:w-[22rem]">
                  <Link href={alumni.cta.href} className="group block">
                    {/* Set like a zine cover, so the tile reads as a designed
                        object rather than an empty image slot. To use real
                        photography instead, drop the file in /public and put a
                        <next/image> behind this content. */}
                    <div
                      className={`relative flex aspect-4/5 flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg] ${c.tile}`}
                    >
                      <span className="flex items-center justify-between gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink-60">
                        {w.kind}
                        <span className="font-semibold text-ink-30">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </span>

                      <span className={`mt-5 mb-5 block h-px w-full ${c.rule}`} aria-hidden />

                      <span className="text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-[2.6rem]">
                        {w.title}
                      </span>

                      <span
                        aria-hidden
                        className={`marker mt-auto self-end text-8xl leading-none opacity-15 ${c.text}`}
                      >
                        {w.title.charAt(0)}
                      </span>
                    </div>
                    <div className="mt-3.5 flex items-baseline justify-between gap-4 px-1">
                      {/* the highlighter name-chip from the team sheets —
                          it straightens up when you hover the card */}
                      <span className="tag bg-mint px-1.5 text-[0.9rem] font-medium text-ink transition-transform duration-300 ease-[var(--ease-pop)] group-hover:rotate-0">
                        {w.author}
                      </span>
                      <span className="text-xs text-ink-30">{w.cohort}</span>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </Reveal>

        {/* ── Prev / next ──────────────────────────────────────────────── */}
        <Reveal delay={140}>
          <div className="mt-7 flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous work"
              onClick={() => scroll(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              <Arrow className="rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next work"
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
