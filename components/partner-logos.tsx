import { partner } from '@/content/site'
import { Reveal } from './reveal'

/**
 * The partner wall from the year-end report, on site paper: two labelled
 * rows — partners still with us, partners who got us here — each entry
 * a logo with the name and what they actually gave.
 */
const groups = [
  { label: 'Ongoing', items: partner.current.ongoing },
  { label: 'Been with', items: partner.current.been },
] as const

export function PartnerLogos() {
  return (
    <div className="space-y-12">
      {groups.map((g) => (
        <div key={g.label}>
          <Reveal>
            <p className="text-lg font-semibold tracking-[-0.01em] text-ink-60">{g.label}</p>
            <span className="mt-3 block h-px w-full bg-rule" aria-hidden />
          </Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {g.items.map((p, i) => (
              <Reveal as="li" key={p.name} variant="pop" delay={i * 60}>
                <div className="flex h-14 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-14 w-auto max-w-[10rem] object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-[0.95rem] font-bold leading-snug tracking-[-0.01em]">
                  {p.name}
                </p>
                <p className="mt-1.5 max-w-[24ch] text-xs leading-relaxed text-ink-30">{p.note}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
