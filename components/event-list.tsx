'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from './reveal'
import { Arrow } from './doodles'

/**
 * The events list. Two layers of the same idea:
 *  - hover a row and a photo card glides along beside the cursor
 *  - click a row and the program opens in a pop-up, with the photo big
 *    and the text explaining that program
 *
 * The floating card only exists for mouse users — never on touch
 * screens (no cursor to follow). Under reduced motion it still appears,
 * but snaps to the cursor instead of gliding. The pop-up works for
 * everyone.
 *
 * Photos: each event in content/site.ts can carry an optional
 *   image: '/events/cohort-3.jpg'
 * pointing at a file in /public. Events without one get a designed
 * placeholder tile in the brand colours, so both the hover card and the
 * pop-up already work before any photos exist.
 */

export type EventItem = {
  date: string
  kind: 'Current' | 'Previous'
  title: string
  description: string
  href: string
  image?: string
}

// the placeholder tile cycles through the brand palette
const tones = [
  { tile: 'bg-brand', ink: 'text-white' },
  { tile: 'bg-magenta', ink: 'text-ink' },
  { tile: 'bg-mint', ink: 'text-ink' },
] as const

export function EventList({ events }: { events: EventItem[] }) {
  const listRef = useRef<HTMLUListElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number | null>(null)
  const [open, setOpen] = useState<number | null>(null)
  const [canFloat, setCanFloat] = useState(false)

  // where the cursor is (target) vs where the card is (pos) — the card
  // chases the cursor each frame, which is what gives it the glide
  const target = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const tilt = useRef(0)
  const raf = useRef(0)
  const still = useRef(false)
  const activeRef = useRef<number | null>(null)
  activeRef.current = active

  useEffect(() => {
    // mouse-with-a-cursor users only; reduced motion keeps the card but
    // drops the glide (handled in the frame loop below)
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    const quiet = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      setCanFloat(fine.matches)
      still.current = quiet.matches
    }
    update()
    fine.addEventListener('change', update)
    quiet.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      quiet.removeEventListener('change', update)
    }
  }, [])

  useEffect(() => {
    if (!canFloat) return
    const loop = () => {
      const card = cardRef.current
      if (card) {
        const dx = target.current.x - pos.current.x
        const dy = target.current.y - pos.current.y
        if (still.current) {
          // reduced motion: sit at the cursor, no glide, no lean
          pos.current.x = target.current.x
          pos.current.y = target.current.y
          tilt.current = 0
        } else {
          pos.current.x += dx * 0.16
          pos.current.y += dy * 0.16
          // lean into the direction of travel, then settle back upright
          tilt.current += (Math.max(-9, Math.min(9, dx * 0.06)) - tilt.current) * 0.1
        }
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

  // the pop-up: close on Escape, and keep the page behind it from scrolling
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  function onMove(e: React.MouseEvent) {
    const rect = listRef.current?.getBoundingClientRect()
    if (!rect) return
    // the card floats up-right of the cursor, clamped so it never leaves
    // the list (the sections around it clip overflow)
    const w = 336
    const h = 210
    target.current.x = Math.min(e.clientX - rect.left + 28, rect.width - w)
    target.current.y = Math.max(-40, Math.min(e.clientY - rect.top - 220, rect.height - h))
    // first entry: appear at the cursor instead of gliding in from 0,0
    if (activeRef.current === null) {
      pos.current.x = target.current.x
      pos.current.y = target.current.y
    }
  }

  const opened = open === null ? null : events[open]
  const openedTone = open === null ? tones[0] : tones[open % tones.length]

  return (
    <>
      <ul
        ref={listRef}
        className="relative"
        onMouseMove={canFloat ? onMove : undefined}
        onMouseLeave={canFloat ? () => setActive(null) : undefined}
      >
        {events.map((ev, i) => {
          const current = ev.kind === 'Current'
          return (
            <Reveal key={ev.title} delay={i * 60} as="li">
              <button
                type="button"
                onClick={() => setOpen(i)}
                onMouseEnter={canFloat ? () => setActive(i) : undefined}
                className="group flex w-full items-center gap-5 border-t border-rule py-6 text-left last:border-b sm:gap-7 sm:py-7"
              >
                {/* index, sitting like a jersey number */}
                <span className="w-9 shrink-0 font-mono text-xs font-semibold text-ink-30 transition-colors group-hover:text-brand">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <span className="min-w-0 flex-1 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:translate-x-2">
                  <span className="block text-2xl font-bold leading-tight tracking-[-0.025em] transition-colors group-hover:text-brand sm:text-3xl">
                    {ev.title}
                  </span>
                  <span className="mt-1.5 block max-w-[52ch] text-sm leading-relaxed text-ink-60">
                    {ev.description}
                  </span>
                </span>

                {/* current runs in mint; previous stays quiet until hover */}
                <span
                  className={`pill hidden shrink-0 sm:block ${
                    current
                      ? 'bg-mint text-ink'
                      : 'bg-card text-ink-60 outline outline-rule'
                  }`}
                >
                  {ev.kind}
                </span>

                {/* the arrow rides in a ring that inks in on hover */}
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-rule text-ink-60 transition-all duration-300 ease-[var(--ease-pop)] group-hover:-rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                  <Arrow />
                </span>
              </button>
            </Reveal>
          )
        })}

        {/* The floating photo card. transform comes from the rAF loop;
            only opacity/scale transition here, so the two never fight. */}
        {canFloat && (
          <div
            ref={cardRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-10 will-change-transform"
          >
            <div
              className={`w-[21rem] origin-center overflow-hidden rounded-2xl shadow-[0.5rem_0.5rem_0_rgba(16,16,20,0.12)] transition-all duration-300 ease-[var(--ease-pop)] ${
                active === null ? 'scale-50 opacity-0' : 'scale-100 opacity-100'
              }`}
            >
              {events.map((ev, i) => {
                if (i !== active) return null
                const t = tones[i % tones.length]
                return ev.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={ev.title}
                    src={ev.image}
                    alt=""
                    className="aspect-16/10 w-full object-cover"
                  />
                ) : (
                  <div
                    key={ev.title}
                    className={`relative flex aspect-16/10 flex-col justify-between p-5 ${t.tile} ${t.ink}`}
                  >
                    <span className="text-[0.6rem] font-bold uppercase tracking-[0.18em] opacity-70">
                      Peekaboo · {ev.kind}
                    </span>
                    <span className="text-2xl font-bold leading-tight tracking-[-0.025em]">
                      {ev.title}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </ul>

      {/* ── The pop-up: the photo big, then the program explained ─────── */}
      {opened && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={opened.title}
          className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-8"
        >
          {/* backdrop — click anywhere outside to close */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="absolute inset-0 cursor-default bg-ink/60 backdrop-blur-sm"
          />

          <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] bg-card shadow-[0.75rem_0.75rem_0_rgba(16,16,20,0.25)]">
            {/* the photo */}
            {opened.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={opened.image} alt="" className="aspect-16/9 w-full object-cover" />
            ) : (
              <div
                className={`relative flex aspect-16/9 w-full flex-col justify-between p-7 ${openedTone.tile} ${openedTone.ink}`}
              >
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] opacity-70">
                  Peekaboo · {opened.kind}
                </span>
                <span className="text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                  {opened.title}
                </span>
              </div>
            )}

            {/* close, floating over the photo */}
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-ink/70 text-white transition-colors hover:bg-ink"
            >
              <svg viewBox="0 0 14 14" aria-hidden className="h-3.5 w-3.5">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* the text that explains the program */}
            <div className="p-7 sm:p-9">
              <span
                className={`pill ${
                  opened.kind === 'Current' ? 'bg-mint text-ink' : 'bg-paper-2 text-ink-60 outline outline-rule'
                }`}
              >
                {opened.kind}
              </span>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.025em] sm:text-4xl">
                {opened.title}
              </h3>
              <p className="mt-4 max-w-[52ch] leading-relaxed text-ink-60">{opened.description}</p>

              <div className="mt-7">
                <Link
                  href={opened.href}
                  onClick={() => setOpen(null)}
                  className="btn-pop group inline-flex items-center gap-3 rounded-full bg-brand px-6 py-3.5 text-[0.95rem] font-semibold text-white"
                >
                  {opened.kind === 'Current' ? 'Apply' : 'See the work'}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    <Arrow />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
