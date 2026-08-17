'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Fades and lifts its children into view once, the first time they are
 * scrolled to. `delay` staggers items in a row so they arrive one after
 * another instead of all at once.
 *
 * `variant="pop"` arrives like a sticker being pressed on — a small
 * scale-and-straighten instead of the rise. Use it for pills, tags and
 * tiles; keep the default rise for text blocks, so the two never blur
 * into one uniform site-wide fade.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  variant = 'rise',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article' | 'header' | 'p'
  variant?: 'rise' | 'pop'
}) {
  const ref = useRef<HTMLElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // If the element is already on screen at mount (above the fold), show it
    // without waiting for a scroll event.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`${variant === 'pop' ? 'reveal-pop' : 'reveal'} ${shown ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
