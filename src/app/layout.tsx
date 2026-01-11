import type { Metadata } from 'next';
import ThemeRegistry from '@/theme/ThemeRegistry';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChapChap - Something Huge is Coming to Kano',
  description: 'Experience lightning-fast delivery in Kano. Join the waitlist for ChapChap - The new way to buy, sell, and earn in minutes.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: 'ChapChap - Something Huge is Coming to Kano',
    description: 'Lightning-fast delivery, right to your doorstep. Join the waitlist now!',
    url: 'https://chapchap.com.ng',
    siteName: 'ChapChap',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ChapChap - Kano\'s Quick Commerce Revolution',
    description: 'Join the waitlist for instant delivery in Kano.',
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
  themeColor: '#030014',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
