'use client';

import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CardImage } from '@/components/ui/CardImage';
import { attractions } from '@/data/attractions';
import { getCategoryGradient, getCategoryEmoji } from '@/lib/constants';
import { MapPin, Star, Clock, DollarSign, Search, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import Link from 'next/link';

export default function AttractionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDestination, setSelectedDestination] = useState('all');
  // Category labels
  const categoryLabels: Record<string, string> = {
    'Historical Site': 'Historical',
    'Religious Site': 'Religious',
    'Scenic Area': 'Scenic',
    'Garden': 'Garden',
    'Landmark': 'Landmark',
    'Museum': 'Museum',
    'Cultural Site': 'Cultural',
    'Natural Site': 'Natural',
  };

  // Get unique categories and destinations
  const allCategories = useMemo(() => 
    [...new Set(attractions.map(a => a.category))].sort(), 
    []
  );
  const allDestinations = useMemo(() => 
    [...new Set(attractions.map(a => a.destination))].sort(), 
    []
  );

  // Filter attractions based on search and category
  const filteredAttractions = useMemo(() => {
    return attractions.filter(attraction => {
      const matchesSearch = attraction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           (attraction.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      const matchesCategory = selectedCategory === 'all' || attraction.category === selectedCategory;
      const matchesDestination = selectedDestination === 'all' || attraction.destination === selectedDestination;
      
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [searchTerm, selectedCategory, selectedDestination]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Must-See Attractions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover China&apos;s most iconic landmarks and hidden gems
          </p>
          
          {/* Search and Filter Controls */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              {/* Search Box */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search attractions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[160px]"
                >
                  <option value="all">All Categories</option>
                  {allCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Destination Filter */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white min-w-[160px]"
                >
                  <option value="all">All Destinations</option>
                  {allDestinations.map(destination => (
                    <option key={destination} value={destination}>{destination}</option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Results Summary and Clear Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500 text-center sm:text-left">
                Showing {filteredAttractions.length} of {attractions.length} attractions
                {searchTerm && <span> matching &quot;{searchTerm}&quot;</span>}
                {selectedCategory !== 'all' && <span> in {selectedCategory}</span>}
                {selectedDestination !== 'all' && <span> from {selectedDestination}</span>}
              </div>
              
              {(searchTerm || selectedCategory !== 'all' || selectedDestination !== 'all') && (
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDestination('all');
                  }}
                  className="text-sm text-blue-600 hover:text-blue-800 underline"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredAttractions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏛️</div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">No attractions found</h3>
            <p className="text-gray-500">
              {searchTerm || selectedCategory !== 'all' || selectedDestination !== 'all' 
                ? 'Try adjusting your search or filters' 
                : 'Check back soon for more amazing destinations!'
              }
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {filteredAttractions.map((attraction, index) => {
            const gradientClass = getCategoryGradient(attraction.category);
            const categoryEmoji = getCategoryEmoji(attraction.category);
            const categoryLabel = categoryLabels[attraction.category] || attraction.category;
            
            return (
              <Card key={attraction.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                {/* Image Section */}
                <div className="relative h-52 md:h-48 overflow-hidden">
                  <CardImage 
                    slug={attraction.slug}
                    title={attraction.title}
                    description={attraction.description}
                    type="attraction"
                    gradientClass={gradientClass}
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-xs opacity-80 mb-1">{attraction.destination}</div>
                    <div className="text-xl font-semibold line-clamp-2">{attraction.title}</div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="flex items-center text-white text-sm">
                      <Star className="h-3 w-3 fill-current mr-1" />
                      <span>{attraction.rating}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {attraction.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-2" />
                      <span className="line-clamp-1">{attraction.openTime}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <DollarSign className="h-3 w-3 mr-2" />
                      <span>{attraction.ticketPrice}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      <span className="mr-1">{categoryEmoji}</span>
                      {categoryLabel}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{attraction.destination}</span>
                    </div>
                  </div>

                  <Link href={`/attractions/${attraction.slug}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
        )}

        {/* Travel Tips Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">Visiting Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎫</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Ticket Purchase</h3>
              <p className="text-gray-600 leading-relaxed">
                Book tickets online in advance, especially for popular attractions. Some attractions have seasonal pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Transportation</h3>
              <p className="text-gray-600 leading-relaxed">
                Most attractions can be reached by metro or public bus, some require tourist shuttle buses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Best Time</h3>
              <p className="text-gray-600 leading-relaxed">
                Avoid holidays and weekends. Early morning visits generally have fewer crowds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold mb-3 text-gray-900">Guide Services</h3>
              <p className="text-gray-600 leading-relaxed">
                Consider using audio guides or hiring tour guides to learn about the historical and cultural background.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 