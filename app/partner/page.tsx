import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { CountUp } from '@/components/count-up'
import { ContactForm } from '@/components/contact-form'
import { Character } from '@/components/character'
import { PartnerLogos } from '@/components/partner-logos'
import { Arrow, Squiggle } from '@/components/doodles'
import { partner, impact, partnerPage } from '@/content/site'

export const metadata = { title: 'Partner | allyours' }

/**
 * The page for organisations, in the order the stub promised: the offer
 * in one sentence → benefits (#benefits) → the numbers for a deck →
 * current partners → reports (#reports) → contact form (#contact).
 * The benefits, partner list, reports and stats reuse the same entries
 * as the home page, so they only ever need editing once in site.ts.
 */
export default function Page() {
  const p = partnerPage

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero — the offer in one sentence --------------------------- */}
        <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
          <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[110rem]">
            <Reveal delay={80}>
              <h1 className="display max-w-[15ch]">
                {p.title.split(p.emphasis)[0]}
                <span className="tag tag-stamp bg-magenta text-ink">{p.emphasis}</span>
                {p.title.split(p.emphasis)[1]}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {p.body}
              </p>
              <Link
                href={p.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pop group mt-9 inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
              >
                {p.cta.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Benefits --------------------------------------------------- */}
        <section id="benefits" className="scroll-mt-24 bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <span className="pill -rotate-1 bg-mint text-ink">Benefits</span>
              <h2 className="section-title mt-5">{p.benefitsTitle}</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {partner.benefits.map((b, i) => (
                <Reveal key={b.k} variant="pop" delay={(i % 2) * 100}>
                  <div className="flex h-full gap-6 rounded-[2rem] bg-card p-8 transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 hover:-rotate-[0.3deg]">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-paper">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.03em]">{b.k}</h3>
                      <p className="mt-3 leading-relaxed text-ink-60">{b.v}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* The numbers for a deck ------------------------------------- */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <span className="pill -rotate-1 bg-magenta-ink text-white">For your deck</span>
                <h2 className="section-title mt-5">{p.statsTitle}</h2>
                <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-60">{p.statsBody}</p>
              </Reveal>
            </div>
            <dl className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {impact.stats.map((s, i) => {
                const tone = [
                  'bg-brand/12 text-brand',
                  'bg-magenta/16 text-magenta-ink',
                  'bg-mint/22 text-mint-ink',
                  'bg-butter/40 text-ink',
                ][i]
                return (
                  <Reveal key={s.label} variant="pop" delay={i * 90}>
                    <div className={`h-full rounded-3xl px-6 py-7 ${tone}`}>
                      <dt className="text-4xl font-extrabold tracking-[-0.028em] sm:text-5xl">
                        <CountUp value={s.value} />
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-ink-60">
                        {s.label}
                        <span className="block text-xs text-ink-30">{s.sub}</span>
                      </dd>
                    </div>
                  </Reveal>
                )
              })}
            </dl>
          </div>
        </section>

        {/* Current partners + reports --------------------------------- */}
        <section id="reports" className="scroll-mt-24 px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <div className="border-t border-rule pt-14">
              <Reveal>
                <span className="pill -rotate-1 bg-mint text-ink">{p.partnersTitle}</span>
              </Reveal>
              <div className="mt-9">
                <PartnerLogos />
              </div>
            </div>
            <div className="mt-16 grid gap-12 border-t border-rule pt-14 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <Reveal delay={100}>
                  <span className="pill -rotate-1 bg-butter text-ink">{p.reportsTitle}</span>
                  <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-60">{p.reportsBody}</p>
                  <ul className="mt-6">
                    {partner.reports.map((r) => (
                      <li key={r.label}>
                        <Link
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-4 border-t border-rule py-4 last:border-b"
                        >
                          <span className="transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5">
                            {r.label}
                          </span>
                          <span className="text-ink-30 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-brand">
                            <Arrow className="rotate-90" />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Contact ---------------------------------------------------- */}
        <section id="contact" className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:p-12 lg:p-16">
                <Squiggle
                  className="pointer-events-none absolute -right-24 -top-14 h-auto w-[28rem] text-white/12"
                />
                <span aria-hidden className="tape left-10 top-6 hidden -rotate-6 sm:block" />
                {/* the mascot sits in on the conversation */}
                <Character
                  pose="talking"
                  className="pointer-events-none absolute -bottom-6 right-12 hidden w-32 -rotate-1 lg:block"
                />
                <div className="relative max-w-3xl">
                  <h2 className="section-title">
                    {p.contact.title.replace('conversation.', '')}
                    <span className="tag tag-stamp bg-mint text-ink">conversation.</span>
                  </h2>
                  <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-white/75">
                    {p.contact.body}
                  </p>
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
