'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Counts a stat up from zero the first time it scrolls into view —
 * "120+" runs 0 → 120 and keeps its plus sign, "250,000 MMK" keeps its
 * commas and unit. Values with no number in them are shown as-is.
 */
export function CountUp({ value }: { value: string }) {
  // prefix (non-digits) + the number + everything after it
  const match = value.match(/^(\D*?)([\d,]+)(.*)$/)
  const target = match ? parseInt(match[2].replace(/,/g, ''), 10) : 0
  const withCommas = match ? match[2].includes(',') : false

  const ref = useRef<HTMLSpanElement>(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (!match || target === 0) return
    const el = ref.current
    if (!el) return

    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const started = performance.now()
        const duration = 1100
        const tick = (now: number) => {
          const p = Math.min(1, (now - started) / duration)
          // ease-out so the last few digits settle rather than snap
          setShown(Math.round((1 - Math.pow(1 - p, 3)) * target))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // the value is static content — this only needs to run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!match) return <span>{value}</span>

  return (
    <span ref={ref}>
      {match[1]}
      {withCommas ? shown.toLocaleString('en-US') : String(shown)}
      {match[3]}
    </span>
  )
}
