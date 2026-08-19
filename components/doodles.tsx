/**
 * The hand-drawn marker language from the allyours brand sheets — loops,
 * arrows, spirals, a lightbulb. All single-weight rounded strokes in
 * `currentColor`, so they take the colour of whatever they sit inside.
 *
 * Every stroke uses `.draw-path`, which draws itself in when its parent
 * <Reveal> scrolls into view (and is simply drawn already for anyone who
 * has asked their computer to stop animating things).
 */

type P = { className?: string; strokeWidth?: number }

/**
 * The signature mark: the brand ribbon from the social templates — one
 * fat, perfectly smooth line that sweeps in, loops once, and leaves.
 * Both ends sit inside the viewBox and finish in round caps, so the
 * ribbon never shows a flat cut wherever it is placed.
 */
export function Squiggle({ className = '', strokeWidth = 26 }: P) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden>
      <path
        d="M20 300 C120 360 240 330 280 240 C310 172 280 110 220 110 C160 110 140 170 190 205 C240 240 330 220 380 150"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="draw-path"
        style={{ ['--len' as string]: 1000 }}
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

/**
 * A right arrow, drawn rather than typed.
 *
 * Neue Haas Display has no arrow glyph, so a text "→" falls back to
 * whatever the operating system supplies — a hairline on macOS, something
 * different again on Windows and Android. That made the arrow both too
 * light next to bold type and inconsistent between visitors. Drawn here it
 * takes `currentColor`, scales with the type (em units) and looks the same
 * everywhere. Rotate it for the other directions: `rotate-90` points down,
 * `rotate-180` points back.
 */
export function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      aria-hidden
      className={`inline-block h-[0.72em] w-[1.05em] shrink-0 ${className}`}
    >
      <path
        d="M2 8h19M14.8 1.6L21.6 8l-6.8 6.4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** The play triangle, for the same reason the arrow is drawn. */
export function Play({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 14"
      fill="currentColor"
      aria-hidden
      className={`inline-block h-[0.72em] w-[0.62em] shrink-0 ${className}`}
    >
      <path d="M1.6 1.3c0-.5.5-.8.95-.55l8.1 5.25c.42.27.42.73 0 1L2.55 12.25c-.45.25-.95-.05-.95-.55z" />
    </svg>
  )
}

/** The underline for the emphasised word — one clean, smooth arc. */
export function Underline({ className = '', strokeWidth = 7 }: P) {
  return (
    <svg viewBox="0 0 300 24" fill="none" className={className} preserveAspectRatio="none" aria-hidden>
      <path
        d="M6 17C80 7 220 7 294 14"
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

/**
 * The coil from the brand moodboard: the wordmark's lowercase "a"
 * unwinding into a long spring — "all" stretched until it hums. One loop
 * of the spring is drawn once and repeated with <use>, so the whole
 * ribbon costs a single path. These are filled shapes rather than
 * strokes, so the coil doesn't draw itself in like the other doodles —
 * wrap it in a <Reveal> where it should arrive with the page.
 *
 * The path data keeps its coordinates from the moodboard file and is
 * shifted back to the origin by the group transform. The <use> id is
 * fixed, so keep it to one <Coil> per page (both current uses are on
 * different pages; duplicates would still render, identically).
 */
export function Coil({ className = '', loops = 24 }: { className?: string; loops?: number }) {
  const width = 188 + 45 * (loops - 1) + 50
  return (
    <svg viewBox={`0 0 ${width} 125`} fill="none" className={className} aria-hidden>
      <g transform="translate(-6551 -6472)" fill="currentColor">
        <path id="coil-loop" d="M6769.92 6570.06C6771.19 6567.82 6772.47 6565.31 6773.74 6562.53C6780.87 6547.18 6784.94 6526.81 6784.94 6505.31C6784.94 6496.38 6782.9 6488.56 6779.08 6482.7C6775.26 6476.84 6769.4 6473.49 6763.29 6473.49C6757.18 6473.49 6751.32 6476.84 6747.5 6482.98C6743.42 6488.84 6741.64 6496.65 6741.64 6506.15C6741.64 6528.48 6743.68 6546.62 6747.75 6560.29C6748.77 6563.36 6749.79 6566.15 6750.81 6568.67C6746.23 6573.13 6740.88 6575.37 6735.02 6575.37V6592.12C6743.68 6592.12 6751.57 6589.33 6758.45 6583.47C6758.7 6583.19 6759.21 6582.91 6759.47 6582.63C6766.6 6590.16 6774.75 6592.4 6781.37 6592.4V6575.65C6779.33 6575.65 6774.49 6575.65 6769.91 6570.07L6769.92 6570.06ZM6761.52 6551.92C6758.46 6540.2 6756.94 6524.85 6756.94 6506.15C6756.94 6495.26 6760.76 6490.24 6763.31 6490.24C6765.86 6490.24 6769.68 6494.71 6769.68 6505.31C6769.68 6522.61 6766.62 6539.36 6761.53 6551.92H6761.52Z" />
        {Array.from({ length: loops - 1 }, (_, i) => (
          <use key={i} href="#coil-loop" x={45 * (i + 1)} />
        ))}
        <path d="M6726.67 6564.13C6734.82 6548.57 6739.46 6527.84 6739.46 6506.06C6739.46 6496.95 6737.14 6489.05 6732.75 6483.12C6728.41 6477.19 6721.75 6473.77 6714.78 6473.77C6707.81 6473.77 6701.11 6477.19 6696.77 6483.41C6692.12 6489.34 6690.09 6497.29 6690.09 6506.93C6690.09 6529.58 6692.41 6548.03 6697.06 6561.86C6698.18 6564.99 6699.38 6567.84 6700.52 6570.34C6695.28 6574.92 6689.21 6577.13 6682.55 6577.13H6681.35C6679.03 6577.13 6673.49 6577.13 6668.27 6571.44C6669.7 6569.18 6671.18 6566.62 6672.61 6563.83C6680.7 6548.27 6685.4 6527.55 6685.4 6505.76C6685.4 6496.65 6683.08 6488.75 6678.69 6482.82C6674.35 6476.89 6667.63 6473.47 6660.72 6473.47C6653.81 6473.47 6647.05 6476.89 6642.69 6483.11C6638.05 6489.04 6636.03 6496.99 6636.03 6506.63C6636.03 6529.28 6638.35 6547.73 6642.98 6561.61C6644.08 6564.5 6644.08 6564.84 6645.17 6567.25C6645.17 6567.25 6644.53 6571.2 6634.89 6571.88C6627.59 6571.73 6627.35 6564.89 6627 6564.12V6564.07C6627.94 6561.95 6628.62 6559.78 6629.12 6557.66C6634.22 6539.73 6628.33 6522.44 6614.46 6514.63C6601.53 6507.4 6586.61 6506.97 6571.21 6513.33C6559.8 6518 6552.24 6524.75 6552.15 6524.8L6551.25 6525.67L6562.31 6537.81L6563.25 6538.77L6564.24 6537.86C6564.24 6537.86 6586.11 6518.83 6605.47 6529.86C6611.3 6533.04 6612.68 6539.64 6612.94 6544.03C6604.74 6537.38 6594.47 6534.87 6583.21 6536.66C6573.33 6538.39 6564.98 6542.64 6559.02 6549.04C6553.83 6554.82 6551.26 6562.34 6551.81 6570.19C6552.6 6576.79 6555.56 6582.72 6560.14 6586.91C6565.38 6591.54 6572.15 6593.95 6579.66 6593.95C6592.33 6593.95 6603.5 6590.24 6612.98 6582.87C6613.18 6582.68 6613.38 6582.53 6613.59 6582.34C6613.68 6582.44 6613.83 6582.53 6613.98 6582.63C6618.08 6585.67 6623.91 6589.96 6631.51 6591.21C6631.51 6591.21 6644.59 6593.33 6655.2 6585.14C6655.2 6585.14 6655.4 6584.95 6655.7 6584.8C6655.9 6584.7 6656.05 6584.56 6656.25 6584.46C6656.6 6584.41 6656.78 6584.65 6657.24 6585.04C6657.72 6585.47 6658.27 6585.95 6658.77 6586.34C6659.86 6587.16 6660.94 6587.98 6662.08 6588.65C6664.14 6590 6666.42 6591.11 6668.79 6591.98C6670.91 6592.75 6673.08 6593.33 6675.36 6593.71C6675.8 6593.76 6681.43 6594.38 6681.43 6594.19H6682.61C6692.43 6594.19 6701.48 6591.35 6709.32 6585.42C6709.61 6585.13 6710.22 6584.89 6710.52 6584.55C6718.61 6592.21 6728.71 6592.09 6735.08 6592.09V6575.34C6729.51 6575.34 6726.09 6575.37 6722.43 6571.77C6723.86 6569.51 6725.34 6566.95 6726.77 6564.16L6726.71 6564.11L6726.67 6564.13ZM6579.67 6576.42C6571.34 6576.42 6569.99 6570.44 6569.75 6568.66C6569.31 6562.78 6574.29 6555.94 6586.49 6553.82C6587.92 6553.63 6589.1 6553.63 6590.59 6553.63C6595.02 6553.63 6598.48 6554.83 6601.79 6557.58C6603.67 6559.03 6605.49 6561.1 6606.87 6563.46C6600.95 6571.84 6591.27 6576.42 6579.66 6576.42H6579.67ZM6658.39 6552.04C6654.93 6540.14 6653.5 6525.63 6653.5 6506.65C6653.5 6495.61 6657.84 6490.51 6660.77 6490.51C6663.7 6490.51 6668.02 6495.04 6668.02 6505.83C6668.02 6523.37 6664.23 6539.32 6658.4 6552.04H6658.39ZM6712.71 6553.39C6709.25 6541.49 6707.52 6525.92 6707.52 6506.94C6707.52 6495.91 6711.86 6490.75 6714.77 6490.75C6717.68 6490.75 6722.04 6495.28 6722.04 6506.07C6722.04 6523.61 6718.53 6540.62 6712.71 6553.39Z" />
      </g>
    </svg>
  )
}
