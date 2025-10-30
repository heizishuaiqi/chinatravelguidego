import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, MapPin, Camera, FileText } from 'lucide-react';

export default function PlanYourTripPage() {
  const planningSteps = [
    {
      id: 'visa',
      title: 'Visa Guide',
      description: 'Learn about visa requirements and application processes for your country',
      icon: <FileText className="h-8 w-8" />,
      href: '/visa',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'destinations',
      title: 'Choose Destinations',
      description: 'Explore popular destinations and plan your route across China',
      icon: <MapPin className="h-8 w-8" />,
      href: '/destinations',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'attractions',
      title: 'Find Attractions',
      description: 'Discover must-see attractions and hidden gems in each destination',
      icon: <Camera className="h-8 w-8" />,
      href: '/attractions',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Plan Your Trip to China
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start planning your perfect journey to China with our comprehensive guides and resources
          </p>
        </div>

        {/* Planning Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {planningSteps.map((step, index) => (
            <Card key={step.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`h-32 bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-sm text-gray-500">Step {index + 1}</span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                <Link href={step.href}>
                  <Button className="w-full bg-gray-900 hover:bg-black text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">🕐 Best Time to Visit</h3>
              <p className="text-gray-600 leading-relaxed">
                Spring (March-May) and autumn (September-November) offer the best weather for most destinations. 
                Summer can be hot and humid, while winter is ideal for northern destinations.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">📅 Duration</h3>
              <p className="text-gray-600 leading-relaxed">
                Allow at least 7-10 days for a first visit. Two weeks is ideal for covering major destinations like 
                Beijing, Shanghai, and Xi'an with time to experience local culture.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">💰 Budget Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Budget varies by destination and travel style. Tier 1 cities like Beijing and Shanghai are more 
                expensive, while smaller cities offer great value for money.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">🎒 What to Pack</h3>
              <p className="text-gray-600 leading-relaxed">
                Pack layers for varying weather, comfortable walking shoes, and essential electronics. 
                Don't forget your passport, visa, and travel insurance documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 