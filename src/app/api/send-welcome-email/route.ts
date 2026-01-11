import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { readFileSync } from 'fs';
import { join } from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Read the HTML template
        const templatePath = join(process.cwd(), 'email-templates', 'waitlist-welcome.html');
        const htmlTemplate = readFileSync(templatePath, 'utf8');

        // Send email using Resend
        const data = await resend.emails.send({
            from: 'ChapChap <onboarding@resend.dev>', // Change this to your verified domain
            to: [email],
            subject: '🎉 Welcome to ChapChap Waitlist - You\'re a VIP Now!',
            html: htmlTemplate,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
