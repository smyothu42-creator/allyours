/**
 * The hand-drawn marker language from the allyours brand sheets — loops,
 * arrows, spirals, a lightbulb, sparkles. All single-weight rounded
 * strokes in `currentColor`, so they take the colour of whatever they
 * sit inside.
 *
 * Every stroke uses `.draw-path`, which draws itself in when its parent
 * <Reveal> scrolls into view (and is simply drawn already for anyone who
 * has asked their computer to stop animating things).
 */

type P = { className?: string; strokeWidth?: number }

/**
 * The signature mark: one continuous looping marker line, as on the tote.
 * Two crossing loops rather than a single arc — a single arc just reads as
 * a stray hook once it is scaled up behind type.
 */
export function Squiggle({ className = '', strokeWidth = 10 }: P) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      <path
        d="M36 358c22-98 96-160 158-124 44 26 30 96-26 100-58 4-76-70-30-124C190 148 268 122 320 156c54 36 54 122 8 166"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-path"
        style={{ ['--len' as string]: 1200 }}
      />
    </svg>
  )
}

/**
 * A curved arrow, the kind drawn next to something worth pointing at.
 * It sweeps right-to-left and lands with a clear head, so it reads as an
 * arrow rather than as a stray stroke.
 */
export function ArrowCurve({ className = '', strokeWidth = 7 }: P) {
  return (
    <svg viewBox="0 0 140 120" fill="none" className={className} aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-path"
        style={{ ['--len' as string]: 400 }}
      >
        <path d="M128 14c8 40-10 74-46 88-14 6-30 8-46 6" />
        <path d="M56 90L34 106l24 12" />
      </g>
    </svg>
  )
}

/** A wound spiral, used as a full stop on a section. */
export function Spiral({ className = '', strokeWidth = 7 }: P) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <path
        d="M60 60c0-8 10-12 16-6 8 8 2 24-12 26-18 3-32-14-28-32C41 26 66 14 88 24c26 12 34 48 18 72"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="draw-path"
        style={{ ['--len' as string]: 320 }}
      />
    </svg>
  )
}

/** The lightbulb from the brand sheet — an idea, drawn. */
export function Bulb({ className = '', strokeWidth = 6 }: P) {
  return (
    <svg viewBox="0 0 110 130" fill="none" className={className} aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-path"
        style={{ ['--len' as string]: 520 }}
      >
        <path d="M55 78c-16-8-24-22-24-36a30 30 0 1160 0c0 14-8 28-24 36z" />
        <path d="M42 88h26M45 100h20" />
        <path d="M55 6V0M14 42H4M106 42h-10M22 14l-7-7M88 14l7-7" />
      </g>
    </svg>
  )
}

/** A four-point sparkle. The brand uses these as punctuation. */
export function Sparkle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden>
      <path
        d="M20 0c1.5 11 7.5 17 20 20-12.5 3-18.5 9-20 20-1.5-11-7.5-17-20-20 12.5-3 18.5-9 20-20z"
        fill="currentColor"
      />
    </svg>
  )
}

/** A hand-drawn underline for the emphasised word in a headline. */
export function Underline({ className = '', strokeWidth = 6 }: P) {
  return (
    <svg viewBox="0 0 300 24" fill="none" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M4 15c48-9 104-12 158-9 46 3 90 8 134 14"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="draw-path"
        style={{ ['--len' as string]: 300 }}
      />
    </svg>
  )
}

/** The fork that connects Peekaboo to its two specializations, drawn by hand. */
export function Fork({ className = '', strokeWidth = 4 }: P) {
  return (
    <svg viewBox="0 0 1000 120" fill="none" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M500 2v40c0 16-12 26-30 26H280c-18 0-30 10-30 26v24M500 42c0 16 12 26 30 26h220c18 0 30 10 30 26v24"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="draw-path"
        style={{ ['--len' as string]: 900 }}
      />
    </svg>
  )
}
