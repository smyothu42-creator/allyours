import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'

/**
 * Placeholder view for pages that exist but aren't ready to show yet.
 * The real page code stays put — the page just early-returns this until
 * its COMING_SOON flag is flipped off.
 */
export function ComingSoon({
  kicker,
  title,
  emphasis,
  body,
  linksLabel,
  links,
}: {
  kicker: string
  title: string
  emphasis: string
  body: string
  linksLabel?: string
  links?: { label: string; href: string }[]
}) {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="relative overflow-hidden px-5 pb-32 pt-36 sm:px-8 sm:pb-44 sm:pt-44">
          <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />
          <div className="relative mx-auto min-h-[38vh] max-w-[110rem]">
            <Reveal delay={60}>
              <span className="pill -rotate-1 bg-brand text-white">{kicker}</span>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="display mt-7 max-w-[16ch]">
                {title.replace(emphasis, '')}
                <span className="tag tag-stamp bg-mint text-ink">{emphasis}</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {body}
              </p>
            </Reveal>
            {links && links.length > 0 && (
              <Reveal delay={280}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  {linksLabel && (
                    <span className="pill -rotate-1 bg-magenta-ink text-white">{linksLabel}</span>
                  )}
                  {links.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border-2 border-ink px-5 py-2 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
