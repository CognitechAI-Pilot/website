document.getElementById("contactForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const body = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        organization: document.getElementById("organization").value,
        scope: document.getElementById("scope").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        alert("Thank you! Your enquiry has been sent.");
        e.target.reset();
    } else {
        console.log("Failed to send enquiry. Response:", response);
        alert("Failed to send enquiry.");
    }
});