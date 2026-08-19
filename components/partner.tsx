import Link from 'next/link'
import { partner } from '@/content/site'
import { Reveal } from './reveal'
import { Arrow } from './doodles'

/**
 * Goal 2, the organisation half. Partners want three things before they
 * talk to you: what they get, who else is already in, and proof you
 * report back honestly. All three are on screen at once.
 */
export function Partner() {
  return (
    <section id="partner" className="bg-paper-2 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-brand text-white">{partner.kicker}</span>
            <h2 className="section-title mt-5 max-w-[15ch]">
              Put your name behind the{' '}
              <span className="marker text-brand">next cohort.</span>
            </h2>
            <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-60">{partner.body}</p>

            <Link
              href={partner.cta.href}
              className="btn-pop group mt-9 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
            >
              {partner.cta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
            </Link>
          </Reveal>

          <div id="benefits" className="lg:col-span-5 lg:col-start-8">
            <dl>
              {partner.benefits.map((b, i) => (
                <Reveal key={b.k} delay={i * 80}>
                  <div className="border-t border-rule py-6 last:border-b">
                    <dt className="flex items-baseline gap-3 text-xl tracking-[-0.02em]">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-[0.65rem] font-bold text-paper">{i + 1}</span>
                      {b.k}
                    </dt>
                    <dd className="mt-2 pl-8 leading-relaxed text-ink-60">{b.v}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>

        {/* Current partners + transparency ----------------------------- */}
        <Reveal delay={120}>
          <div className="mt-20 grid gap-10 border-t border-rule pt-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <span className="pill -rotate-1 bg-mint text-ink">Current partners</span>
              {/* Logo slots. Drop a real logo image into each box when you
                  have one — the empty frames read as "coming" rather than
                  as a list of words. */}
              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {partner.current.map((p) => (
                  <li
                    key={p}
                    className="grid h-20 place-items-center rounded-xl border border-rule bg-card px-4 text-center text-sm text-ink-30 transition-colors hover:border-ink/25 hover:text-ink-60"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div id="reports" className="lg:col-span-5 lg:col-start-8">
              <span className="pill -rotate-1 bg-magenta-ink text-white">Transparency</span>
              <ul className="mt-6">
                {partner.reports.map((r) => (
                  <li key={r.label}>
                    <Link
                      href={r.href}
                      className="group flex items-center justify-between gap-4 border-t border-rule py-4 last:border-b"
                    >
                      <span className="text-[0.95rem]">{r.label}</span>
                      <span className="text-ink-30 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-brand">
                        <Arrow className="rotate-90" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
