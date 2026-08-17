'use client'

import { useState } from 'react'
import { newsletter } from '@/content/site'
import { Reveal } from './reveal'
import { Squiggle, Sparkle } from './doodles'

/**
 * Goal 3 lives here. Subscriber growth is the one awareness number a
 * website can actually measure, so the form gets a full brand-blue
 * moment instead of a line in the footer.
 *
 * Right now it only shows a thank-you — nothing is sent anywhere. To
 * make it real, connect it to Mailchimp / Buttondown / Google Forms.
 */
export function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[110rem]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-7 py-16 text-white sm:px-14 sm:py-24">
            <Squiggle
              className="drift-up pointer-events-none absolute -left-24 -top-10 h-auto w-[28rem] text-white/12"
              strokeWidth={10}
            />
            <Sparkle className="twinkle pointer-events-none absolute right-10 top-12 h-8 w-8 text-mint" />
            <Sparkle className="twinkle pointer-events-none absolute bottom-14 right-24 h-5 w-5 text-mint/70 [--twinkle-delay:1.4s]" />
            {/* the strip of washi tape from the brand's typeface sample card */}
            <span aria-hidden className="tape left-10 top-6 hidden -rotate-6 sm:block" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="pill -rotate-1 bg-white text-brand">{newsletter.kicker}</span>
              <h2 className="section-title mt-6">
                One email per cohort.{' '}
                <span className="marker text-mint">Nothing else.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-[38ch] text-lg leading-relaxed text-white/75">
                {newsletter.body}
              </p>

              {done ? (
                <p className="pop-in mt-10 text-xl">
                  <span className="marker text-3xl text-mint">Thank you.</span> We&apos;ll write
                  when the next cohort opens.
                </p>
              ) : (
                <form
                  className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setDone(true)
                  }}
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletter.placeholder}
                    className="flex-1 rounded-full bg-white px-6 py-4 text-[0.95rem] text-ink outline-none ring-mint transition-shadow placeholder:text-ink-30 focus:ring-4"
                  />
                  <button
                    type="submit"
                    className="btn-pop rounded-full bg-mint px-8 py-4 text-[0.95rem] font-bold text-ink"
                  >
                    {newsletter.button}
                  </button>
                </form>
              )}

              <p className="mt-5 text-xs text-white/50">{newsletter.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
