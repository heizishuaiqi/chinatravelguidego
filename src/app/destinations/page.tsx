import { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CardImage } from '@/components/ui/CardImage';
import { destinations } from '@/data/destinations';
import { getGradientByIndex } from '@/lib/constants';
import { MapPin, Calendar, Clock, Plane } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Top China Destinations | China Travel Guide',
  description: 'Explore the best destinations in China - Beijing, Shanghai, Xi\'an, and more. Complete travel guides with attractions, accommodation, and transportation info.',
  keywords: ['China destinations', 'China travel', 'Beijing travel', 'Shanghai travel', 'China tourism', 'China cities', 'China guide'],
  authors: [{ name: 'China Travel Guide Team' }],
  alternates: {
    canonical: '/destinations',
  },
  openGraph: {
    title: 'Top China Destinations | China Travel Guide',
    description: 'Explore the best destinations in China with our comprehensive travel guides',
    type: 'website',
    locale: 'en_US',
    url: '/destinations',
    siteName: 'China Travel Guide',
    images: [
      {
        url: '/images/destinations-og.jpg',
        width: 1200,
        height: 630,
        alt: 'China Travel Destinations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top China Destinations | China Travel Guide',
    description: 'Explore the best destinations in China with our comprehensive travel guides',
    images: ['/images/destinations-twitter.jpg'],
  },
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Popular Destinations in China
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most amazing destinations across China - from bustling metropolises to cultural heritage sites
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {destinations.map((destination, index) => {
            const gradientClass = getGradientByIndex(index, 'destinations');
            
            return (
            <Card key={destination.id} className="overflow-hidden group">
              {/* Image Section */}
              <div className="relative h-52 md:h-48 overflow-hidden">
                <CardImage 
                  slug={destination.slug}
                  title={destination.title}
                  description={destination.description}
                  type="destination"
                  gradientClass={gradientClass}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-xs opacity-80 mb-1">{destination.province}</div>
                  <div className="text-2xl font-semibold">{destination.title}</div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{destination.bestTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{destination.duration}</span>
                  </div>
                </div>

                 <Link href={`/destinations/${destination.slug}`}>
                   <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                     Explore {destination.title}
                   </Button>
                 </Link>
               </div>
             </Card>
             );
           })}
        </div>

        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">Travel Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚄</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Transportation</h3>
              <p className="text-gray-600 leading-relaxed">
                China&apos;s high-speed rail network connects major destinations efficiently. 
                Book tickets in advance through official channels.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Accommodation</h3>
              <p className="text-gray-600 leading-relaxed">
                Book hotels in advance, especially during peak seasons. 
                Consider location relative to attractions and transportation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Budget</h3>
              <p className="text-gray-600 leading-relaxed">
                Costs vary significantly between destinations. Beijing and Shanghai 
                are generally more expensive than other destinations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Weather</h3>
              <p className="text-gray-600 leading-relaxed">
                Spring (March-May) and autumn (September-November) offer 
                the best weather for most destinations.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg">
            <h3 className="text-lg font-semibold mb-4">City Distribution Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-gray-700">North China</h4>
                <p className="text-gray-600">Beijing, Tianjin</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">East China</h4>
                <p className="text-gray-600">Shanghai, Hangzhou, Suzhou, Nanjing</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">South China</h4>
                <p className="text-gray-600">Guangzhou, Shenzhen, Xiamen</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Southwest China</h4>
                <p className="text-gray-600">Chengdu, Chongqing, Kunming, Lhasa</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Northwest China</h4>
                <p className="text-gray-600">Xi'an</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Central China</h4>
                <p className="text-gray-600">Wuhan</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Northeast China</h4>
                <p className="text-gray-600">Dalian</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700">Coastal Destinations</h4>
                <p className="text-gray-600">Qingdao, Guilin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 