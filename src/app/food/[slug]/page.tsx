import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { getDishBySlug, getAllDishes } from '@/data/food';
import { getDishImagePath } from '@/lib/food-image-utils';
import { MapPin, DollarSign, ArrowLeft, Utensils, Star, Clock, User, Users } from 'lucide-react';
import Link from 'next/link';

interface DishPageProps {
  params: {
    slug: string;
  };
}

// 生成动态metadata
export async function generateMetadata({ params }: DishPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);

  if (!dish) {
    return {
      title: 'Dish Not Found | China Travel Guide',
      description: 'The requested dish could not be found.',
    };
  }

  return {
    title: `${dish.name} - ${dish.cuisineName} | China Travel Guide`,
    description: `${dish.name}: ${dish.description}. Learn about ingredients, taste, price, where to find, and pro tips for this authentic ${dish.cuisineName.replace(' Cuisine', '')} dish.`,
    keywords: [
      dish.name,
      dish.cuisineName,
      'Chinese food',
      'Chinese cuisine',
      `${dish.region} food`,
      'China food guide',
      'authentic Chinese dishes',
      'Chinese recipes'
    ],
    authors: [{ name: 'China Travel Guide Team' }],
    openGraph: {
      title: `${dish.name} - ${dish.cuisineName} | China Travel Guide`,
      description: `${dish.name}: Complete guide with ingredients, taste, price, and where to find this authentic ${dish.cuisineName.replace(' Cuisine', '')} dish`,
      type: 'article',
      locale: 'en_US',
      url: `/food/${slug}`,
      siteName: 'China Travel Guide',
      images: [
        {
          url: `/images/food/${slug}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${dish.name} - ${dish.cuisineName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dish.name} - ${dish.cuisineName} | China Travel Guide`,
      description: `${dish.name}: Complete guide with ingredients, taste, price, and where to find this authentic dish`,
      images: [`/images/food/${slug}-twitter.jpg`],
    },
    alternates: {
      canonical: `/food/${slug}`,
    },
  };
}

// 生成静态参数用于静态导出
export function generateStaticParams() {
  const allDishes = getAllDishes();
  return allDishes.map((dish) => ({
    slug: dish.slug,
  }));
}

export default async function DishPage({ params }: DishPageProps) {
  const { slug } = await params;
  const dish = getDishBySlug(slug);

  if (!dish) {
    notFound();
  }

  // Generate structured data for SEO
  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Recipe",
      "name": dish.name,
      "description": dish.description,
      "url": `/food/${dish.slug}`,
      "image": `/images/food/${dish.slug}.jpg`,
      "recipeCategory": dish.cuisineName,
      "recipeCuisine": "Chinese",
      "keywords": dish.ingredients.join(", "),
      "recipeIngredient": dish.ingredients,
      "nutrition": {
        "@type": "NutritionInformation",
        "description": dish.taste
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.5,
        "ratingCount": 100,
        "bestRating": 5
      },
      "author": {
        "@type": "Organization",
        "name": "China Travel Guide"
      },
      "datePublished": "2024-01-01",
      "totalTime": "PT30M",
      "recipeYield": "2-4 servings",
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Price Range",
          "value": dish.price
        },
        {
          "@type": "PropertyValue",
          "name": "Origin Region",
          "value": dish.region
        }
      ]
    };
  };

  // Cuisine colors for visual variety
  const cuisineColors = {
    'Sichuan Cuisine': 'from-red-500 to-orange-600',
    'Cantonese Cuisine': 'from-green-500 to-teal-600',
    'Beijing Cuisine': 'from-blue-500 to-purple-600',
    'Shanghai Cuisine': 'from-purple-500 to-pink-600',
    'Hunan Cuisine': 'from-orange-500 to-red-600',
    'Fujian Cuisine': 'from-cyan-500 to-blue-600',
    'Zhejiang Cuisine': 'from-emerald-500 to-green-600',
    'Anhui Cuisine': 'from-amber-500 to-orange-600'
  };

  const gradientClass = cuisineColors[dish.cuisineName as keyof typeof cuisineColors] || 'from-gray-500 to-gray-600';

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
          <Link href="/food">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Food Guide
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 rounded-3xl overflow-hidden mb-12">
          {/* 渐变背景作为备用 - 放在最底层 */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} z-0`}>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          
          {/* 真实图片背景 - 在渐变背景之上 */}
          <Image
            src={getDishImagePath(dish.slug, 'detail')}
            alt={`${dish.name} - ${dish.cuisineName.replace(' Cuisine', '')}`}
            fill
            className="object-cover z-10"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          
          {/* Content */}
          <div className="absolute bottom-8 left-8 text-white z-30">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                {dish.region}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-4 drop-shadow-lg bg-black/20 px-4 py-2 rounded-lg inline-block">{dish.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl drop-shadow-md bg-black/20 px-3 py-2 rounded-lg">{dish.description}</p>
          </div>
          {/* Price Badge */}
          <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 z-30">
            <div className="flex items-center text-white">
              <DollarSign className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">{dish.price}</span>
            </div>
          </div>
          {/* Cuisine Badge */}
          <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 z-30">
            <div className="flex items-center text-white">
              <User className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">{dish.cuisineName.replace(' Cuisine', '')}</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Utensils className="h-6 w-6 mr-3 text-blue-600" />
                Dish Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Taste Profile</h3>
                  <p className="text-gray-600">{dish.taste}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Cuisine Type</h3>
                  <span className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {dish.cuisineName}
                  </span>
                </div>
              </div>
            </Card>

            {/* Ingredients */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Main Ingredients</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dish.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-medium text-gray-800">{ingredient}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Where to Find */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-green-600" />
                Where to Find
              </h2>
              <div className="space-y-4">
                {dish.whereToFind.map((place, index) => (
                  <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-sm font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-800 font-medium">{place}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Pro Tips */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Star className="h-6 w-6 mr-3 text-yellow-500" />
                Pro Tips
              </h2>
              <div className="space-y-4">
                {dish.tips.map((tip, index) => (
                  <div key={index} className="flex items-start p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white text-xs">💡</span>
                    </div>
                    <div>
                      <p className="text-gray-800">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Facts */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Price Range</span>
                  <span className="font-medium text-gray-900">{dish.price}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Origin</span>
                  <span className="font-medium text-gray-900">{dish.region}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Cuisine</span>
                  <span className="font-medium text-gray-900">{dish.cuisineName.replace(' Cuisine', '')}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Taste</span>
                  <span className="font-medium text-gray-900">{dish.taste}</span>
                </div>
              </div>
            </Card>

            {/* Similar Dishes CTA */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-100">
              <h3 className="text-lg font-semibold mb-4 text-blue-900">Explore More Dishes</h3>
              <p className="text-blue-800 mb-4 text-sm">
                Discover more authentic {dish.cuisineName.replace(' Cuisine', '')} dishes and other regional specialties.
              </p>
              <Link href="/food">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Browse All Dishes
                </Button>
              </Link>
            </Card>

            {/* Dining Tips */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Dining Tips
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-start">
                  <span className="mr-2">🥢</span>
                  <span>Use chopsticks and enjoy with friends</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🍚</span>
                  <span>Best served with steamed rice</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">🫖</span>
                  <span>Pair with traditional Chinese tea</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2">💰</span>
                  <span>Tipping is not required in China</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 