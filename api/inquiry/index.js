module.exports = async function (context, req) {

    const {
        name,
        email,
        organization,
        scope,
        message
    } = req.body;

    const response = await fetch("https://api.postmarkapp.com/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-Postmark-Server-Token": process.env.X_POSTMARK_SERVER_TOKEN
        },
        body: JSON.stringify({
            From: "website@yourdomain.com",
            To: "sales@yourdomain.com",
            ReplyTo: email,
            Subject: `Website Inquiry - ${scope}`,
            Tag: "Website",

            HtmlBody: `
                <h2>New Website Inquiry</h2>

                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Organization:</b> ${organization}</p>
                <p><b>Scope:</b> ${scope}</p>

                <hr>

                <p>${message.replace(/\n/g, "<br>")}</p>
            `,

            TextBody: `
Name: ${name}
Email: ${email}
Organization: ${organization}
Scope: ${scope}

${message}
            `,

            MessageStream: "outbound"
        })
    });

    if (!response.ok) {
        context.log(await response.text());

        context.res = {
            status: 500,
            body: {
                success: false
            }
        };
        return;
    }

    context.res = {
        status: 200,
        body: {
            success: true
        }
    };
};