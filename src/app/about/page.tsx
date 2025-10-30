import { Card } from '@/components/ui/Card';
import { CTASection } from '@/components/sections/CTASection';
import { destinations } from '@/data/destinations';
import { attractions } from '@/data/attractions';
import { MapPin, Users, Calendar, Globe, Heart, Star, Code, Shield, Zap, Clock } from 'lucide-react';

export default function AboutPage() {
  // Calculate some statistics
  const totalDestinations = destinations.length;
  const totalAttractions = attractions.length;
  const totalCountries = [...new Set(destinations.map(d => d.country))].length;

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Comprehensive Coverage',
      description: 'Complete guides for all major destinations across China with detailed information',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Always Up-to-Date',
      description: 'Regularly updated content with the latest visa policies and travel requirements',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Insights',
      description: 'Practical tips from experienced travelers and local cultural experts',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Reliable Information',
      description: 'Verified and fact-checked content you can trust for your journey',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const stats = [
    { number: totalDestinations, label: 'Destinations Covered', icon: <MapPin className="h-6 w-6" /> },
    { number: totalAttractions, label: 'Attractions Featured', icon: <Star className="h-6 w-6" /> },
    { number: '50,000+', label: 'Monthly Visitors', icon: <Users className="h-6 w-6" /> },
    { number: '4.8/5', label: 'User Rating', icon: <Heart className="h-6 w-6" /> }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Travel Content Director',
      description: 'Former travel journalist with 8 years experience covering Asia-Pacific region',
      avatar: '👩‍💼'
    },
    {
      name: 'David Wang',
      role: 'Cultural Consultant',
      description: 'Beijing-based cultural expert and licensed tour guide since 2015',
      avatar: '👨‍🏫'
    },
    {
      name: 'Emily Zhang',
      role: 'Visa & Immigration Specialist',
      description: 'Immigration law expert helping travelers navigate China\'s visa requirements',
      avatar: '👩‍💻'
    },
    {
      name: 'Marco Rodriguez',
      role: 'Community Manager',
      description: 'Experienced traveler managing our community of international visitors',
      avatar: '👨‍💼'
    }
  ];

  const testimonials = [
    {
      text: "This guide made our first trip to China absolutely seamless. The visa information was spot-on!",
      author: "Jennifer Adams",
      location: "San Francisco, USA",
      rating: 5
    },
    {
      text: "Comprehensive and reliable. We used it throughout our 2-week journey across multiple cities.",
      author: "Hans Mueller",
      location: "Berlin, Germany", 
      rating: 5
    },
    {
      text: "The attraction details and transportation tips saved us so much time and money.",
      author: "Sophie Martin",
      location: "Paris, France",
      rating: 5
    }
  ];

  const timeline = [
    { year: '2023', event: 'Platform Launch', description: 'China Travel Guide officially launched with 10 major destinations' },
    { year: '2023', event: 'Expansion', description: 'Added comprehensive attraction database and transportation guides' },
    { year: '2024', event: 'Community Growth', description: 'Reached 50,000+ monthly active users from 80+ countries' },
    { year: '2024', event: 'Mobile Optimization', description: 'Full responsive design and mobile-first experience launched' },
    { year: '2025', event: 'Enhanced Experience', description: 'Launched advanced image gallery and improved SEO for better discovery' },
    { year: '2025', event: 'Global Reach', description: 'Expanded to serve travelers from 100+ countries with multilingual support' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            About China Travel Guide
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Your comprehensive digital companion for exploring the Middle Kingdom. We bridge cultures 
            and simplify travel through expertly curated, up-to-date information.
          </p>
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-1">
              <div className="bg-white rounded-xl px-6 py-3">
                <span className="text-gray-900 font-medium">Trusted by travelers worldwide since 2023</span>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To empower international travelers with comprehensive, accurate, and culturally-sensitive 
                information that transforms their China journey from daunting to delightful. We believe 
                every traveler deserves to experience China's rich heritage with confidence and ease.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through meticulous research, local partnerships, and continuous updates, we ensure our 
                content reflects the dynamic nature of modern China while honoring its timeless traditions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To become the world's most trusted and comprehensive resource for China travel, fostering 
                cross-cultural understanding and unforgettable experiences for millions of international visitors.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <p className="text-gray-800 italic">
                  "Building bridges between cultures, one traveler at a time."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className={`h-20 bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 text-center">Built with Modern Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Built with Next.js 15 and optimized for speed with static generation and edge deployment.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">
                Enterprise-grade security with 99.9% uptime guarantee and regular security updates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Source</h3>
              <p className="text-gray-600">
                Transparent development with community contributions welcome on our GitHub repository.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:w-1/2">
                    <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12 text-center">What Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <CTASection 
          title="Ready to Explore China?"
          description="Join thousands of travelers who trust China Travel Guide for their journey. Start planning your adventure today!"
          primaryButton={{
            text: "Start Planning",
            href: "/destinations",
            showIcon: true
          }}
          secondaryButton={{
            text: "Contact Us",
            href: "/about"
          }}
        />
      </div>
    </div>
  );
} 