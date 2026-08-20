import { marquee } from '@/content/site'

/** A running band of phrases in brand blue. Breaks up the page, carries the tone. */
export function Marquee() {
  const items = [...marquee, ...marquee] // duplicated so the loop is seamless

  return (
    // The band runs at a slight tilt, like a strip of tape laid across the
    // page — the brand sticks things on, it doesn't rule them off.
    <section aria-hidden className="marquee overflow-hidden py-4">
      <div className="-mx-4 -rotate-[1.1deg] bg-brand py-5 text-white">
        {/* No gap on the track itself: each item carries its own trailing
            space (pr-8), so the track is exactly two copies wide and the
            -50% keyframe lands precisely on the start of the second copy. */}
        <div className="marquee-track flex w-max whitespace-nowrap">
          {items.map((phrase, i) => (
            <span
              key={i}
              className="flex items-center gap-8 pr-8 text-xl font-medium tracking-[-0.02em] sm:text-2xl"
            >
              <span className={i % 3 === 1 ? 'marker text-mint' : ''}>{phrase}</span>
              <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
