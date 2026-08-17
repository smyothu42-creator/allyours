'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { nav } from '@/content/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false) // mobile sheet
  const [menu, setMenu] = useState<string | null>(null) // desktop dropdown

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Stop the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setMenu(null)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      // solid paper, no glass blur — the brand is flat print, not frosted UI
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-rule bg-paper' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[110rem] items-center justify-between px-5 sm:px-8">
        {/* The real lockup: script "all" in blue, grotesk "yours" in ink.
            The script half gives a little nod when you hover it. */}
        <Link
          href="/"
          className="group text-[1.6rem] font-bold tracking-[-0.045em] lowercase leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="marker mr-0.5 inline-block text-brand transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-rotate-6">
            all
          </span>
          <span>yours</span>
        </Link>

        {/* Desktop nav ------------------------------------------------- */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.links.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setMenu(link.label)}
                onMouseLeave={() => setMenu(null)}
                // also open on keyboard focus, so tabbing reaches the
                // sub-menu instead of skipping straight past it
                onFocus={() => setMenu(link.label)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setMenu(null)
                }}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-ink-60 transition-colors hover:bg-ink/5 hover:text-ink"
                  aria-expanded={menu === link.label}
                >
                  {link.label}
                  {/* a drawn chevron, not the ▾ character */}
                  <svg
                    viewBox="0 0 10 6"
                    className={`h-1.5 w-2.5 transition-transform duration-200 ${
                      menu === link.label ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  >
                    <path
                      d="M1 1l4 4 4-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                {menu === link.label && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    {/* flat offset shadow — print, not glow */}
                    <div className="menu-in overflow-hidden rounded-2xl border border-rule bg-card shadow-[0.4rem_0.4rem_0_rgba(16,16,20,0.08)]">
                      {link.children.map((child, i) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`group flex items-baseline justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-paper-2 ${
                            i === 0 ? '' : 'border-t border-rule'
                          }`}
                        >
                          <span
                            className={`text-[0.95rem] ${
                              i === 0 ? 'font-medium text-ink' : 'text-ink-60 group-hover:text-ink'
                            }`}
                          >
                            {/* the two specializations sit visually under Peekaboo */}
                            {i > 0 && <span className="mr-2 text-ink-30">└</span>}
                            {child.label}
                          </span>
                          <span className="text-[0.65rem] uppercase tracking-widest text-ink-30">
                            {child.note}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-ink-60 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Actions ----------------------------------------------------- */}
        <div className="flex items-center gap-2.5">
          <Link
            href={nav.donate.href}
            className="hidden rounded-full border-2 border-ink px-5 py-2 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper sm:block"
          >
            {nav.donate.label}
          </Link>
          <Link
            href={nav.apply.href}
            className="btn-pop rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white"
          >
            {nav.apply.label}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="ml-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-rule lg:hidden"
          >
            <span
              className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                open ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-px w-4 bg-ink transition-transform duration-300 ${
                open ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile sheet -------------------------------------------------- */}
      {open && (
        <div className="sheet-in fixed inset-x-0 bottom-0 top-18 z-40 overflow-y-auto border-t border-rule bg-paper px-5 pb-16 pt-6 lg:hidden">
          <nav className="flex flex-col">
            {nav.links.map((link) => (
              <div key={link.label} className="border-b border-rule py-1">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-3xl tracking-[-0.03em]"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pb-3 pl-5">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-lg text-ink-60"
                      >
                        <span className="mr-2 text-ink-30">└</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href={nav.apply.href}
              onClick={() => setOpen(false)}
              className="rounded-full bg-brand px-6 py-4 text-center font-semibold text-white"
            >
              Apply to Peekaboo
            </Link>
            <Link
              href={nav.donate.href}
              onClick={() => setOpen(false)}
              className="rounded-full border-2 border-ink px-6 py-4 text-center font-semibold"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
