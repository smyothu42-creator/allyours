import Link from 'next/link'
import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

/**
 * A placeholder for the pages in the site map that aren't built yet.
 * It keeps every link in the navigation working, so nobody clicks into
 * a 404 while the rest of the site is being written.
 *
 * When one of these becomes a real page, replace the <PageStub /> call
 * in that page's file with the real layout.
 */
export function PageStub({
  kicker,
  title,
  body,
  sections,
}: {
  kicker: string
  title: string
  body: string
  sections: string[]
}) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="px-5 pb-32 pt-36 sm:px-8 sm:pt-44">
        <div className="mx-auto max-w-[110rem]">
          <span className="pill -rotate-1 bg-brand text-white">{kicker}</span>
          <h1 className="display mt-7 max-w-[14ch]">{title}</h1>
          <p className="mt-9 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">{body}</p>

          <div className="mt-16 border-t border-rule pt-10">
            <span className="pill -rotate-1 bg-mint text-ink">Planned for this page</span>
            <ul className="mt-6 max-w-3xl">
              {sections.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-4 border-b border-rule py-4 text-xl tracking-[-0.02em] text-ink-60"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-paper">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/"
            className="link-draw mt-12 inline-block text-[0.95rem] font-semibold text-brand"
          >
            ← Back to the home page
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
