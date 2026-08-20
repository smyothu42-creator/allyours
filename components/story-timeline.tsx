'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * The story as taped-up notes: each year is a tilted note card held to
 * the page by a strip of washi tape, zigzagging down, joined by
 * hand-drawn dashed lines. As you scroll, each note pops into place and
 * the dashed line to the next one appears.
 *
 * Flat print, like everything else on the site — solid tints, an offset
 * shadow instead of a blur.
 */

export type StoryItem = { year: string; text: string }

// tint, number and tape colour cycle through the brand palette
const looks = [
  { tint: 'bg-magenta/12', num: 'text-magenta-ink', tape: 'var(--color-magenta)' },
  { tint: 'bg-brand/12', num: 'text-brand', tape: 'var(--color-brand)' },
  { tint: 'bg-mint/16', num: 'text-mint-ink', tape: 'var(--color-mint)' },
] as const

export function StoryTimeline({ items }: { items: StoryItem[] }) {
  const wrap = useRef<HTMLDivElement>(null)
  const cards = useRef<(HTMLDivElement | null)[]>([])
  const [reached, setReached] = useState(0)
  const [paths, setPaths] = useState<string[]>([])

  // draw the dashed connectors between consecutive cards
  useEffect(() => {
    const draw = () => {
      const el = wrap.current
      if (!el) return
      const base = el.getBoundingClientRect()
      const next: string[] = []
      for (let i = 0; i < items.length - 1; i++) {
        const a = cards.current[i]?.getBoundingClientRect()
        const b = cards.current[i + 1]?.getBoundingClientRect()
        if (!a || !b) continue
        // leave from the edge of this card facing the next one, arrive at
        // the top of the next card, with a lazy curve between
        const goingRight = b.left + b.width / 2 > a.left + a.width / 2
        const sx = (goingRight ? a.right : a.left) - base.left
        const sy = a.top + a.height * 0.7 - base.top
        const ex = b.left + b.width * 0.5 - base.left
        const ey = b.top - base.top + 6
        const bend = (ex - sx) * 0.7
        next.push(`M ${sx} ${sy} C ${sx + bend} ${sy + 30}, ${ex} ${ey - 70}, ${ex} ${ey}`)
      }
      setPaths(next)
    }
    draw()
    window.addEventListener('resize', draw)
    // fonts settling can shift heights slightly — redraw once they're in
    document.fonts?.ready.then(draw).catch(() => {})
    return () => window.removeEventListener('resize', draw)
  }, [items.length])

  // wake each note as it scrolls into the lower third of the viewport
  useEffect(() => {
    let raf = 0
    const tick = () => {
      raf = 0
      const gate = window.innerHeight * 0.82
      let n = 0
      cards.current.forEach((card) => {
        if (card && card.getBoundingClientRect().top < gate) n += 1
      })
      setReached(n)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [items.length])

  return (
    <div ref={wrap} className="relative">
      {/* the dashed strings between the notes */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="2 7"
            strokeLinecap="round"
            className={`text-ink-30 transition-opacity duration-700 ${
              i + 1 < reached ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </svg>

      <div className="flex flex-col gap-10 sm:gap-4">
        {items.map((s, i) => {
          const look = looks[i % looks.length]
          const right = i % 2 === 1
          const tilt = right ? 'rotate-2' : '-rotate-2'
          const on = i < reached
          return (
            <div
              key={s.year}
              ref={(el) => {
                cards.current[i] = el
              }}
              className={`relative w-[85%] max-w-[22rem] sm:w-[60%] lg:w-[40%] ${
                right ? 'self-end sm:-mt-10 lg:mr-24' : 'self-start'
              }`}
            >
              <div
                className={`rounded-2xl p-6 pt-8 shadow-[0.4rem_0.4rem_0_rgba(16,16,20,0.08)] transition-all duration-500 ease-[var(--ease-pop)] sm:p-7 sm:pt-9 ${look.tint} ${
                  on ? `translate-y-0 scale-100 opacity-100 ${tilt}` : 'translate-y-8 scale-90 rotate-0 opacity-0'
                }`}
              >
                {/* the strip of washi tape holding the note to the page */}
                <span
                  aria-hidden
                  className="tape left-1/2 -top-3 -translate-x-1/2 -rotate-3"
                  style={{
                    background: `color-mix(in srgb, ${look.tape} 78%, transparent)`,
                  }}
                />

                <span className={`text-lg font-bold tracking-[-0.01em] ${look.num}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-[-0.02em]">{s.year}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-60">{s.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
