import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getWaitlistEmail } from '@/lib/email-templates';

// Initialize Resend
const resendApiKey = process.env.RESEND_API_KEY;
// Note: In Vercel, this might return undefined during build but should be present at runtime
if (!resendApiKey) {
    console.warn('RESEND_API_KEY is not defined in environment variables');
}
const resend = new Resend(resendApiKey);

export async function POST(request: NextRequest) {
    try {
        console.log('Received email sending request');
        const body = await request.json();
        const { email, fullName } = body;

        console.log('Processing email for:', email);

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            console.warn('Invalid email address received:', email);
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            console.error('Missing RESEND_API_KEY');
            return NextResponse.json(
                { error: 'Server configuration error: Missing API key' },
                { status: 500 }
            );
        }

        // Send email using Resend
        console.log('Attempting to send email via Resend...');
        const firstName = fullName ? fullName.split(' ')[0] : 'VIP Member';

        const data = await resend.emails.send({
            from: 'ChapChap <hello@chapchap.com.ng>',
            to: [email],
            subject: "🎉 Welcome to ChapChap Waitlist - You're a VIP Now!",
            html: getWaitlistEmail(firstName),
        });

        console.log('Resend API response:', data);

        if (data.error) {
            console.error('Resend API returned error:', data.error);
            return NextResponse.json(
                { error: 'Failed to send email via provider', details: data.error },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Unexpected error in send-welcome-email route:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}
