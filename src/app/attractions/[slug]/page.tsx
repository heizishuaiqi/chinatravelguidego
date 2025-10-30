import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { attractions } from '@/data/attractions';
import { MapPin, Calendar, Clock, ArrowLeft, Plane, Star, Info, Phone, DollarSign, Navigation } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getAttractionImagePath, getPlaceholderImage } from '@/lib/image-utils';

interface AttractionPageProps {
  params: {
    slug: string;
  };
}

// 生成动态metadata
export async function generateMetadata({ params }: AttractionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const attraction = attractions.find(a => a.slug === slug);

  if (!attraction) {
    return {
      title: 'Attraction Not Found | China Travel Guide',
      description: 'The requested attraction could not be found.',
    };
  }

  return {
    title: `${attraction.title} - ${attraction.destination} | China Travel Guide`,
    description: `${attraction.title} in ${attraction.destination}: ${attraction.description}. Opening hours, ticket prices, transportation, and visitor tips.`,
    keywords: [
      `${attraction.title}`,
      `${attraction.destination} attractions`,
      `${attraction.category}`,
      `${attraction.destination} travel`,
      'China attractions',
      'China tourism',
      'China travel guide'
    ],
    authors: [{ name: 'China Travel Guide Team' }],
    openGraph: {
      title: `${attraction.title} - ${attraction.destination} | China Travel Guide`,
      description: `${attraction.title} in ${attraction.destination}: Complete visitor guide with hours, prices, and tips`,
      type: 'article',
      locale: 'en_US',
      url: `/attractions/${slug}`,
      siteName: 'China Travel Guide',
      images: [
        {
          url: `/images/attractions/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${attraction.title} - ${attraction.destination}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${attraction.title} - ${attraction.destination} | China Travel Guide`,
      description: `${attraction.title} in ${attraction.destination}: Complete visitor guide with hours, prices, and tips`,
      images: [`/images/attractions/${slug}-twitter.jpg`],
    },
    alternates: {
      canonical: `/attractions/${slug}`,
    },
  };
}

// 生成静态参数用于静态导出
export function generateStaticParams() {
  return attractions.map((attraction) => ({
    slug: attraction.slug,
  }));
}

export default async function AttractionPage({ params }: AttractionPageProps) {
  const { slug } = await params;
  const attraction = attractions.find(a => a.slug === slug);

  if (!attraction) {
    notFound();
  }

  // Generate structured data for SEO
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": attraction.title,
      "description": attraction.description,
      "url": `/attractions/${attraction.slug}`,
      "image": `/images/attractions/${attraction.slug}.jpg`,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": attraction.address,
        "addressLocality": attraction.destination,
        "addressCountry": "CN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "CN"
      },
      "openingHours": attraction.openTime,
      "priceRange": attraction.ticketPrice,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": attraction.rating,
        "ratingCount": 100,
        "bestRating": 5
      },
      "touristType": "International tourists",
      "availableLanguage": ["en", "zh"],
      "category": attraction.category,
      "hasMap": `https://maps.google.com/maps?q=${attraction.address}`,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Category",
          "value": attraction.category
        },
        {
          "@type": "PropertyValue",
          "name": "Location",
          "value": attraction.destination
        }
      ]
    };
  };

  // Category config for styling
  const categoryConfig = {
    'Historical Site': { 
      gradient: 'from-amber-500 to-orange-600',
      emoji: '🏛️',
      label: 'Historical'
    },
    'Religious Site': { 
      gradient: 'from-purple-500 to-pink-600',
      emoji: '🕌',
      label: 'Religious'
    },
    'Scenic Area': { 
      gradient: 'from-green-500 to-teal-600',
      emoji: '🌅',
      label: 'Scenic'
    },
    'Garden': { 
      gradient: 'from-emerald-500 to-green-600',
      emoji: '🌺',
      label: 'Garden'
    },
    'Landmark': { 
      gradient: 'from-blue-500 to-purple-600',
      emoji: '🗼',
      label: 'Landmark'
    },
    'Museum': { 
      gradient: 'from-indigo-500 to-purple-600',
      emoji: '🏛️',
      label: 'Museum'
    },
    'Cultural Site': { 
      gradient: 'from-rose-500 to-pink-600',
      emoji: '🎭',
      label: 'Cultural'
    },
    'Natural Site': { 
      gradient: 'from-cyan-500 to-blue-600',
      emoji: '🏞️',
      label: 'Natural'
    },
  };

  const categoryInfo = categoryConfig[attraction.category as keyof typeof categoryConfig] || {
    gradient: 'from-gray-500 to-gray-600',
    emoji: '📍',
    label: attraction.category
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateStructuredData())
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/attractions">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Attractions
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={`/images/attractions/details/${attraction.slug}-detail.WEBP`}
              alt={`${attraction.title} - ${attraction.category} in ${attraction.destination}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-2">{categoryInfo.emoji}</span>
              <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                {categoryInfo.label}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-4 bg-black/20 px-4 py-2 rounded-lg inline-block">{attraction.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl bg-black/20 px-3 py-2 rounded-lg">{attraction.description}</p>
          </div>
          {/* Rating Badge */}
          <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 z-10">
            <div className="flex items-center text-white">
              <Star className="h-5 w-5 fill-current mr-2" />
              <span className="text-lg font-medium">{attraction.rating}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Opening Hours</h3>
                    <p className="text-gray-600 text-sm mt-1">{attraction.openTime}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Ticket Price</h3>
                    <p className="text-gray-600 text-sm mt-1">{attraction.ticketPrice}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600 text-sm mt-1">{attraction.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Navigation className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600 text-sm mt-1">{attraction.destination}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Highlights */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attraction.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Transportation */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">How to Get There</h2>
              <div className="space-y-3">
                {attraction.transportation.map((transport, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-gray-700">{transport}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Visitor Tips */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Visitor Tips
              </h3>
              <div className="space-y-3">
                {attraction.tips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-yellow-600 mt-1">💡</span>
                    <span className="text-gray-700 text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Call for Information
                </Button>
                <Button variant="outline" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </Card>

            {/* Related Attractions */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                More in {attraction.destination}
              </h3>
              <div className="space-y-4">
                {attractions
                  .filter(a => a.destination === attraction.destination && a.id !== attraction.id)
                  .slice(0, 3)
                  .map(related => {
                    const relatedCategoryInfo = categoryConfig[related.category as keyof typeof categoryConfig] || {
                      gradient: 'from-gray-500 to-gray-600',
                      emoji: '📍',
                      label: related.category
                    };
                    
                    return (
                      <Link key={related.id} href={`/attractions/${related.slug}`}>
                        <div className="group border border-gray-200 rounded-lg hover:shadow-md hover:border-yellow-200 transition-all duration-300 bg-white mb-4">
                          <div className="flex p-3">
                            <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg">
                              <Image
                                src={getAttractionImagePath(related.slug || related.id, 'cover')}
                                alt={`${related.title} - ${related.category} in ${related.destination}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                sizes="80px"
                              />
                            </div>
                            <div className="flex-1 pl-4 pr-2 min-w-0">
                              <div className="mb-2">
                                <h4 className="font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors">
                                  {related.title}
                                </h4>
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 fill-current text-yellow-400 mr-1" />
                                  <span className="text-sm text-gray-600 font-medium">{related.rating}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                                  <span className="mr-1">{relatedCategoryInfo.emoji}</span>
                                  {relatedCategoryInfo.label}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">{related.description}</p>
                              <div className="text-xs text-yellow-600 group-hover:text-yellow-800 transition-colors font-medium">
                                View attraction details →
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 