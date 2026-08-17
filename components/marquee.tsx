import { marquee } from '@/content/site'
import { Sparkle } from './doodles'

/** A running band of phrases in brand blue. Breaks up the page, carries the tone. */
export function Marquee() {
  const items = [...marquee, ...marquee] // duplicated so the loop is seamless

  return (
    // The band runs at a slight tilt, like a strip of tape laid across the
    // page — the brand sticks things on, it doesn't rule them off.
    <section aria-hidden className="marquee overflow-hidden py-4">
      <div className="-mx-4 -rotate-[1.1deg] bg-brand py-5 text-white">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
          {items.map((phrase, i) => (
            <span
              key={i}
              className="flex items-center gap-8 text-xl font-medium tracking-[-0.02em] sm:text-2xl"
            >
              <span className={i % 3 === 1 ? 'marker text-mint' : ''}>{phrase}</span>
              <Sparkle className="h-4 w-4 shrink-0 text-mint" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
