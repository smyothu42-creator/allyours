'use client'

import { useEffect, useState } from 'react'

/**
 * A small round "back to top" button that appears once you are about a
 * screen and a half down the page. The ride back up is smooth because
 * the site already sets scroll-behavior: smooth.
 */
export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 1.5)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0 })}
      className="pop-in btn-pop fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-lg text-paper"
    >
      ↑
    </button>
  )
}
