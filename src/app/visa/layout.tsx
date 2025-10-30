import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'China Visa Guide 2025 | Requirements, Fees & Application Process',
  description: 'Complete China visa guide for international travelers. Visa-free policies, requirements, fees, processing times, and application tips for visiting China.',
  keywords: ['China visa', 'China visa requirements', 'China visa application', 'China visa-free', 'China travel visa', 'China tourism visa', 'China visa fees'],
  authors: [{ name: 'China Travel Guide Team' }],
  alternates: {
    canonical: '/visa',
  },
  openGraph: {
    title: 'China Visa Guide 2025 | Requirements, Fees & Application Process',
    description: 'Complete China visa guide for international travelers with visa-free policies, requirements, and application tips',
    type: 'website',
    locale: 'en_US',
    url: '/visa',
    siteName: 'China Travel Guide',
    images: [
      {
        url: '/images/visa-og.jpg',
        width: 1200,
        height: 630,
        alt: 'China Visa Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Visa Guide 2025 | Requirements, Fees & Application Process',
    description: 'Complete China visa guide for international travelers with visa-free policies, requirements, and application tips',
    images: ['/images/visa-twitter.jpg'],
  },
};

export default function VisaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 