import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ProjectGrid } from '@/components/project-grid'
import { projectsPage } from '@/content/site'
import { Arrow } from '@/components/doodles'

export const metadata = { title: 'Projects — allyours' }

/**
 * The full archive of cohort work, with working filters (specialization
 * and cohort), plus the door for alumni to add their own.
 */
export default function Page() {
  const p = projectsPage

  return (
    <>
      <SiteHeader />
      <main id="main">
        {/* Hero ------------------------------------------------------- */}
        <section className="relative overflow-hidden px-5 pb-14 pt-36 sm:px-8 sm:pt-44">
          <div aria-hidden className="mm-pattern pointer-events-none absolute inset-0" />
          <div className="relative mx-auto max-w-[110rem]">
            <Reveal delay={80}>
              <h1 className="display max-w-[16ch]">
                {p.title.replace(p.emphasis, '')}
                <span className="tag tag-stamp bg-mint text-ink">{p.emphasis}</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-60 sm:text-xl">
                {p.body}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filters + grid --------------------------------------------- */}
        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-[110rem]">
            <Reveal delay={100}>
              <ProjectGrid />
            </Reveal>
          </div>
        </section>

        {/* Submit your work ------------------------------------------- */}
        <section className="px-5 pb-24 sm:px-8 sm:pb-32">
          <div className="mx-auto max-w-[110rem]">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-7 py-14 text-center text-white sm:px-14">
                <span aria-hidden className="tape right-10 top-5 hidden rotate-6 sm:block" />
                <span className="pill -rotate-1 bg-mint text-ink">For alumni</span>
                <h2 className="section-title mx-auto mt-6 max-w-[18ch]">
                  {p.submit.title.replace('cohort?', '')}
                  <span className="marker text-mint">cohort?</span>
                </h2>
                <p className="mx-auto mt-5 max-w-[42ch] leading-relaxed text-white/70">
                  {p.submit.body}
                </p>
                <Link
                  href={p.submit.cta.href}
                  className="btn-pop mt-8 inline-flex items-center gap-3 rounded-full bg-mint px-7 py-4 text-[0.95rem] font-semibold text-ink [--pop-shadow:rgba(255,255,255,0.9)]"
                >
                  {p.submit.cta.label}
                  <span><Arrow /></span>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
