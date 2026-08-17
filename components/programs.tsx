import Link from 'next/link'
import { programs } from '@/content/site'
import { Reveal } from './reveal'
import { Squiggle, Fork, Bulb, Spiral } from './doodles'

/**
 * Accent per program, written out in full — Tailwind only ships a class it
 * can see as a whole string, so `text-${x}` would silently produce nothing.
 */
const accent = {
  brand: {
    text: 'text-brand',
    doodle: 'text-brand',
    tint: 'bg-brand/10',
  },
  magenta: {
    text: 'text-magenta-ink', // readable on the pale tint
    doodle: 'text-magenta', // decorative, so the bright value is fine
    tint: 'bg-magenta/12',
  },
  mint: {
    text: 'text-mint-ink',
    doodle: 'text-mint',
    tint: 'bg-mint/16',
  },
} as const

export function Programs() {
  const { peekaboo, specializations } = programs

  return (
    <section id="programs" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-magenta-ink text-white">{programs.kicker}</span>
            <h2 className="section-title mt-5">
              {/* black-on-pink, like the IdeaFest name labels */}
              One program. <span className="tag tag-stamp bg-magenta text-ink">Two ways in.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[42ch] text-lg leading-relaxed text-ink-60">{programs.intro}</p>
          </Reveal>
        </div>

        {/* ── Peekaboo: the parent, deliberately the biggest thing here ── */}
        <Reveal delay={100}>
          <article
            id={peekaboo.id}
            className="group relative mt-16 overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:mt-20 sm:p-12 lg:p-16"
          >
            {/* the marker loop again, this time as the card's own texture */}
            <Squiggle
              className="pointer-events-none absolute -right-20 -top-16 h-auto w-[26rem] text-white/15 transition-transform duration-700 group-hover:scale-105 sm:w-[32rem]"
              strokeWidth={9}
            />

            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <span className="pill -rotate-1 bg-white text-brand">{peekaboo.tag}</span>

                <h3 className="mt-7 text-6xl font-bold tracking-[-0.05em] sm:text-8xl lg:text-9xl">
                  {peekaboo.name}
                </h3>

                <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-white/75">
                  {peekaboo.description}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link
                    href={peekaboo.cta.href}
                    className="btn-pop group/btn inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-[0.95rem] font-semibold text-ink"
                  >
                    {peekaboo.cta.label}
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                      →
                    </span>
                  </Link>
                  {peekaboo.links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      className="link-draw px-2 py-4 text-[0.95rem] text-white/65 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <dl className="lg:col-span-4 lg:col-start-9 lg:self-end">
                {peekaboo.meta.map((m) => (
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

        {/* ── The branch, drawn by hand rather than ruled ─────────────── */}
        <Reveal className="relative hidden h-28 md:block">
          <Fork className="h-full w-full text-ink-30" strokeWidth={3} />
          {/* a hand-written aside, not a system label */}
          <span className="marker absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-paper px-3 text-xl text-ink-60">
            branches into
          </span>
        </Reveal>

        {/* the phone version of the same idea: a short tick, no fork */}
        <div aria-hidden className="relative h-14 md:hidden">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-rule" />
          <span className="marker absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-paper px-3 text-lg text-ink-60">
            branches into
          </span>
        </div>

        {/* ── The two specializations ────────────────────────────────── */}
        <div className="grid gap-5 md:grid-cols-2">
          {specializations.map((s, i) => {
            const c = accent[s.accent]
            const Doodle = i === 0 ? Spiral : Bulb
            return (
              <Reveal key={s.id} delay={i * 120} as="article">
                {/* borderless solid blocks, like the specimen cards — the
                    hover is a sticker-ish tilt rather than a border change */}
                <div
                  id={s.id}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-7 transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 hover:-rotate-[0.4deg] sm:p-10 ${c.tint}`}
                >
                  {/* the doodle shakes itself awake when you hover the card */}
                  <Doodle
                    className={`wiggle-on-hover pointer-events-none absolute right-7 top-7 h-16 w-16 opacity-60 ${c.doodle}`}
                  />

                  <span className={`pill w-fit bg-white ${c.text}`}>Specialization</span>

                  <h3 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                    {s.name}
                  </h3>
                  <p className="mt-5 max-w-[38ch] leading-relaxed text-ink-60">{s.description}</p>

                  <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                    {s.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href}
                          className="link-draw text-sm font-medium text-ink-60 transition-colors hover:text-ink"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={s.cta.href}
                    className={`mt-auto inline-flex w-fit items-center gap-2 pt-9 text-[0.95rem] font-semibold ${c.text}`}
                  >
                    {s.cta.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
