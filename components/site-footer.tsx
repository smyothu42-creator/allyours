import Link from 'next/link'
import { footer, nav } from '@/content/site'

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 text-paper sm:px-8">
      <div className="mx-auto max-w-[110rem]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            {/* the lockup again: script "all", grotesk "yours" */}
            <Link href="/" className="text-5xl font-semibold tracking-[-0.03em] lowercase">
              <span className="marker mr-1 text-mint">all</span>
              <span>yours</span>
            </Link>
            <p className="mt-6 max-w-[32ch] leading-relaxed text-paper/55">{footer.blurb}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:grid-cols-4">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-[0.18em] text-paper/40">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="link-draw text-[0.95rem] text-paper/70 transition-colors hover:text-paper"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-20 flex flex-col gap-4 border-t border-paper/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper/40">{footer.legal}</p>
          <p className="text-sm text-paper/40">
            <span className="marker text-2xl text-mint">All of it is yours.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
