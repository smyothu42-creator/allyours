import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Character } from '@/components/character'
import { StoryTimeline } from '@/components/story-timeline'
import { Arrow, Play } from '@/components/doodles'
import { aboutPage } from '@/content/site'

export const metadata = { title: 'About — allyours' }

/**
 * The trust page, in the order the stub promised: mission & vision →
 * the story as a timeline → culture → the team → intro video →
 * transparency (#transparency) → be a part of it (#join).
 */
export default function Page() {
  const p = aboutPage

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
                <span className="tag tag-stamp bg-mint text-ink">{p.emphasis}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {p.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission & vision ------------------------------------------- */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto grid max-w-[110rem] gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] bg-brand p-8 text-white sm:p-12">
                <span className="pill -rotate-1 bg-white text-brand">{p.mission.k}</span>
                <p className="mt-6 text-2xl leading-snug tracking-[-0.02em] sm:text-3xl">
                  {p.mission.v}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-[2rem] bg-mint/16 p-8 sm:p-12">
                <span className="pill -rotate-1 bg-mint text-ink">{p.vision.k}</span>
                <p className="mt-6 text-2xl leading-snug tracking-[-0.02em] sm:text-3xl">
                  {p.vision.v}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Story timeline --------------------------------------------- */}
        <section className="bg-paper-2 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <span className="pill -rotate-1 bg-brand text-white">Story</span>
                <h2 className="section-title mt-5">{p.storyTitle}</h2>
              </Reveal>
              {/* scroll-driven: the blue line grows as you scroll, and each
                  entry wakes up as the line reaches it */}
              <div className="lg:col-span-7 lg:col-start-6">
                <StoryTimeline items={p.story} />
              </div>
            </div>
          </div>
        </section>

        {/* Culture ---------------------------------------------------- */}
        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <span className="pill -rotate-1 bg-magenta-ink text-white">Culture</span>
              <h2 className="section-title mt-5 max-w-[16ch]">{p.cultureTitle}</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {p.culture.map((c, i) => {
                const tint = ['bg-brand/10', 'bg-magenta/12', 'bg-mint/16'][i]
                return (
                  <Reveal key={c.k} variant="pop" delay={i * 100}>
                    <div
                      className={`h-full rounded-[2rem] p-8 transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 hover:-rotate-[0.4deg] ${tint}`}
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-sm font-bold text-paper">
                        {i + 1}
                      </span>
                      <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em]">{c.k}</h3>
                      <p className="mt-3 leading-relaxed text-ink-60">{c.v}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team ------------------------------------------------------- */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <span className="pill -rotate-1 bg-mint text-ink">People</span>
              <h2 className="section-title mt-5">{p.teamTitle}</h2>
            </Reveal>
            <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {p.team.map((t, i) => {
                const tint = ['bg-brand/12', 'bg-magenta/14', 'bg-mint/18'][i % 3]
                const initialTone = ['text-brand', 'text-magenta-ink', 'text-mint-ink'][i % 3]
                return (
                  <Reveal key={`${t.name}-${i}`} as="li" variant="pop" delay={(i % 6) * 60} className="group">
                    {/* arch-shaped portrait slots, like the team sheets on the
                        moodboard. Drop photos into /public and swap these in.
                        The arch lifts and its initial wiggles on hover. */}
                    <div
                      className={`grid aspect-3/4 place-items-center rounded-t-full rounded-b-2xl transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-1.5 ${tint}`}
                    >
                      <span
                        aria-hidden
                        className={`wiggle-on-hover marker text-6xl opacity-30 ${initialTone}`}
                      >
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div className="mt-3 text-center">
                      <span className="tag bg-mint px-1.5 text-[0.9rem] font-medium text-ink">
                        {t.name}
                      </span>
                      <p className="mt-1.5 text-xs text-ink-60">{t.role}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ul>
          </div>
        </section>

        {/* Intro video ------------------------------------------------ */}
        <section className="px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative grid aspect-video place-items-center overflow-hidden rounded-[2.5rem] bg-ink text-white sm:aspect-21/9">
                <div className="text-center">
                  <span className="pulse-ring relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-mint text-xl text-ink transition-transform duration-300 ease-[var(--ease-pop)] hover:scale-110">
                    <Play />
                  </span>
                  <p className="marker mt-6 text-3xl text-mint">{p.video.title}</p>
                  <p className="mt-2 text-sm text-white/60">{p.video.note}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Transparency ----------------------------------------------- */}
        <section id="transparency" className="scroll-mt-24 px-5 pb-20 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <div className="grid gap-10 border-t border-rule pt-14 lg:grid-cols-12">
              <Reveal className="lg:col-span-5">
                <span className="pill -rotate-1 bg-butter text-ink">Open books</span>
                <h2 className="section-title mt-5">{p.transparencyTitle}</h2>
                <p className="mt-6 max-w-[42ch] leading-relaxed text-ink-60">
                  {p.transparencyBody}
                </p>
              </Reveal>
              <div className="lg:col-span-6 lg:col-start-7 lg:self-end">
                <ul>
                  {p.reports.map((r, i) => (
                    <Reveal key={r.label} delay={i * 80} as="li">
                      <Link
                        href={r.href}
                        className="group flex items-center justify-between gap-4 border-t border-rule py-5 last:border-b"
                      >
                        <span className="text-lg transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5">
                          {r.label}
                        </span>
                        <span className="text-ink-30 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-brand">
                          <Arrow className="rotate-90" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Be a part of it -------------------------------------------- */}
        <section id="join" className="scroll-mt-24 px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-white sm:p-12 lg:p-16">
                <span aria-hidden className="tape left-10 top-6 hidden -rotate-6 sm:block" />
                {/* the mascot extends the invitation in person */}
                <Character
                  pose="talking"
                  className="pointer-events-none absolute right-12 top-9 hidden w-24 rotate-2 lg:block"
                />
                <h2 className="section-title max-w-[16ch]">
                  Be a part of <span className="tag tag-stamp bg-mint text-ink">allyours.</span>
                </h2>
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                  {p.join.ways.map((w) => (
                    <div
                      key={w.k}
                      className="flex h-full flex-col rounded-[1.5rem] bg-white/10 p-7 transition-colors duration-300 hover:bg-white/15"
                    >
                      <h3 className="text-2xl font-bold tracking-[-0.03em]">{w.k}</h3>
                      <p className="mt-3 leading-relaxed text-white/70">{w.v}</p>
                      <Link
                        href={w.cta.href}
                        className="group mt-auto inline-flex w-fit items-center gap-2 pt-7 font-semibold text-mint"
                      >
                        {w.cta.label}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <Arrow />
                        </span>
                      </Link>
                    </div>
                  ))}
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
