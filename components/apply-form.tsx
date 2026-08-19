'use client'

import { useState } from 'react'
import { programsPage } from '@/content/site'

/**
 * The Peekaboo application form. There is no form backend yet, so
 * submitting opens the visitor's email app with everything they typed
 * already filled in — honest, and it works today. To switch to a real
 * backend later, replace the mailto line in handleSubmit.
 */
export function ApplyForm() {
  const { apply } = programsPage
  const [track, setTrack] = useState(apply.trackOptions[0])
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Peekaboo application — ${data.get('name') || 'hello'}`
    const body =
      `Name: ${data.get('name')}\n` +
      `Email: ${data.get('email')}\n` +
      `Specialization: ${track}\n\n` +
      `Something I made:\n${data.get('work')}`
    window.location.href = `mailto:${apply.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-2xl bg-white px-5 py-4 text-[0.95rem] text-ink outline-none ring-mint transition-shadow placeholder:text-ink-30 focus:ring-4'

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="ap-name" className="mb-2 block text-sm font-medium text-white/80">
          {apply.nameLabel}
        </label>
        <input id="ap-name" name="name" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="ap-email" className="mb-2 block text-sm font-medium text-white/80">
          {apply.emailLabel}
        </label>
        <input id="ap-email" name="email" type="email" required className={inputClass} />
      </div>

      {/* the specialization choice, as pills rather than a dropdown */}
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 block text-sm font-medium text-white/80">
          {apply.trackLabel}
        </legend>
        <div className="flex flex-wrap gap-2">
          {apply.trackOptions.map((t) => (
            <label
              key={t}
              className={`pill cursor-pointer transition-all duration-200 ease-[var(--ease-pop)] ${
                track === t
                  ? '-rotate-1 bg-mint text-ink'
                  : 'bg-white/10 text-white/75 hover:bg-white/15 hover:text-white'
              }`}
            >
              <input
                type="radio"
                name="track"
                value={t}
                checked={track === t}
                onChange={() => setTrack(t)}
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="ap-work" className="mb-2 block text-sm font-medium text-white/80">
          {apply.workLabel}{' '}
          <span className="font-normal text-white/50">— {apply.workHint}</span>
        </label>
        <textarea id="ap-work" name="work" rows={5} required className={inputClass} />
      </div>

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          className="btn-pop rounded-full bg-mint px-8 py-4 text-[0.95rem] font-bold text-ink [--pop-shadow:rgba(255,255,255,0.9)]"
        >
          {apply.button}
        </button>
        {sent && (
          <p className="pop-in text-white/80">
            <span className="marker mr-1 text-xl text-mint">Off it goes</span> — finish it in
            your email app.
          </p>
        )}
      </div>
      <p className="text-sm text-white/55 sm:col-span-2">{apply.note}</p>
    </form>
  )
}
