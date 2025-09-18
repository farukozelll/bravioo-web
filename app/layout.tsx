import type { Metadata } from "next";
import { Reddit_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { EnhancedThemeProvider } from '@/contexts/enhanced-theme-context';
import { HubSpotTracking } from '@/components/hubspot-tracking';
import "./globals.css";

const redditSans = Reddit_Sans({
  subsets: ["latin"],
  variable: "--font-reddit-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bravioo.com'),
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
  icons: {
    icon: [
      "/favicon.ico",
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#3A9355",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${redditSans.variable} font-sans antialiased`}
      >
        <EnhancedThemeProvider defaultTheme="system" enableSystem={true}>
          {children}
          <Analytics />
          <SpeedInsights />
          <HubSpotTracking />
        </EnhancedThemeProvider>
      </body>
    </html>
  );
}
