import { useState } from 'react'
import { scopeOptions, contactEmail } from '../data/site'

// The inquiry form is currently disabled on the live site (it was commented out
// in the original markup); visitors are pointed at a mailto link instead. Flip
// this to `true` to bring the form — and the /api/inquiry backend — back online.
const SHOW_INQUIRY_FORM = false

const EMPTY_FORM = {
  name: '',
  email: '',
  organization: '',
  scope: scopeOptions[0],
  message: ''
}

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [status, setStatus] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (event) => {
    const { id, value } = event.target
    setForm((current) => ({ ...current, [id]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        setStatus({ ok: true, message: 'Thank you! Your enquiry has been sent.' })
        setForm(EMPTY_FORM)
      } else {
        setStatus({ ok: false, message: 'Failed to send enquiry. Please try again or email us directly.' })
      }
    } catch (error) {
      setStatus({ ok: false, message: 'Failed to send enquiry. Please try again or email us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full bg-dark-bg text-white border border-gray-700 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-agentic text-sm transition'
  const labelClass = 'block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1'

  return (
    <section id="contact" className="bg-card-dark py-16 border-t border-gray-800">
      <div className="max-w-xl mx-auto px-6">
        {SHOW_INQUIRY_FORM ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Initiate Discovery</h2>
              <p className="text-gray-400 text-sm">
                Let&rsquo;s discuss aligning and anchoring custom AI systems into your organization&apos;s operational
                model.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className={labelClass} htmlFor="name">
                  Full Name
                </label>
                <input type="text" id="name" required value={form.name} onChange={handleChange} className={inputClass} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="organization">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    required
                    value={form.organization}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass} htmlFor="scope">
                  Project Scope / Inquiry Interest
                </label>
                <select id="scope" value={form.scope} onChange={handleChange} className={inputClass}>
                  {scopeOptions.map((option) => (
                    <option key={option} className="bg-card-dark">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  required
                  placeholder="Tell us about your current technology stack and AI objectives..."
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                ></textarea>
              </div>

              {status && (
                <p
                  role="status"
                  className={`text-sm ${status.ok ? 'text-agentic' : 'text-red-400'}`}
                >
                  {status.message}
                </p>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-agentic text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition shadow-md text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="pt-2">
            <a
              href={`mailto:${contactEmail}`}
              className="block w-full bg-agentic text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition shadow-md text-sm text-center"
            >
              Get in touch
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
