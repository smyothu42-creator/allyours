import Link from 'next/link'
import { partner } from '@/content/site'
import { Reveal } from './reveal'
import { Arrow } from './doodles'

// each benefit card gets its own accent from the brand palette
const benefitLooks = [
  { chip: 'bg-brand text-white', rule: 'bg-brand/25' },
  { chip: 'bg-magenta-ink text-white', rule: 'bg-magenta/35' },
  { chip: 'bg-mint text-ink', rule: 'bg-mint/45' },
  { chip: 'bg-ink text-paper', rule: 'bg-ink/15' },
] as const

/**
 * Goal 2, the organisation half. Partners want three things before they
 * talk to you: what they get, who else is already in, and proof you
 * report back honestly. All three are on screen at once.
 *
 * Everything sits on the pale-blue board as white paper — benefit note
 * cards with the flat offset shadow, then two sheets for the partner
 * slots and the reports.
 */
export function Partner() {
  return (
    <section id="partner" className="bg-paper-2 px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <span className="pill -rotate-1 bg-brand text-white">{partner.kicker}</span>
            <h2 className="section-title mt-5 max-w-[15ch]">
              Put your name behind the{' '}
              <span className="tag tag-stamp bg-brand text-white">next cohort.</span>
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

          {/* What partners get — note cards pinned to the board */}
          <div id="benefits" className="lg:col-span-6 lg:col-start-7">
            <dl className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {partner.benefits.map((b, i) => {
                const look = benefitLooks[i % benefitLooks.length]
                return (
                  <Reveal key={b.k} variant="pop" delay={i * 80}>
                    <div className="group h-full rounded-2xl bg-card p-6 shadow-[0.35rem_0.35rem_0_rgba(16,16,20,0.06)] transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 hover:rotate-[-0.4deg] sm:p-7">
                      <dt className="flex items-center gap-3">
                        <span
                          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[0.65rem] font-bold ${look.chip}`}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xl font-bold tracking-[-0.02em]">{b.k}</span>
                      </dt>
                      <span className={`mt-4 block h-px w-full ${look.rule}`} aria-hidden />
                      <dd className="mt-4 text-[0.95rem] leading-relaxed text-ink-60">{b.v}</dd>
                    </div>
                  </Reveal>
                )
              })}
            </dl>
          </div>
        </div>

        {/* Current partners + transparency — two paper sheets ------------ */}
        <div className="mt-16 grid gap-5 sm:mt-20 lg:grid-cols-12">
          <Reveal delay={80} className="lg:col-span-7">
            <div className="h-full rounded-[2rem] bg-card p-7 shadow-[0.35rem_0.35rem_0_rgba(16,16,20,0.06)] sm:p-9">
              <span className="pill -rotate-1 bg-mint text-ink">Current partners</span>
              {/* Logo slots. Drop a real logo image into each box when you
                  have one — the empty frames read as "coming" rather than
                  as a list of words. */}
              <ul className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {partner.current.map((p) => (
                  <li
                    key={p}
                    className="grid h-20 place-items-center rounded-xl border-2 border-dashed border-rule px-4 text-center text-sm text-ink-30 transition-colors hover:border-brand/40 hover:text-ink-60"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-ink-30">Your logo could sit here next cohort.</p>
            </div>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-5">
            <div id="reports" className="h-full rounded-[2rem] bg-card p-7 shadow-[0.35rem_0.35rem_0_rgba(16,16,20,0.06)] sm:p-9">
              <span className="pill -rotate-1 bg-magenta-ink text-white">Transparency</span>
              <p className="mt-5 max-w-[36ch] text-[0.95rem] leading-relaxed text-ink-60">
                Every cohort ends with a written report. Read what past funding did:
              </p>
              <ul className="mt-4">
                {partner.reports.map((r) => (
                  <li key={r.label}>
                    <Link
                      href={r.href}
                      className="group flex items-center justify-between gap-4 border-t border-rule py-4 last:border-b"
                    >
                      <span className="text-[0.95rem] font-semibold">{r.label}</span>
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-paper-2 text-ink-60 transition-all duration-300 ease-[var(--ease-pop)] group-hover:translate-y-0.5 group-hover:bg-brand group-hover:text-white">
                        <Arrow className="rotate-90" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
