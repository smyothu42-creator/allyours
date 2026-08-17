import Link from 'next/link'
import { behind } from '@/content/site'
import { Reveal } from './reveal'

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

        <dl className="mt-16 grid gap-px border-t border-rule sm:mt-20 md:grid-cols-2">
          {behind.blocks.map((b, i) => (
            <Reveal key={b.k} delay={i * 90}>
              <div className="group h-full border-b border-rule py-10 pr-8 md:odd:border-r md:odd:pr-12 md:even:pl-12">
                <div className="flex items-baseline gap-4">
                  {/* solid circled numbers, straight off the type-specimen card */}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-paper">{i + 1}</span>
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{b.k}</h3>
                </div>
                <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-ink-60">{b.v}</p>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={120}>
          <Link
            href={behind.cta.href}
            className="group mt-14 inline-flex items-center gap-4 text-3xl tracking-[-0.035em] sm:text-4xl"
          >
            <span className="link-draw">{behind.cta.label}</span>
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5 group-hover:rotate-[8deg]">
              →
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
