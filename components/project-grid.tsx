'use client'

import { useMemo, useState } from 'react'
import { projectsPage } from '@/content/site'
import { Reveal } from './reveal'

/**
 * The filterable archive on /projects. The filters really work — pick a
 * specialization and/or a cohort and the grid narrows down. No page
 * reload, nothing sent anywhere.
 */

const accent = {
  'Literature Arts': {
    tile: 'bg-magenta/12',
    dot: 'bg-magenta',
    rule: 'bg-magenta/35',
    initial: 'text-magenta-ink',
  },
  'Design Studies': {
    tile: 'bg-mint/16',
    dot: 'bg-mint',
    rule: 'bg-mint/40',
    initial: 'text-mint-ink',
  },
} as const

type Kind = keyof typeof accent

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`pill cursor-pointer transition-all duration-200 ease-[var(--ease-pop)] ${
        active
          ? '-rotate-1 bg-ink text-paper'
          : 'bg-card text-ink-60 outline outline-rule hover:text-ink'
      }`}
    >
      {label}
    </button>
  )
}

export function ProjectGrid() {
  const [kind, setKind] = useState<'All' | Kind>('All')
  const [cohort, setCohort] = useState<string>('All')

  const cohorts = useMemo(
    () => [...new Set(projectsPage.works.map((w) => w.cohort))],
    [],
  )

  const shown = projectsPage.works.filter(
    (w) => (kind === 'All' || w.kind === kind) && (cohort === 'All' || w.cohort === cohort),
  )

  return (
    <div>
      {/* Filters ------------------------------------------------------ */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by specialization">
          {(['All', 'Literature Arts', 'Design Studies'] as const).map((k) => (
            <FilterPill key={k} label={k} active={kind === k} onClick={() => setKind(k)} />
          ))}
        </div>
        <span aria-hidden className="hidden h-6 w-px bg-rule sm:block" />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by cohort">
          <FilterPill label="All cohorts" active={cohort === 'All'} onClick={() => setCohort('All')} />
          {cohorts.map((c) => (
            <FilterPill key={c} label={c} active={cohort === c} onClick={() => setCohort(c)} />
          ))}
        </div>
      </div>

      {/* the count reads like a caption, and updates as you filter */}
      <p className="mt-6 text-sm text-ink-60" aria-live="polite">
        {shown.length} {shown.length === 1 ? 'project' : 'projects'}
        {kind !== 'All' ? ` · ${kind.toLowerCase()}` : ''}
        {cohort !== 'All' ? ` · ${cohort.toLowerCase()}` : ''}
      </p>

      {/* Grid --------------------------------------------------------- */}
      {shown.length === 0 ? (
        <p className="marker mt-16 text-3xl text-ink-30">nothing here yet — try another filter.</p>
      ) : (
        <ul className="mt-8 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((w, i) => {
            const c = accent[w.kind as Kind]
            return (
              <Reveal key={w.title} as="li" variant="pop" delay={(i % 3) * 70}>
                <article className="group h-full">
                  <div
                    className={`relative flex aspect-4/5 flex-col overflow-hidden rounded-2xl p-6 transition-transform duration-300 ease-[var(--ease-pop)] group-hover:-translate-y-1.5 group-hover:rotate-[0.6deg] ${c.tile}`}
                  >
                    <span className="flex items-center justify-between gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-ink-60">
                      <span className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                        {w.kind}
                      </span>
                      <span className="font-mono text-ink-30">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </span>

                    <span aria-hidden className={`mt-5 mb-5 block h-px w-full ${c.rule}`} />

                    <h3 className="text-3xl font-bold leading-[1.05] tracking-[-0.035em]">
                      {w.title}
                    </h3>
                    <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-ink-60">
                      {w.blurb}
                    </p>

                    <span
                      aria-hidden
                      className={`marker mt-auto self-end text-8xl leading-none opacity-15 ${c.initial}`}
                    >
                      {w.title.charAt(0)}
                    </span>
                  </div>
                  <div className="mt-3.5 flex items-baseline justify-between gap-4 px-1">
                    <span className="tag bg-mint px-1.5 text-[0.9rem] font-medium text-ink transition-transform duration-300 ease-[var(--ease-pop)] group-hover:rotate-0">
                      {w.author}
                    </span>
                    <span className="text-xs text-ink-30">{w.cohort}</span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </ul>
      )}
    </div>
  )
}
