const { app } = require("@azure/functions");

app.http("inquiry", {
  methods: ["POST"],
  authLevel: "anonymous",

  handler: async (request, context) => {
    try {
      const { name, email, organization, scope, message } =
        await request.json();

      const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": process.env.X_POSTMARK_SERVER_TOKEN,
        },
        body: JSON.stringify({
          From: "website@yourdomain.com", // Must be a verified sender in Postmark
          To: "sales@yourdomain.com", // Change to your inbox
          ReplyTo: email,
          Subject: `Website Inquiry - ${scope}`,
          Tag: "Website",

          HtmlBody: `
                        <h2>New Website Inquiry</h2>

                        <table cellpadding="6">
                            <tr>
                                <td><strong>Name</strong></td>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <td><strong>Email</strong></td>
                                <td>${email}</td>
                            </tr>
                            <tr>
                                <td><strong>Organization</strong></td>
                                <td>${organization}</td>
                            </tr>
                            <tr>
                                <td><strong>Scope</strong></td>
                                <td>${scope}</td>
                            </tr>
                        </table>

                        <hr>

                        <p>${message.replace(/\n/g, "<br>")}</p>
                    `,

          TextBody: `
Name: ${name}
Email: ${email}
Organization: ${organization}
Scope: ${scope}

Message:
${message}
                    `,

          Metadata: {
            Source: "Website",
            Organization: organization,
          },

          TrackOpens: true,
          TrackLinks: "HtmlOnly",
          MessageStream: "outbound",
        }),
      });

      if (!response.ok) {
        const error = await response.text();

        context.error(error);

        return {
          status: 500,
          jsonBody: {
            success: false,
            message: "Failed to send email. ERROR: " + error,
          },
        };
      }

      return {
        status: 200,
        jsonBody: {
          success: true,
        },
      };
    } catch (err) {
      context.error(err);

      return {
        status: 500,
        jsonBody: {
          success: false,
          message: err.message,
        },
      };
    }
  },
});
