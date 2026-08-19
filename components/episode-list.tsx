'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'
import { Arrow, Play } from './doodles'

/**
 * The episode list, with the floating-thumbnail hover from editorial /
 * portfolio sites: as the cursor moves down the rows, a small episode
 * card glides along beside it, leaning into the direction of travel.
 *
 * The card only exists for mouse users — it never renders on touch
 * screens (no cursor to follow) or for anyone who has asked their
 * computer to reduce motion. The rows themselves work fine without it.
 *
 * Thumbnails: each episode in content/site.ts can carry an optional
 *   image: '/episodes/012.jpg'
 * pointing at a file in /public. Episodes without one get a designed
 * placeholder tile in the brand colours, so the interaction already
 * works before any artwork exists.
 */

export type Episode = {
  no: string
  title: string
  guest: string
  length: string
  image?: string
}

// the placeholder tile cycles through the brand palette
const tones = [
  { tile: 'bg-brand', ink: 'text-white', chip: 'bg-mint text-ink', spark: 'text-mint' },
  { tile: 'bg-magenta', ink: 'text-ink', chip: 'bg-white text-ink', spark: 'text-white' },
  { tile: 'bg-mint', ink: 'text-ink', chip: 'bg-ink text-mint', spark: 'text-white' },
] as const

export function EpisodeList({
  episodes,
  href,
  external = false,
}: {
  episodes: Episode[]
  href: string
  /** true when the rows link out to Facebook/YouTube rather than a page here */
  external?: boolean
}) {
  const listRef = useRef<HTMLUListElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [canFloat, setCanFloat] = useState(false)

  // where the cursor is (target) vs where the card is (pos) — the card
  // chases the cursor each frame, which is what gives it the glide
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const tilt = useRef(0)
  const raf = useRef(0)
  const activeRef = useRef<number | null>(null)
  activeRef.current = active

  useEffect(() => {
    // mouse-with-a-cursor users only, and never under reduced motion
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setCanFloat(fine.matches && !still.matches)
    update()
    fine.addEventListener('change', update)
    still.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      still.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!canFloat) return
    const loop = () => {
      const card = cardRef.current
      if (card) {
        const dx = target.current.x - pos.current.x
        const dy = target.current.y - pos.current.y
        pos.current.x += dx * 0.16
        pos.current.y += dy * 0.16
        // lean into the direction of travel, then settle back upright
        tilt.current += (Math.max(-9, Math.min(9, dx * 0.06)) - tilt.current) * 0.1
        card.style.transform =
          `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)` +
          ` rotate(${(activeRef.current ?? 0) % 2 ? -3 : 3}deg)` +
          ` rotate(${tilt.current}deg)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf.current)
  }, [canFloat])

  function onMove(e: React.MouseEvent) {
    const rect = listRef.current?.getBoundingClientRect()
    if (!rect) return
    // the card floats up-right of the cursor, clamped so it never leaves
    // the list (the sections around it clip overflow)
    const w = 232
    const h = 145
    target.current.x = Math.min(e.clientX - rect.left + 28, rect.width - w)
    target.current.y = Math.max(-30, Math.min(e.clientY - rect.top - 150, rect.height - h))
    // first entry: appear at the cursor instead of gliding in from 0,0
    if (activeRef.current === null) {
      pos.current.x = target.current.x
      pos.current.y = target.current.y
    }
  }

  return (
    <ul
      ref={listRef}
      className="relative"
      onMouseMove={canFloat ? onMove : undefined}
      onMouseLeave={canFloat ? () => setActive(null) : undefined}
    >
      {episodes.map((ep, i) => {
        return (
          <Reveal key={ep.no} delay={i * 60} as="li">
            <Link
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onMouseEnter={canFloat ? () => setActive(i) : undefined}
              className="group flex items-center gap-5 border-t border-rule py-6 transition-colors last:border-b sm:gap-7 sm:py-7"
            >
              {/* episode number, sitting like a jersey number */}
              <span className="w-9 shrink-0 font-mono text-xs font-semibold text-ink-30 transition-colors group-hover:text-brand">
                {ep.no}
              </span>

              <span className="min-w-0 flex-1 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-2">
                <span className="block text-2xl font-bold leading-tight tracking-[-0.025em] transition-colors group-hover:text-brand sm:text-3xl">
                  {ep.title}
                </span>
                <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-60">
                  {ep.guest}
                  <span aria-hidden className="h-1 w-1 rounded-full bg-ink-30" />
                  {ep.length}
                </span>
              </span>

              {/* the arrow rides in a ring that inks in on hover */}
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-rule text-ink-60 transition-all duration-300 ease-[var(--ease-pop)] group-hover:-rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <Arrow />
              </span>
            </Link>
          </Reveal>
        )
      })}

      {/* The floating episode card. transform comes from the rAF loop;
          only opacity/scale transition here, so the two never fight. */}
      {canFloat && (
        <div
          ref={cardRef}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-10 will-change-transform"
        >
          <div
            className={`w-[14.5rem] origin-center overflow-hidden rounded-2xl shadow-[0.5rem_0.5rem_0_rgba(16,16,20,0.12)] transition-all duration-300 ease-[var(--ease-pop)] ${
              active === null ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            {episodes.map((ep, i) => {
              if (i !== active) return null
              const t = tones[i % tones.length]
              return ep.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={ep.no}
                  src={ep.image}
                  alt=""
                  className="aspect-16/10 w-full object-cover"
                />
              ) : (
                <div
                  key={ep.no}
                  className={`relative flex aspect-16/10 flex-col justify-between p-4 ${t.tile} ${t.ink}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] opacity-70">
                      Peekaboo by allyours
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <span className="text-5xl font-extrabold tracking-[-0.03em]">{ep.no}</span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${t.chip}`}
                    >
                      <Play />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </ul>
  )
}
