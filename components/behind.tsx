import Link from 'next/link'
import { behind } from '@/content/site'
import { Reveal } from './reveal'
import { Arrow } from './doodles'

/** Mission, vision, story, culture — the trust-building block. */
export function Behind() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <Reveal>
          <span className="pill -rotate-1 bg-mint text-ink">{behind.kicker}</span>
          <h2 className="section-title mt-5 max-w-[14ch]">
            Why we do it{' '}
            <span className="marker text-brand">this way.</span>
          </h2>
        </Reveal>

        <dl className="mt-16 grid border-t border-rule sm:mt-20 md:grid-cols-2">
          {behind.blocks.map((b, i) => {
            // The column has to come from the index, not from CSS odd:/even: —
            // <Reveal> wraps each cell, so every cell is its parent's only
            // child and :nth-child(odd) would match all four, hanging a stray
            // rule off the right-hand column.
            const leftColumn = i % 2 === 0
            return (
              <Reveal
                key={b.k}
                delay={i * 90}
                className={`group border-b border-rule py-11 sm:py-14 ${
                  leftColumn ? 'md:border-r md:pr-14' : 'md:pl-14'
                }`}
              >
                <dt className="flex items-center gap-4">
                  {/* solid circled numbers, straight off the type-specimen card */}
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-[0.7rem] font-bold tracking-[0.02em] text-paper transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{b.k}</span>
                </dt>
                {/* pl-13 = the badge (h-9) plus the gap-4, so the sentence
                    starts on the same edge as the word above it */}
                <dd className="mt-4 max-w-[46ch] pl-13 text-lg leading-relaxed text-ink-60">
                  {b.v}
                </dd>
              </Reveal>
            )
          })}
        </dl>

        <Reveal delay={120}>
          <Link
            href={behind.cta.href}
            className="group mt-14 inline-flex items-center gap-4 text-3xl tracking-[-0.035em] sm:text-4xl"
          >
            <span className="link-draw">{behind.cta.label}</span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5 group-hover:rotate-[8deg]">
              <Arrow />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
