/**
 * The allyours mascot, lifted straight off the brand moodboard: a small
 * white figure in a blue-to-mint hood, glasses on, mint tote over the
 * shoulder. Two poses exist — `talking` (mid-gesture, mid-sentence) and
 * `crossed` (arms folded, entirely unimpressed).
 *
 * It is decoration everywhere it appears, so it ships as an aria-hidden
 * <img> with an empty alt. The width/height attributes carry the real
 * aspect ratios from the artwork, so nothing jumps while the SVG loads.
 */
const poses = {
  talking: { src: '/character/talking.svg', width: 727, height: 1581 },
  crossed: { src: '/character/crossed.svg', width: 658, height: 1855 },
} as const

export function Character({
  pose = 'talking',
  className = '',
}: {
  pose?: keyof typeof poses
  className?: string
}) {
  const p = poses[pose]
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={p.src}
      width={p.width}
      height={p.height}
      alt=""
      aria-hidden
      className={className}
    />
  )
}
