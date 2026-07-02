const { app } = require("@azure/functions");

app.http("inquiry", {
  methods: ["POST"],
  authLevel: "anonymous",

  handler: async (request, context) => {
    try {
      const { name, email, organization, scope, message } =
        await request.json();

      const response = await fetch("https://send.api.mailtrap.io/api/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: { email: process.env.FROM_EMAIL },
          to: [{ email: process.env.TO_EMAIL }],
          reply_to: { email: email },
          subject: `Website Inquiry - ${scope}`,
          category: "Website",

          html: `
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

          text: `
                Name: ${name}
                Email: ${email}
                Organization: ${organization}
                Scope: ${scope}

                Message:
                ${message}
                    `,
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
