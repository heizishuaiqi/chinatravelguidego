import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { chineseCuisines, localSnacks } from '@/data/food';
import { getCuisineGradient } from '@/lib/constants';
import { Clock, MapPin, Star, Users, Utensils } from 'lucide-react';
import { getDishImagePath } from '@/lib/food-image-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chinese Food Guide - Authentic Cuisine & Local Specialties | China Travel Guide',
  description: 'Discover authentic Chinese cuisine, from Sichuan spice to Cantonese dim sum. Complete guide to famous dishes, local snacks, and where to find the best food in China.',
  keywords: ['Chinese food', 'Chinese cuisine', 'authentic dishes', 'dim sum', 'hot pot', 'Peking duck', 'local specialties'],
  openGraph: {
    title: 'Chinese Food Guide - Authentic Cuisine & Local Specialties',
    description: 'Discover authentic Chinese cuisine, from Sichuan spice to Cantonese dim sum. Complete guide to famous dishes and local snacks.',
    type: 'website',
  },
  alternates: {
    canonical: '/food',
  },
};

// 生成结构化数据
const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Chinese Cuisine Guide",
  "description": "Complete guide to authentic Chinese food and regional specialties",
  "numberOfItems": chineseCuisines.length + 1,
  "itemListElement": [
    ...chineseCuisines.map((cuisine, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Recipe",
        "name": cuisine.name,
        "description": cuisine.characteristics.join(', '),
        "recipeCategory": "Chinese Cuisine"
      }
    })),
    {
      "@type": "ListItem",
      "position": chineseCuisines.length + 1,
      "item": {
        "@type": "Recipe",
        "name": "Local Specialties",
        "description": "Regional street food and local delicacies",
        "recipeCategory": "Street Food"
      }
    }
  ]
};

export default function FoodPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              <h1 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Chinese Cuisine Guide
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Embark on a culinary journey through China's diverse food culture. From fiery Sichuan dishes 
              to delicate Cantonese dim sum, discover authentic flavors and local specialties.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4" />
                <span>{chineseCuisines.reduce((total, cuisine) => total + cuisine.famousDishes.length, 0) + localSnacks.length} Famous Dishes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{chineseCuisines.length + 1} Cuisine Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Expert Recommendations</span>
              </div>
            </div>
          </div>

          {/* Regional Cuisines */}
          <div className="space-y-20">
            {chineseCuisines.map((cuisine, cuisineIndex) => (
              <section key={cuisine.id} className="relative">
                {/* Cuisine Header */}
                <div className="text-center mb-12">
                  <div className={`inline-block bg-gradient-to-r ${getCuisineGradient(cuisineIndex)} bg-clip-text text-transparent`}>
                    <h2 className="text-4xl md:text-5xl font-light mb-4">{cuisine.name}</h2>
                  </div>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">{cuisine.region}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {cuisine.characteristics.slice(0, 3).map((char, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {char}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cuisine.famousDishes.map((dish) => (
                    <Card key={dish.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="h-48 relative">
                        <img
                          src={getDishImagePath(dish.slug, 'cover')}
                          alt={`${dish.name} - ${cuisine.name.replace(' Cuisine', '')}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        
                        {/* 文字区域 - 只在文字背后添加轻微阴影 */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-xl font-semibold drop-shadow-lg px-2 py-1 rounded" style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>{dish.name}</h3>
                        </div>
                        <div className="absolute top-4 right-4 backdrop-blur-sm rounded-full px-2 py-1" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                          <span className="text-gray-800 text-xs font-medium">{dish.price}</span>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {dish.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Star className="h-4 w-4" />
                            <span className="font-medium">Taste:</span>
                            <span>{dish.taste}</span>
                          </div>
                          {dish.destinations && dish.destinations.length > 0 && (
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <MapPin className="h-4 w-4" />
                              <span className="font-medium">Best in:</span>
                              <span>{dish.destinations.slice(0, 2).join(', ')}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {dish.ingredients.slice(0, 3).map((ingredient, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {ingredient}
                            </span>
                          ))}
                          {dish.ingredients.length > 3 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{dish.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                        
                        <Link href={`/food/${dish.slug}`}>
                          <Button className="w-full">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ))}

            {/* Local Snacks Section */}
            <section className="relative">
              <div className="text-center mb-12">
                <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  <h2 className="text-4xl md:text-5xl font-light mb-4">Local Specialties</h2>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Regional street food and local delicacies</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Street Food
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Regional Specialties
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Local Culture
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {localSnacks.map((snack) => (
                  <Card key={snack.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="h-48 relative">
                      <img
                        src={getDishImagePath(snack.slug, 'cover')}
                        alt={`${snack.name} - Local Specialty`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* 文字区域 - 只在文字背后添加轻微阴影 */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-semibold drop-shadow-lg px-2 py-1 rounded" style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>{snack.name}</h3>
                      </div>
                      <div className="absolute top-4 right-4 backdrop-blur-sm rounded-full px-2 py-1" style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
                        <span className="text-gray-800 text-xs font-medium">{snack.price}</span>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {snack.description}
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Star className="h-4 w-4" />
                          <span className="font-medium">Taste:</span>
                          <span>{snack.taste}</span>
                        </div>
                        {snack.destinations && snack.destinations.length > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">Best in:</span>
                            <span>{snack.destinations.slice(0, 2).join(', ')}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {snack.ingredients.slice(0, 3).map((ingredient, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {ingredient}
                          </span>
                        ))}
                        {snack.ingredients.length > 3 && (
                          <span className="text-gray-400 text-xs px-2 py-1">
                            +{snack.ingredients.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <Link href={`/food/${snack.slug}`}>
                        <Button className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                Ready to explore China's culinary heritage?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                From street vendors to Michelin-starred restaurants, discover where to find 
                the most authentic flavors across China's major cities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/destinations">
                  <Button size="lg" className="min-w-48">
                    Explore Destinations
                  </Button>
                </Link>
                <Link href="/travel-guide">
                  <Button variant="outline" size="lg" className="min-w-48">
                    Complete Travel Guide
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 