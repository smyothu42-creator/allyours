import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ApplyForm } from '@/components/apply-form'
import { EventList } from '@/components/event-list'
import { Arrow, Squiggle } from '@/components/doodles'
import { programsPage } from '@/content/site'

export const metadata = { title: 'Programs | allyours' }

/**
 * The full program page: Peekaboo — what it is, who it is for, the core
 * of it → events & showcase (#events, where each program opens in a
 * pop-up) → the application (#apply, Goal 1's conversion point) → FAQ.
 */
export default function Page() {
  const p = programsPage

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
          <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[110rem]">
            <Reveal delay={80}>
              <h1 className="display max-w-[16ch]">
                {p.title.replace(p.emphasis, '')}
                <span className="tag tag-stamp bg-magenta text-ink">{p.emphasis}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {p.body}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#apply"
                  className="btn-pop group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
                >
                  Apply to Peekaboo
                  <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
                </Link>
                {/* the honest status line — open, closed, or a date */}
                <p className="text-sm text-ink-60">{p.status}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Peekaboo: what it is, who it is for ─────────────────────── */}
        <section id="peekaboo" className="scroll-mt-24 px-5 pb-8 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            {/* the core of Peekaboo — the five things every cohort is
                built on, inside the big blue card */}
            <Reveal>
              <article className="group relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:p-12 lg:p-16">
                <Squiggle
                  className="pointer-events-none absolute -right-20 -top-16 h-auto w-[26rem] text-white/15 transition-transform duration-700 group-hover:scale-105 sm:w-[32rem]"
                />
                <div className="relative">
                  <h2 className="section-title max-w-[14ch]">{p.stepsTitle}</h2>

                  <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
                    {p.steps.map((s, i) => (
                      <div key={s.k} className="border-t-2 border-white/25 pt-5">
                        <span className="text-xs font-semibold text-white/50">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">{s.k}</h3>
                        <p className="mt-2.5 max-w-[30ch] leading-relaxed text-white/70">{s.v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* ── Events & showcase ───────────────────────────────────────── */}
        <section id="events" className="scroll-mt-24 bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <span className="pill -rotate-1 bg-magenta-ink text-white">Events</span>
                <h2 className="section-title mt-5">{p.eventsTitle}</h2>
                <p className="mt-6 max-w-[36ch] leading-relaxed text-ink-60">{p.eventsBody}</p>
              </Reveal>
              {/* hovering a row floats a photo card alongside the cursor */}
              <div className="lg:col-span-7 lg:col-start-6">
                <EventList events={p.events} />
              </div>
            </div>
          </div>
        </section>

        {/* ── The application — Goal 1's conversion point ─────────────── */}
        <section id="apply" className="scroll-mt-24 px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:p-12 lg:p-16">
                <Squiggle
                  className="pointer-events-none absolute -right-24 -top-14 h-auto w-[28rem] text-white/12"
                />
                <span aria-hidden className="tape left-10 top-6 hidden -rotate-6 sm:block" />
                <div className="relative max-w-3xl">
                  <h2 className="section-title">
                    {p.apply.title.replace(p.apply.emphasis, '')}
                    <span className="tag tag-stamp bg-mint text-ink">{p.apply.emphasis}</span>
                  </h2>
                  <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/75">
                    {p.apply.body}
                  </p>
                  <ApplyForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────── */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <span className="pill -rotate-1 bg-butter text-ink">FAQ</span>
                <h2 className="section-title mt-5">{p.faqTitle}</h2>
              </Reveal>
              <div className="lg:col-span-7 lg:col-start-6">
                {p.faq.map((f, i) => (
                  <Reveal key={f.q} delay={i * 60}>
                    {/* plain <details> — no JS, works everywhere */}
                    <details className="group border-t border-rule last:border-b">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-semibold tracking-[-0.01em] transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                        {f.q}
                        {/* a drawn plus that turns into a close */}
                        <svg
                          viewBox="0 0 14 14"
                          aria-hidden
                          className="h-3.5 w-3.5 shrink-0 text-ink-30 transition-transform duration-300 ease-[var(--ease-pop)] group-open:rotate-45 group-open:text-brand"
                        >
                          <path
                            d="M7 1v12M1 7h12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </summary>
                      <p className="max-w-[56ch] pb-6 leading-relaxed text-ink-60">{f.a}</p>
                    </details>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
