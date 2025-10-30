import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { ArrowRight, FileText, Train, Info, Phone, CreditCard, Wifi } from 'lucide-react';

export default function TravelGuidePage() {
  const guideCategories = [
    {
      id: 'visa',
      title: 'Visa Requirements',
      description: 'Check visa policies and application requirements for your country',
      icon: <FileText className="h-8 w-8" />,
      href: '/visa',
      color: 'from-blue-500 to-indigo-600',
      highlights: ['Visa-free policies', 'Application process', 'Required documents', 'Processing times']
    },
    {
      id: 'transportation', 
      title: 'Transportation',
      description: 'Navigate China efficiently with our comprehensive transport guides',
      icon: <Train className="h-8 w-8" />,
      href: '/transportation',
      color: 'from-green-500 to-teal-600',
      highlights: ['High-speed trains', 'Metro systems', 'Domestic flights', 'Bus networks']
    },
    {
      id: 'practical',
      title: 'Practical Information',
      description: 'Essential tips for daily life and cultural understanding in China',
      icon: <Info className="h-8 w-8" />,
      href: '/practical',
      color: 'from-purple-500 to-pink-600',
      highlights: ['Currency & payment', 'Internet & VPN', 'Language basics', 'Cultural etiquette']
    },
    {
      id: 'emergency',
      title: 'Emergency Information',
      description: 'Important contacts and procedures for emergency situations',
      icon: <Phone className="h-8 w-8" />,
      href: '/emergency',
      color: 'from-red-500 to-orange-600',
      highlights: ['Emergency numbers', 'Hospital locations', 'Embassy contacts', 'Safety tips']
    }
  ];

  const quickTips = [
    {
      category: 'Payment',
      icon: <CreditCard className="h-6 w-6" />,
      tips: [
        'WeChat Pay and Alipay are widely used',
        'Always carry some cash for small vendors',
        'International credit cards work in major hotels/malls',
        'Download payment apps before arrival'
      ]
    },
    {
      category: 'Internet',
      icon: <Wifi className="h-6 w-6" />,
      tips: [
        'VPN recommended for accessing blocked sites',
        'Free WiFi available in most hotels and malls',
        'Consider buying a local SIM card',
        'Download offline maps and translation apps'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Travel Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Essential information and practical tips for traveling in China
          </p>
        </div>

        {/* Guide Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {guideCategories.map((category) => (
            <Card key={category.id} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`h-24 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <Link href={category.href}>
                  <Button className="w-full bg-gray-900 hover:bg-black text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Quick Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quickTips.map((tip, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{tip.category}</h3>
                </div>
                <ul className="space-y-2">
                  {tip.tips.map((tipText, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-600">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{tipText}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Quick Reference */}
        <div className="bg-red-50 rounded-3xl p-8 md:p-12 border border-red-100">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Emergency Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">110</div>
              <div className="text-sm text-gray-600">Police</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">119</div>
              <div className="text-sm text-gray-600">Fire</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">120</div>
              <div className="text-sm text-gray-600">Medical</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-red-600">12301</div>
              <div className="text-sm text-gray-600">Tourist Hotline</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 