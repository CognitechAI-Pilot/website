import { useEffect, useRef, useState } from 'react'
import { enquiryPurposes, contactEmail } from '../data/site'

const EMPTY = { name: '', jobTitle: '', email: '', purpose: enquiryPurposes[0], message: '' }

// Mirrors the caps enforced in api/inquiry.js.
const MAX_LENGTHS = { name: 100, jobTitle: 120, email: 254, message: 4000 }

export default function Contact({ purpose }) {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  // Bots post instantly; the API rejects anything faster than a few seconds.
  const mountedAt = useRef(Date.now())
  // Honeypot. Hidden from people, so only automation fills it in.
  const honeypot = useRef(null)

  // A pricing CTA can preselect the enquiry purpose.
  useEffect(() => {
    if (purpose) setForm((current) => ({ ...current, purpose }))
  }, [purpose])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          company: honeypot.current?.value ?? '',
          elapsedMs: Date.now() - mountedAt.current
        })
      })

      if (response.ok) {
        setStatus({ ok: true, message: 'Thank you — your enquiry has been sent. We usually reply within one business day.' })
        setForm({ ...EMPTY, purpose: form.purpose })
      } else if (response.status === 429) {
        setStatus({ ok: false, message: 'Too many enquiries from this connection. Please try again shortly.' })
      } else {
        const detail = await response.json().catch(() => null)
        setStatus({
          ok: false,
          message:
            detail?.message && response.status === 400
              ? detail.message
              : `Sorry, we could not send that. Please email ${contactEmail} directly.`
        })
      }
    } catch {
      setStatus({ ok: false, message: `Sorry, we could not send that. Please email ${contactEmail} directly.` })
    } finally {
      setSubmitting(false)
    }
  }

  const field =
    'w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition'
  const label = 'block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-2'

  return (
    <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
            DIRECT ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-2">Consult Cognitech AI Engineers</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Submit an enquiry to explore deploying custom Digital Co-Workers, sovereign onshore architecture, or
            scheduling an executive briefing.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate={false} className="relative glow-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-5">
          {/*
            Honeypot. Hidden from people and assistive tech, and skipped by
            tab order, so a human never fills it. Not display:none — some bots
            skip those. A filled value makes the API answer 200 without
            sending, so the bot sees success and moves on.
          */}
          <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden">
            <label htmlFor="company">Company (leave blank)</label>
            <input
              ref={honeypot}
              type="text"
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={label} htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required maxLength={MAX_LENGTHS.name} autoComplete="name" placeholder="Jane Doe" value={form.name} onChange={handleChange} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="jobTitle">Job Title / Role *</label>
              <input type="text" id="jobTitle" name="jobTitle" required maxLength={MAX_LENGTHS.jobTitle} autoComplete="organization-title" placeholder="Head of Delivery / Lead Architect" value={form.jobTitle} onChange={handleChange} className={field} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={label} htmlFor="email">Business Email *</label>
              <input type="email" id="email" name="email" required maxLength={MAX_LENGTHS.email} autoComplete="email" placeholder="jane@enterprise.co.nz" value={form.email} onChange={handleChange} className={field} />
            </div>
            <div>
              <label className={label} htmlFor="purpose">Consultation Purpose *</label>
              <select id="purpose" name="purpose" value={form.purpose} onChange={handleChange} className={field}>
                {enquiryPurposes.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className={label} htmlFor="message">Project Context &amp; Objectives *</label>
            <textarea id="message" name="message" rows="4" required maxLength={MAX_LENGTHS.message} placeholder="Outline your current squad structure, key workflow bottlenecks, or sovereignty requirements..." value={form.message} onChange={handleChange} className={field}></textarea>
          </div>

          {status && (
            <p role="status" aria-live="polite" className={`text-xs ${status.ok ? 'text-emerald-400' : 'text-red-400'}`}>
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <i className={`fa-solid ${submitting ? 'fa-circle-notch fa-spin' : 'fa-paper-plane'}`}></i>
            <span>{submitting ? 'Sending…' : 'Submit Enquiry to Cognitech AI'}</span>
          </button>

          <p className="text-center text-[11px] text-slate-500">
            Enquiries are delivered to the Cognitech AI team under strict enterprise confidentiality.
          </p>
        </form>

        <div className="mt-12 text-center text-xs text-slate-500">
          <p>&copy; 2026 Cognitech AI Limited. Governed Digital Co-Workers for Enterprise Productivity.</p>
        </div>
      </div>
    </footer>
  )
}
