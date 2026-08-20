import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { Character } from '@/components/character'
import { StoryTimeline } from '@/components/story-timeline'
import { Arrow, Play } from '@/components/doodles'
import { aboutPage } from '@/content/site'

export const metadata = { title: 'About | allyours' }

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
            {/* The collage from the 2025 year-end report: circle photos
                orbiting "the us in 'for you and for all of us'" on a deep
                blue gradient. On large screens each circle sits at its
                position from the report page (the CSS vars below); on
                small screens they simply wrap around the centred text. */}
            <Reveal>
              <div className="relative mt-14 overflow-hidden rounded-[2.5rem] bg-[linear-gradient(178deg,#1240e0_0%,#2226c7_38%,#050b38_100%)] px-6 py-12 text-white sm:px-10 lg:aspect-[1345/700] lg:px-0 lg:py-0">
                {/* the mascot above the line: in flow on small screens, at
                    its report position on large ones */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.teamCollage.mascot}
                  alt=""
                  className="mx-auto w-16 rounded-full lg:absolute lg:left-[46.6%] lg:top-[31.1%] lg:w-[6.7%]"
                />
                {/* centred line */}
                <p className="mt-4 text-center text-3xl leading-[1.15] tracking-[-0.03em] sm:text-4xl lg:absolute lg:inset-x-0 lg:top-[54%] lg:mt-0 lg:-translate-y-1/2 lg:text-[clamp(1.5rem,3.2vw,3.4rem)]">
                  {p.teamCollage.headline.pre}
                  <em className="font-extrabold">{p.teamCollage.headline.em}</em>
                  {p.teamCollage.headline.post}
                  {p.teamCollage.sub.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </p>

                {/* the circles */}
                <ul
                  aria-label="The allyours team"
                  className="mt-10 flex flex-wrap justify-center gap-4 lg:absolute lg:inset-0 lg:mt-0 lg:block"
                >
                  {p.teamCollage.photos.map((src, i) => {
                    // each circle's spot on the report page, as literal
                    // classes so Tailwind compiles them
                    const pos = [
                      'lg:left-[21.9%] lg:top-[22.1%] lg:w-[9.4%]',
                      'lg:left-[33.8%] lg:top-[17.1%] lg:w-[8.9%]',
                      'lg:left-[45.5%] lg:top-[10.1%] lg:w-[8.9%]',
                      'lg:left-[57.3%] lg:top-[17.2%] lg:w-[8.9%]',
                      'lg:left-[68.7%] lg:top-[22.1%] lg:w-[9.4%]',
                      'lg:left-[15.8%] lg:top-[41.9%] lg:w-[8.5%]',
                      'lg:left-[29.1%] lg:top-[41.6%] lg:w-[8.8%]',
                      'lg:left-[62.0%] lg:top-[41.6%] lg:w-[8.8%]',
                      'lg:left-[75.7%] lg:top-[41.9%] lg:w-[8.5%]',
                      'lg:left-[21.9%] lg:top-[60.1%] lg:w-[9.4%]',
                      'lg:left-[33.8%] lg:top-[65.1%] lg:w-[8.9%]',
                      'lg:left-[45.4%] lg:top-[72.6%] lg:w-[9.2%]',
                      'lg:left-[57.3%] lg:top-[65.2%] lg:w-[8.8%]',
                      'lg:left-[68.8%] lg:top-[60.2%] lg:w-[9.2%]',
                    ][i]
                    return (
                      <Reveal
                        key={src}
                        as="li"
                        variant="pop"
                        delay={(i % 7) * 60}
                        className={`w-16 sm:w-20 lg:absolute ${pos}`}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={src}
                          alt=""
                          className="aspect-square w-full rounded-full object-cover ring-4 ring-white/15 transition-transform duration-300 ease-[var(--ease-pop)] hover:scale-105"
                        />
                      </Reveal>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
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
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 border-t border-rule py-5 last:border-b"
                      >
                        <span className="text-lg transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5">
                          {r.label}
                        </span>
                        {/* same ringed arrow as the Events & showcase list */}
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-rule text-ink-60 transition-all duration-300 ease-[var(--ease-pop)] group-hover:-rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                          <Arrow />
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
                        target={w.cta.href.startsWith('http') ? '_blank' : undefined}
                        rel={w.cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
