// Vercel Serverless Function: POST /api/inquiry
// Sends website inquiries through the Mailtrap sending API.
// Requires MAILTRAP_API_TOKEN, FROM_EMAIL and TO_EMAIL environment variables.

const REQUIRED_FIELDS = ['name', 'email', 'organization', 'scope', 'message']

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

  const body = request.body ?? {}
  const missing = REQUIRED_FIELDS.filter((field) => !String(body[field] ?? '').trim())

  if (missing.length > 0) {
    return response.status(400).json({
      success: false,
      message: `Missing required field(s): ${missing.join(', ')}.`
    })
  }

  const { name, email, organization, scope, message } = body

  try {
    const mailtrapResponse = await fetch('https://send.api.mailtrap.io/api/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: { email: process.env.FROM_EMAIL },
        to: [{ email: process.env.TO_EMAIL }],
        reply_to: { email },
        subject: `Website Inquiry - ${String(scope).replace(/[\r\n]+/g, ' ')}`,
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
                                <td><strong>Organization</strong></td>
                                <td>${escapeHtml(organization)}</td>
                            </tr>
                            <tr>
                                <td><strong>Scope</strong></td>
                                <td>${escapeHtml(scope)}</td>
                            </tr>
                        </table>

                        <hr>

                        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
                    `,

        text: `
                Name: ${name}
                Email: ${email}
                Organization: ${organization}
                Scope: ${scope}

                Message:
                ${message}
                    `
      })
    })

    if (!mailtrapResponse.ok) {
      const error = await mailtrapResponse.text()

      console.error('Mailtrap send failed:', error)

      return response.status(502).json({
        success: false,
        message: 'Failed to send email.'
      })
    }

    return response.status(200).json({ success: true })
  } catch (err) {
    console.error(err)

    return response.status(500).json({
      success: false,
      message: 'Failed to send email.'
    })
  }
}
