import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://china-travel-guide.com'), // 替换为你的实际域名
  title: "China Travel Guide - Your Guide to Exploring China",
  description: "Comprehensive travel guide for foreign visitors to China. Find visa information, city guides, attractions, transportation, and practical tips for your China journey.",
  keywords: "China travel, China tourism, China visa, China attractions, China destinations, travel guide",
  authors: [{ name: "China Travel Guide Team" }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "China Travel Guide - Your Guide to Exploring China",
    description: "Comprehensive travel guide for foreign visitors to China",
    type: "website",
    locale: "en_US",
    url: '/',
    siteName: "China Travel Guide",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'China Travel Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "China Travel Guide - Your Guide to Exploring China",
    description: "Comprehensive travel guide for foreign visitors to China",
    images: ['/images/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
