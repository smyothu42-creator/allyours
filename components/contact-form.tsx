'use client'

import { useState } from 'react'
import { partnerPage } from '@/content/site'

/**
 * The partner contact form. There is no form backend yet, so submitting
 * opens the visitor's email app with everything they typed already
 * filled in — honest, and it works today. To switch to a real backend
 * later, replace the mailto line in handleSubmit.
 */
export function ContactForm() {
  const { contact } = partnerPage
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Partnership — ${data.get('org') || data.get('name') || 'hello'}`
    const body =
      `Name: ${data.get('name')}\n` +
      `Organisation: ${data.get('org')}\n` +
      `Email: ${data.get('email')}\n\n` +
      `${data.get('message')}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputClass =
    'w-full rounded-2xl bg-white px-5 py-4 text-[0.95rem] text-ink outline-none ring-mint transition-shadow placeholder:text-ink-30 focus:ring-4'

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="pc-name" className="mb-2 block text-sm font-medium text-white/80">
          {contact.nameLabel}
        </label>
        <input id="pc-name" name="name" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="pc-org" className="mb-2 block text-sm font-medium text-white/80">
          {contact.orgLabel}
        </label>
        <input id="pc-org" name="org" className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pc-email" className="mb-2 block text-sm font-medium text-white/80">
          {contact.emailLabel}
        </label>
        <input id="pc-email" name="email" type="email" required className={inputClass} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="pc-message" className="mb-2 block text-sm font-medium text-white/80">
          {contact.messageLabel}
        </label>
        <textarea id="pc-message" name="message" rows={5} required className={inputClass} />
      </div>
      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          className="btn-pop rounded-full bg-mint px-8 py-4 text-[0.95rem] font-bold text-ink"
        >
          {contact.button}
        </button>
        {sent && (
          <p className="pop-in text-white/80">
            <span className="marker mr-1 text-xl text-mint">Off it goes</span> — finish it in
            your email app.
          </p>
        )}
      </div>
      <p className="text-sm text-white/55 sm:col-span-2">{contact.note}</p>
    </form>
  )
}
