import Link from 'next/link'
import { impact } from '@/content/site'
import { Reveal } from './reveal'
import { CountUp } from './count-up'
import { Arrow } from './doodles'

/**
 * Goal 2, the money half. The stats come before the ask — the numbers
 * make the argument, then the button collects.
 */
export function Impact() {
  return (
    <section id="donate" className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-8 sm:py-32">
      {/* the repeated-word wallpaper from the moodboard's dark posters —
          barely-there outline type behind the heading */}
      <div
        aria-hidden
        className="drift-on-scroll pointer-events-none absolute -top-4 left-0 hidden select-none whitespace-nowrap text-[9rem] font-extrabold leading-none tracking-[-0.025em] text-transparent lg:block"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.07)' }}
      >
        {Array(6).fill(impact.backdropWord).join(' ')}
      </div>
      <div className="relative mx-auto max-w-[110rem]">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-butter text-ink">{impact.kicker}</span>
            <h2 className="section-title mt-5 max-w-[16ch]">
              What your money <span className="tag tag-stamp bg-butter text-ink">actually does.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8 lg:self-end">
            <p className="max-w-[42ch] text-lg leading-relaxed text-white/65">{impact.body}</p>
          </Reveal>
        </div>

        {/* Stats ------------------------------------------------------- */}
        <dl className="mt-16 grid grid-cols-2 border-t border-white/15 sm:mt-20 lg:grid-cols-4">
          {impact.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div
                className={`h-full border-b border-white/15 py-8 pr-6 ${
                  i % 2 === 1 ? 'border-l border-white/15 pl-6' : ''
                } lg:border-l lg:pl-6 ${i === 0 ? 'lg:border-l-0 lg:pl-0' : ''}`}
              >
                <dt className="text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
                  <CountUp value={s.value} />
                </dt>
                <dd className="mt-3">
                  <span className="block text-[0.95rem]">{s.label}</span>
                  <span className="mt-0.5 block text-sm text-white/45">{s.sub}</span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Link
              href={impact.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pop group inline-flex items-center gap-3 rounded-full bg-butter px-8 py-4 text-[0.95rem] font-bold text-ink [--pop-shadow:rgba(255,255,255,0.9)]"
            >
              {impact.primary.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </Link>
            <Link
              href={impact.secondary.href}
              className="link-draw px-2 py-4 text-[0.95rem] text-white/60 transition-colors hover:text-paper"
            >
              {impact.secondary.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
