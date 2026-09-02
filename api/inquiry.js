// Vercel Serverless Function: POST /api/inquiry
//
// Sends website enquiries through the Mailtrap sending API.
// Required environment variables (Vercel → Settings → Environment Variables):
//   MAILTRAP_API_TOKEN  a Mailtrap *Sending* API token (not an Email Testing token)
//   FROM_EMAIL          sender address on a domain verified in Mailtrap
//   TO_EMAIL            where enquiries are delivered
//
// Abuse controls, cheapest first: honeypot, minimum fill time, field length
// caps, then a per-IP rate limit. See RATE LIMIT note below for its limits.

const REQUIRED_FIELDS = ['name', 'jobTitle', 'email', 'purpose', 'message']

// Caps are generous for a real enquiry and stop multi-megabyte payloads.
const MAX_LENGTHS = {
  name: 100,
  jobTitle: 120,
  email: 254,
  purpose: 120,
  message: 4000
}

// A real person takes a few seconds to fill this in; bots post instantly.
const MIN_FILL_MS = 3000

// RATE LIMIT
// This counter lives in the instance's memory. Vercel may run several
// instances concurrently, and cold starts reset it, so it throttles a single
// noisy source rather than guaranteeing a global cap. The durable layer is
// Vercel Firewall rate limiting (dashboard, no code) — see README.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 3
const hits = new Map()

function rateLimit(ip) {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return { limited: true, retryAfter: Math.ceil((WINDOW_MS - (now - recent[0])) / 1000) }
  }

  recent.push(now)
  hits.set(ip, recent)

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key)
    }
  }

  return { limited: false }
}

function clientIp(request) {
  const forwarded = request.headers['x-forwarded-for']
  if (typeof forwarded === 'string' && forwarded.length > 0) return forwarded.split(',')[0].trim()
  return request.headers['x-real-ip'] ?? 'unknown'
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  // Fail loudly in the logs, quietly to the caller: a misconfiguration should
  // be obvious to us and uninformative to anyone probing the endpoint.
  const missingConfig = ['MAILTRAP_API_TOKEN', 'FROM_EMAIL', 'TO_EMAIL'].filter(
    (key) => !process.env[key]
  )

  if (missingConfig.length > 0) {
    console.error(
      `/api/inquiry is not configured: missing ${missingConfig.join(', ')}. ` +
        'Set these in Vercel → Settings → Environment Variables and redeploy.'
    )
    return response.status(503).json({ success: false, message: 'Enquiries are temporarily unavailable.' })
  }

  const body = request.body ?? {}

  // Honeypot: a field hidden from people. Anything that fills it is a bot.
  // Answer 200 so the bot records success and does not retry or adapt.
  if (String(body.company ?? '').trim()) {
    console.warn('/api/inquiry honeypot triggered from', clientIp(request))
    return response.status(200).json({ success: true })
  }

  const elapsed = Number(body.elapsedMs)
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS) {
    console.warn('/api/inquiry rejected: submitted in', elapsed, 'ms from', clientIp(request))
    return response.status(400).json({ success: false, message: 'That was too quick — please try again.' })
  }

  const missing = REQUIRED_FIELDS.filter((field) => !String(body[field] ?? '').trim())
  if (missing.length > 0) {
    return response.status(400).json({
      success: false,
      message: `Missing required field(s): ${missing.join(', ')}.`
    })
  }

  const tooLong = REQUIRED_FIELDS.filter((field) => String(body[field]).length > MAX_LENGTHS[field])
  if (tooLong.length > 0) {
    return response.status(400).json({
      success: false,
      message: `Field(s) too long: ${tooLong.join(', ')}.`
    })
  }

  const { name, jobTitle, email, purpose, message } = body

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return response.status(400).json({ success: false, message: 'Please enter a valid email address.' })
  }

  const ip = clientIp(request)
  const { limited, retryAfter } = rateLimit(ip)
  if (limited) {
    console.warn('/api/inquiry rate limited', ip)
    response.setHeader('Retry-After', String(retryAfter))
    return response.status(429).json({
      success: false,
      message: 'Too many enquiries from this connection. Please try again shortly.'
    })
  }

  try {
    const mailtrapResponse = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: { email: process.env.FROM_EMAIL, name: 'Cognitech AI Website' },
        to: [{ email: process.env.TO_EMAIL }],
        reply_to: { email },
        subject: `Website Inquiry - ${String(purpose).replace(/[\r\n]+/g, ' ')}`,
        category: 'Website',

        html: `
                        <h2>New Website Inquiry</h2>

                        <table cellpadding="6">
                            <tr>
                                <td><strong>Name</strong></td>
                                <td>${escapeHtml(name)}</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td>${escapeHtml(email)}</td>
                            </tr>
                            <tr>
                                <td><strong>Job title</strong></td>
                                <td>${escapeHtml(jobTitle)}</td>
                            </tr>
                            <tr>
                                <td><strong>Purpose</strong></td>
                                <td>${escapeHtml(purpose)}</td>
                            </tr>
                        </table>

                        <hr>

                        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                    `,

        text: `
                Name: ${name}
                Email: ${email}
                Job title: ${jobTitle}
                Purpose: ${purpose}

                Message:
                ${message}
                    `
      })
    })

    if (!mailtrapResponse.ok) {
      const error = await mailtrapResponse.text()
      console.error(`Mailtrap rejected the send (HTTP ${mailtrapResponse.status}):`, error)

      return response.status(502).json({ success: false, message: 'Failed to send email.' })
    }

    return response.status(200).json({ success: true })
  } catch (err) {
    console.error(err)

    return response.status(500).json({ success: false, message: 'Failed to send email.' })
  }
}
