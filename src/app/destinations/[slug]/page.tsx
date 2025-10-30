import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { destinations, getDestinationBySlug } from '@/data/destinations';
import { attractions } from '@/data/attractions';
import { MapPin, Calendar, Clock, ArrowLeft, Plane, Hotel, Utensils, Navigation } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getDestinationImagePath, getPlaceholderImage, getAttractionImagePath } from '@/lib/image-utils';
import { getDishImagePath, getDishChineseName } from '@/lib/food-image-utils';

interface DestinationPageProps {
  params: {
    slug: string;
  };
}

// 生成动态metadata
export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: 'Destination Not Found | China Travel Guide',
      description: 'The requested destination could not be found.',
    };
  }

  return {
    title: `${destination.title} Travel Guide | China Travel Guide`,
    description: `Complete ${destination.title} travel guide: ${destination.description}. Best time to visit, top attractions, transportation, and accommodation tips.`,
    keywords: [
      `${destination.title} travel`,
      `${destination.title} guide`,
      `${destination.title} attractions`,
      `${destination.title} tourism`,
      `${destination.title} China`,
      'China travel',
      'China destinations'
    ],
    authors: [{ name: 'China Travel Guide Team' }],
    openGraph: {
      title: `${destination.title} Travel Guide | China Travel Guide`,
      description: `Complete ${destination.title} travel guide with attractions, tips, and practical information`,
      type: 'article',
      locale: 'en_US',
      url: `/destinations/${slug}`,
      siteName: 'China Travel Guide',
      images: [
        {
          url: `/images/destinations/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${destination.title} Travel Guide`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${destination.title} Travel Guide | China Travel Guide`,
      description: `Complete ${destination.title} travel guide with attractions, tips, and practical information`,
      images: [`/images/destinations/${slug}-twitter.jpg`],
    },
    alternates: {
      canonical: `/destinations/${slug}`,
    },
  };
}

// 生成静态参数用于静态导出
export function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  // Get attractions for this destination
  const destinationAttractions = attractions.filter(
    attraction => attraction.destination === destination.title
  );

  // Generate structured data for SEO
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      "name": destination.title,
      "description": destination.description,
      "url": `/destinations/${destination.slug}`,
      "image": `/images/destinations/${destination.slug}.jpg`,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CN",
        "addressRegion": destination.province
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "CN"
      },
      "touristType": "International tourists",
      "availableLanguage": ["en", "zh"],
      "includedInDataCatalog": {
        "@type": "DataCatalog",
        "name": "China Travel Guide"
      },
      "hasMap": `https://maps.google.com/maps?q=${destination.title}, ${destination.province}, China`,
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Best Time to Visit",
          "value": destination.bestTime
        },
        {
          "@type": "PropertyValue", 
          "name": "Recommended Duration",
          "value": destination.duration
        }
      ]
    };
  };

  // Gradient colors for different destinations
  const gradients = [
    'from-blue-500 to-purple-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-purple-500 to-pink-600',
    'from-teal-500 to-blue-600',
    'from-rose-500 to-purple-600',
    'from-amber-500 to-orange-600',
    'from-cyan-500 to-blue-600',
    'from-indigo-500 to-purple-600',
    'from-emerald-500 to-teal-600',
  ];
  
  const destinationIndex = destinations.findIndex(d => d.slug === slug);
  const gradientClass = gradients[destinationIndex % gradients.length];

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
          <Link href="/destinations">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Destinations
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={`/images/destinations/details/${destination.slug}-detail.WEBP`}
              alt={`${destination.title} - Beautiful destination view`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>
          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white z-10">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                {destination.province}, {destination.country}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-4 bg-black/20 px-4 py-2 rounded-lg inline-block">{destination.title}</h1>
            <p className="text-xl opacity-90 max-w-2xl bg-black/20 px-3 py-2 rounded-lg">{destination.description}</p>
          </div>
          {/* Duration Badge */}
          <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 z-10">
            <div className="flex items-center text-white">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">{destination.duration}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Best Time to Visit</h3>
                    <p className="text-gray-600 text-sm mt-1">{destination.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Recommended Duration</h3>
                    <p className="text-gray-600 text-sm mt-1">{destination.duration}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Location</h3>
                    <p className="text-gray-600 text-sm mt-1">{destination.province}, {destination.country}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Navigation className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-900">Attractions</h3>
                    <p className="text-gray-600 text-sm mt-1">{destination.attractions.length} major attractions</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Highlights */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">What Makes It Special</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Transportation */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Plane className="h-6 w-6 mr-2 text-blue-600" />
                Getting There & Around
              </h2>
              <div className="space-y-6">
                {destination.transportation.map((transport, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{transport.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {transport.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{transport.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {transport.price && (
                        <div>
                          <span className="font-medium text-gray-700">Price: </span>
                          <span className="text-gray-600">{transport.price}</span>
                        </div>
                      )}
                      {transport.duration && (
                        <div>
                          <span className="font-medium text-gray-700">Duration: </span>
                          <span className="text-gray-600">{transport.duration}</span>
                        </div>
                      )}
                    </div>
                    {transport.tips && transport.tips.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <h4 className="text-xs font-medium text-gray-600 mb-2">Tips:</h4>
                        <div className="space-y-1">
                          {transport.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start space-x-2">
                              <span className="text-yellow-600 mt-1">💡</span>
                              <span className="text-gray-600 text-xs">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Attractions in this destination */}
            {destinationAttractions.length > 0 && (
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-8">Top Attractions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {destinationAttractions.slice(0, 6).map((attraction) => (
                    <Link key={attraction.id} href={`/attractions/${attraction.slug}`}>
                      <div className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-blue-200 transition-all duration-300 bg-white">
                        <div className="aspect-w-16 aspect-h-10 relative h-52 overflow-hidden">
                          <Image
                            src={getAttractionImagePath(attraction.slug || attraction.id, 'cover')}
                            alt={`${attraction.title} - ${attraction.category} in ${destination.title}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center">
                              <span className="text-yellow-500">★</span>
                              <span className="text-sm text-gray-700 ml-1 font-medium">{attraction.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors line-clamp-1">
                              {attraction.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">{attraction.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-medium">
                              {attraction.category}
                            </span>
                            <span className="text-sm text-green-600 font-semibold">{attraction.ticketPrice}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                {destinationAttractions.length > 6 && (
                  <div className="mt-8 text-center">
                    <Link href="/attractions">
                      <Button variant="outline" size="lg">
                        View All {destinationAttractions.length} Attractions
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Accommodation */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Hotel className="h-5 w-5 mr-2 text-blue-600" />
                Where to Stay
              </h3>
              <div className="space-y-4">
                {destination.accommodation.map((hotel, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{hotel.type}</h4>
                      <span className="text-sm text-green-600 font-medium">{hotel.priceRange}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{hotel.location}</p>
                    <div className="text-xs text-gray-500">
                      <p className="mb-1"><strong>Amenities:</strong> {hotel.amenities.join(', ')}</p>
                      {hotel.booking && <p><strong>Booking:</strong> {hotel.booking}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Local Food */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Utensils className="h-5 w-5 mr-2 text-orange-600" />
                Must-Try Food
              </h3>
              <div className="space-y-4">
                {destination.food.map((dish, index) => {
                  const DishContent = () => (
                    <div className="group border border-gray-200 rounded-lg hover:shadow-md hover:border-orange-200 transition-all duration-300 bg-white mb-4">
                      <div className="flex p-3">
                        <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg">
                          <Image
                            src={dish.slug ? getDishImagePath(dish.slug, 'cover') : getPlaceholderImage(80, 80, dish.name, 'f97316')}
                            alt={`${dish.name} - ${getDishChineseName(dish.slug || dish.name)} - ${destination.title} specialty`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="80px"
                          />
                        </div>
                        <div className="flex-1 pl-4 pr-2 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors flex-1 min-w-0">
                              {dish.name}
                            </h4>
                            <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                              <span className="text-sm text-green-600 font-bold whitespace-nowrap">{dish.price}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-2">
                            {dish.category && (
                              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full font-medium">
                                {dish.category.replace('-', ' ')}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">{dish.description}</p>
                          {dish.location && (
                            <p className="text-xs text-gray-500 mb-2">
                              <strong>📍 Where to find:</strong> {dish.location}
                            </p>
                          )}
                          {dish.slug && (
                            <div className="text-xs text-orange-600 group-hover:text-orange-800 transition-colors font-medium">
                              View detailed recipe →
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );

                  return dish.slug ? (
                    <Link key={index} href={`/food/${dish.slug}`}>
                      <DishContent />
                    </Link>
                  ) : (
                    <div key={index}>
                      <DishContent />
                    </div>
                  );
                })}
              </div>
              
              {/* Link to Food Guide */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <Link href="/food">
                  <Button variant="outline" className="w-full">
                    Explore More Chinese Cuisine
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Related Destinations */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Other Destinations
              </h3>
              <div className="space-y-4">
                {destinations
                  .filter(d => d.id !== destination.id)
                  .slice(0, 3)
                  .map((related, index) => (
                    <Link key={related.id} href={`/destinations/${related.slug}`}>
                      <div className="group border border-gray-200 rounded-lg hover:shadow-md hover:border-blue-200 transition-all duration-300 bg-white mb-4">
                        <div className="flex p-3">
                          <div className="w-20 h-20 flex-shrink-0 relative overflow-hidden rounded-lg">
                            <Image
                              src={getDestinationImagePath(related.slug || related.id, 'cover')}
                              alt={`${related.title} - ${related.description} in ${related.province}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                              sizes="80px"
                            />
                          </div>
                          <div className="flex-1 pl-4 pr-2 min-w-0">
                            <div className="mb-2">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {related.title}
                              </h4>
                              <span className="text-sm text-green-600 font-bold">{related.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                                {related.province}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2 leading-relaxed">{related.description}</p>
                            <div className="text-xs text-blue-600 group-hover:text-blue-800 transition-colors font-medium">
                              Explore destination →
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 