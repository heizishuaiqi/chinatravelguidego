import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Must-See Attractions in China | China Travel Guide',
  description: 'Discover China\'s most iconic attractions - from the Great Wall to Forbidden City, Temple of Heaven to Terracotta Warriors. Complete guide with tickets, hours, and tips.',
  keywords: ['China attractions', 'China landmarks', 'Great Wall', 'Forbidden City', 'Terracotta Warriors', 'China tourism', 'China sightseeing'],
  authors: [{ name: 'China Travel Guide Team' }],
  alternates: {
    canonical: '/attractions',
  },
  openGraph: {
    title: 'Must-See Attractions in China | China Travel Guide',
    description: 'Discover China\'s most iconic attractions and landmarks with our comprehensive guide',
    type: 'website',
    locale: 'en_US',
    url: '/attractions',
    siteName: 'China Travel Guide',
    images: [
      {
        url: '/images/attractions-og.jpg',
        width: 1200,
        height: 630,
        alt: 'China Famous Attractions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Must-See Attractions in China | China Travel Guide',
    description: 'Discover China\'s most iconic attractions and landmarks with our comprehensive guide',
    images: ['/images/attractions-twitter.jpg'],
  },
};

export default function AttractionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 