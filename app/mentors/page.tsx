import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Arrow } from '@/components/doodles'
import { mentorsPage } from '@/content/site'

export const metadata = { title: 'Mentors | allyours' }

// one accent set per card, cycling through the brand palette
const tones = [
  {
    arch: 'bg-brand/12',
    initial: 'text-brand',
    pill: 'bg-brand text-white',
    chip: 'bg-brand/10 text-brand',
  },
  {
    arch: 'bg-mint/18',
    initial: 'text-mint-ink',
    pill: 'bg-mint text-ink',
    chip: 'bg-mint/16 text-mint-ink',
  },
  {
    arch: 'bg-magenta/14',
    initial: 'text-magenta-ink',
    pill: 'bg-magenta-ink text-white',
    chip: 'bg-magenta/12 text-magenta-ink',
  },
] as const

/**
 * The mentors page: who they are, what they're like, and the receipts —
 * which cohorts they ran and which projects came out of their rooms.
 * Every project name links into the archive on /projects.
 */
export default function Page() {
  const p = mentorsPage

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pt-44">
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
            </Reveal>
          </div>
        </section>

        {/* Mentor cards ----------------------------------------------- */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto grid max-w-[110rem] gap-5 lg:grid-cols-2">
            {p.mentors.map((m, i) => {
              const t = tones[i % tones.length]
              // photo is optional in site.ts — none of the placeholder
              // mentors carry one yet, so read it loosely
              const photo = (m as { photo?: string }).photo
              return (
                <Reveal key={`${m.name}-${i}`} variant="pop" delay={(i % 2) * 100}>
                  <article className="group flex h-full flex-col rounded-[2rem] bg-card p-7 transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 hover:-rotate-[0.3deg] sm:p-9">
                    <div className="flex items-start gap-6">
                      {/* the arch portrait, as on the team sheets — drop a
                          real photo in /public/mentors and it fills the arch */}
                      <div
                        className={`grid w-24 shrink-0 place-items-center overflow-hidden rounded-t-full rounded-b-xl aspect-3/4 sm:w-28 ${t.arch}`}
                      >
                        {photo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={photo} alt={m.name} className="h-full w-full object-cover" />
                        ) : (
                          <span
                            aria-hidden
                            className={`wiggle-on-hover marker text-5xl opacity-30 ${t.initial}`}
                          >
                            {m.name.charAt(0)}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0 pt-1">
                        <span className="tag bg-mint px-1.5 text-lg font-medium text-ink transition-transform duration-300 ease-[var(--ease-pop)] group-hover:rotate-0">
                          {m.name}
                        </span>
                        <p className="mt-2.5">
                          <span className={`pill -rotate-1 ${t.pill}`}>{m.discipline}</span>
                        </p>
                        <p className="mt-4 leading-relaxed text-ink-60">{m.about}</p>
                      </div>
                    </div>

                    {/* the receipts: cohorts run, projects mentored — the
                        whole block stays hidden until a mentor has either */}
                    {(m.cohorts.length > 0 || m.projects.length > 0) && (
                    <div className="mt-7 border-t border-rule pt-6">
                      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-4">
                        {m.cohorts.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-30">
                            Cohorts
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {m.cohorts.map((c) => (
                              <span key={c} className={`pill ${t.chip}`}>
                                {c}
                              </span>
                            ))}
                          </div>
                        </div>
                        )}
                        {m.projects.length > 0 && (
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-30">
                            Projects mentored
                          </p>
                          <ul className="mt-2">
                            {m.projects.map((title) => (
                              <li key={title}>
                                <Link
                                  href="/projects"
                                  className="group/p inline-flex items-center gap-2 py-0.5 text-[0.95rem] font-medium transition-colors hover:text-brand"
                                >
                                  <span className="link-draw">{title}</span>
                                  <span className="text-ink-30 transition-transform duration-300 group-hover/p:translate-x-1 group-hover/p:text-brand">
                                    <Arrow />
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        )}
                      </div>
                    </div>
                    )}
                  </article>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Become a mentor -------------------------------------------- */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-7 py-14 text-center text-white sm:px-14">
                <span aria-hidden className="tape left-10 top-6 hidden -rotate-6 sm:block" />
                <h2 className="section-title mx-auto max-w-[18ch]">
                  {p.join.title.replace('your evenings.', '')}
                  <span className="tag tag-stamp bg-mint text-ink">your evenings.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-[44ch] leading-relaxed text-white/75">
                  {p.join.body}
                </p>
                <Link
                  href={p.join.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop mt-8 inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-[0.95rem] font-semibold text-ink [--pop-shadow:rgba(255,255,255,0.9)]"
                >
                  {p.join.cta.label}
                  <Arrow />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
