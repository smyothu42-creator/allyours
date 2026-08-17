import Link from 'next/link'
import { alumni } from '@/content/site'
import { Reveal } from './reveal'

const accent = {
  magenta: {
    text: 'text-magenta-ink',
    tile: 'bg-magenta/12',
    dot: 'bg-magenta',
    rule: 'bg-magenta/35',
  },
  mint: { text: 'text-mint-ink', tile: 'bg-mint/16', dot: 'bg-mint', rule: 'bg-mint/40' },
} as const

/**
 * A continuously scrolling strip of alumni work — the "scrolling images"
 * idea from the inspiration board. It pauses when you hover so you can
 * actually read a card, and stops entirely for reduced-motion users.
 *
 * The tiles are typographic placeholders. To use real photographs, drop
 * them in /public and swap the coloured <div> for a <next/image>.
 */
export function Alumni() {
  const strip = [...alumni.works, ...alumni.works] // duplicated for a seamless loop

  return (
    <section id="alumni" className="overflow-hidden py-24 sm:py-32">
      <div className="mx-auto mb-14 max-w-[110rem] px-5 sm:px-8">
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
              {alumni.cta.label} →
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="strip relative">
        {/* soft fade at both edges so the strip runs off the page rather than stopping */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper to-transparent sm:w-32"
        />

        <ul className="strip-track flex w-max gap-5 px-5 sm:gap-6 sm:px-8">
          {strip.map((w, i) => {
            const c = accent[w.accent]
            return (
              <li key={i} className="w-[16rem] shrink-0 sm:w-[22rem]">
                <Link href={alumni.cta.href} className="group block">
                  {/* Set like a zine cover, so the tile reads as a designed
                      object rather than an empty image slot. To use real
                      photography instead, drop the file in /public and put a
                      <next/image> behind this content. */}
                  <div
                    className={`relative flex aspect-4/5 flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg] ${c.tile}`}
                  >
                    <span className="flex items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-ink-60">
                      <span className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                        {w.kind}
                      </span>
                      <span className="font-mono text-ink-30">
                        {String((i % alumni.works.length) + 1).padStart(2, '0')}
                      </span>
                    </span>

                    <span
                      className={`mt-5 mb-5 block h-px w-full ${c.rule}`}
                      aria-hidden
                    />

                    <span className="text-3xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-[2.6rem]">
                      {w.title}
                    </span>

                    <span
                      aria-hidden
                      className={`mt-auto self-end text-8xl leading-none opacity-15 ${c.text} marker`}
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
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
