import Link from 'next/link'
import { hero } from '@/content/site'
import { Reveal } from './reveal'
import { CountUp } from './count-up'
import { Arrow, ArrowCurve } from './doodles'

/**
 * The hero has two jobs from the site map: say who allyours is, and push
 * people at the two money-and-people goals (apply, donate).
 *
 * Visually it follows the brand sheets — the marker squiggle behind the
 * type, one word in the handwritten script, and the faint Burmese
 * character texture the brand uses as a background.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-36 sm:px-8 sm:pt-44">
      {/* Burmese character texture, very faint */}
      <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[110rem]">
        <h1 className="display">
          {hero.headline.map((line, i) => (
            <Reveal key={line} delay={i * 90}>
              <span className="block pb-[0.06em]">
                {line.split(' ').map((word, j) => {
                  const clean = word.replace(/[^\w]/g, '')
                  return clean === hero.emphasis ? (
                    // the emphasised word: the stamp tag, like every other
                    // headline highlight on the site. The trailing space sits
                    // OUTSIDE the tag, or the next word butts up against it.
                    <span key={j}>
                      <span className="tag tag-stamp bg-mint text-ink">{word}</span>{' '}
                    </span>
                  ) : (
                    <span key={j}>{word} </span>
                  )
                })}
              </span>
            </Reveal>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal delay={280} className="lg:col-span-5 lg:col-start-7">
            <p className="max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
              {hero.body}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={hero.primary.href}
                className="btn-pop group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 text-[0.95rem] font-semibold text-white"
              >
                {hero.primary.label}
                <span className="transition-transform duration-300 group-hover:translate-x-1"><Arrow /></span>
              </Link>
              <Link
                href={hero.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw inline-flex items-center gap-2 px-2 py-4 text-[0.95rem] font-medium text-ink-60 transition-colors hover:text-brand"
              >
                {hero.secondary.label}
              </Link>
              {/* a drawn arrow nudging toward the buttons */}
              <ArrowCurve className="hidden h-16 w-[4.5rem] shrink-0 text-mint-ink sm:block" />
            </div>
          </Reveal>
        </div>

        {/* Facts strip ------------------------------------------------- */}
        <dl className="mt-20 grid grid-cols-2 gap-3 sm:mt-28 lg:grid-cols-4">
          {hero.facts.map((f, i) => {
            // each fact takes the next brand colour, so the row reads as a
            // palette rather than four identical boxes. The fills are firm —
            // the inspiration posters use solid colour blocks, and a 5%
            // tint on white is exactly the washed-out look they don't have.
            const tone = [
              'bg-brand/12 text-brand',
              'bg-magenta/16 text-magenta-ink',
              'bg-mint/22 text-mint-ink',
              'bg-butter/40 text-ink',
            ][i]
            return (
              // each tile lands like a sticker, one after another, and the
              // numbers count up once they're on screen
              <Reveal key={f.label} variant="pop" delay={380 + i * 90}>
                <div
                  className={`h-full rounded-3xl px-6 py-7 transition-transform duration-300 ease-[var(--ease-pop)] hover:-translate-y-1 ${
                    i % 2 ? 'hover:rotate-[0.7deg]' : 'hover:-rotate-[0.7deg]'
                  } ${tone}`}
                >
                  <dt className="text-4xl font-extrabold tracking-[-0.028em] sm:text-5xl">
                    <CountUp value={f.value} />
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink-60">{f.label}</dd>
                </div>
              </Reveal>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
