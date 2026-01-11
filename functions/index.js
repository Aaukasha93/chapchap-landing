const { onRequest } = require("firebase-functions/v2/https");
const { Resend } = require("resend");
const { readFileSync } = require("fs");
const { join } = require("path");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendWelcomeEmail = onRequest({ cors: true }, async (req, res) => {
    // Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { email } = req.body;

        // Validate email
        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email address" });
        }

        // Read the HTML template
        const templatePath = join(__dirname, "..", "email-templates", "waitlist-welcome.html");
        const htmlTemplate = readFileSync(templatePath, "utf8");

        // Send email using Resend
        const data = await resend.emails.send({
            from: "ChapChap <onboarding@resend.dev>",
            to: [email],
            subject: "🎉 Welcome to ChapChap Waitlist - You're a VIP Now!",
            html: htmlTemplate,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
    }
});
