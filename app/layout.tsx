import type { Metadata } from "next";
import { Inter, Playfair_Display, Fraunces } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from '@/contexts/theme-context';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bravioo - Employee Recognition & Rewards Platform",
  description: "Transform your workplace culture with Bravioo's comprehensive employee recognition and rewards platform. Boost engagement, retention, and productivity.",
  keywords: ["employee recognition", "employee rewards", "workplace culture", "employee engagement", "hr software"],
  authors: [{ name: "Bravioo Team" }],
  creator: "Bravioo",
  publisher: "Bravioo",
  robots: "index,follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bravioo.com",
    siteName: "Bravioo",
    title: "Bravioo - Employee Recognition & Rewards Platform",
    description: "Transform your workplace culture with Bravioo's comprehensive employee recognition and rewards platform.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bravioo - Employee Recognition Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bravioo",
    creator: "@bravioo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://js-eu1.hs-scripts.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3A9355" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
