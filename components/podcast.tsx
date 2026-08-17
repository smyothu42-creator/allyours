import Link from 'next/link'
import { podcast } from '@/content/site'
import { Reveal } from './reveal'
import { Sparkle } from './doodles'

/**
 * Kept deliberately separate from the Programs section. "Peekaboo by
 * allyours" is the podcast's full name, and the Facebook page is mostly
 * podcast video — so mixing it in with events and applications would send
 * podcast traffic to the wrong place.
 */
export function Podcast() {
  return (
    <section id="podcast" className="relative overflow-hidden bg-paper-2 px-5 py-24 sm:px-8 sm:py-32">
      <Sparkle className="twinkle pointer-events-none absolute right-[8%] top-16 hidden h-6 w-6 text-magenta/60 sm:block" />
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="pill -rotate-1 bg-brand text-white">{podcast.kicker}</span>
              <p className="mt-5 text-sm text-ink-60">
                Full name:{' '}
                <span className="marker text-xl text-magenta-ink">{podcast.fullName}</span>
              </p>
              <h2 className="section-title mt-3">{podcast.title}</h2>
              <p className="mt-7 max-w-[42ch] text-lg leading-relaxed text-ink-60">
                {podcast.body}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href={podcast.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pop group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-mint text-[0.6rem] text-ink">
                    ▶
                  </span>
                  {podcast.primary.label}
                </Link>
                <Link
                  href={podcast.secondary.href}
                  className="link-draw px-2 py-4 text-[0.95rem] text-ink-60 transition-colors hover:text-ink"
                >
                  {podcast.secondary.label}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Episode list ------------------------------------------------ */}
          <div className="lg:col-span-5 lg:col-start-8">
            <ul>
              {podcast.episodes.map((ep, i) => (
                <Reveal key={ep.no} delay={i * 90} as="li">
                  <Link
                    href={podcast.secondary.href}
                    className="group flex items-start gap-5 border-t border-rule py-6 transition-colors last:border-b hover:bg-card"
                  >
                    <span className="mt-1 font-mono text-xs text-ink-30 transition-colors group-hover:text-brand">
                      {ep.no}
                    </span>
                    {/* the whole row steps aside slightly, like a record being pulled */}
                    <span className="flex-1 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-1.5">
                      <span className="block text-xl tracking-[-0.02em] transition-colors group-hover:text-brand">
                        {ep.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink-60">
                        {ep.guest} · {ep.length}
                      </span>
                    </span>
                    <span className="mt-1 text-ink-30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-brand">
                      →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
