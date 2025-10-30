import { HeroSection } from '@/components/sections/HeroSection';
import { CTASection } from '@/components/sections/CTASection';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import { attractions } from '@/data/attractions';
import { MapPin, Plane, Train, Utensils, Phone, MessageCircle, ArrowRight, Star, Clock, Shield, Globe, Users, Heart, BookOpen, Smartphone, Compass } from 'lucide-react';

export default function Home() {
  const quickAccessItems = [
    {
      icon: <MapPin className="h-7 w-7" />,
      title: "Discover Destinations",
      description: "Explore China's most captivating cities and regions",
      href: "/destinations",
      gradient: "from-emerald-500 to-teal-600",
      delay: "0ms"
    },
    {
      icon: <Star className="h-7 w-7" />,
      title: "Top Attractions",
      description: "Must-see landmarks and hidden cultural gems",
      href: "/attractions", 
      gradient: "from-blue-500 to-indigo-600",
      delay: "100ms"
    },
    {
      icon: <Plane className="h-7 w-7" />,
      title: "Travel Guide",
      description: "Visa requirements and practical travel tips",
      href: "/travel-guide",
      gradient: "from-purple-500 to-pink-600",
      delay: "200ms"
    },
    {
      icon: <Utensils className="h-7 w-7" />,
      title: "Food & Culture",
      description: "Authentic cuisine and cultural experiences",
      href: "/food",
      gradient: "from-orange-500 to-red-600",
      delay: "300ms"
    }
  ];

  const featuredArticles = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "5 Must-Have Apps for China Travel",
      description: "Navigate, pay, and communicate like a local with these essential mobile apps.",
      href: "/info", // a generic link for now
      category: "Technology",
      color: "blue"
    },
    {
      icon: <Train className="h-8 w-8" />,
      title: "Beginner's Guide to High-Speed Rail",
      description: "Everything you need to know about booking and riding China's incredible bullet trains.",
      href: "/transportation",
      category: "Transportation",
      color: "green"
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "First-Timer's Food Tour",
      description: "From street food to fine dining, a guide to navigating China's diverse culinary landscape.",
      href: "/food",
      category: "Cuisine",
      color: "purple"
    }
  ];

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Comprehensive Coverage",
      description: "Everything you need to know about traveling in China, from visa requirements to local customs.",
      color: "blue"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Always Current",
      description: "Regularly updated information ensuring you have the latest travel policies and requirements.",
      color: "green" 
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Information",
      description: "Verified content from local experts and experienced travelers you can rely on.",
      color: "purple"
    }
  ];

  const stats = [
    { number: destinations.length, label: "Cities Covered", icon: <MapPin className="h-5 w-5" /> },
    { number: attractions.length, label: "Attractions", icon: <Star className="h-5 w-5" /> },
    { number: "50K+", label: "Happy Travelers", icon: <Users className="h-5 w-5" /> },
    { number: "4.9", label: "User Rating", icon: <Heart className="h-5 w-5" /> }
  ];

  const featuredDestinations = destinations.slice(0, 3);
  
  // 城市emoji映射
  const cityEmojis: { [key: string]: string } = {
    'beijing': '🏛️',
    'shanghai': '🏙️',
    'guangzhou': '🌆',
    'xian': '🗿',
    'chengdu': '🐼',
    'hangzhou': '🌊'
  };

  return (
    <div>
      <HeroSection />

      {/* New Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
             <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Numbers</h2>
             <p className="mt-2 text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">
               A Trusted & Comprehensive Guide
             </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-extrabold text-gray-900">{stat.number}</div>
                <p className="mt-1 text-base text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Access Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find what you need quickly and easily
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickAccessItems.map((item, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden"
                style={{ animationDelay: item.delay }}
              >
                <div className={`h-24 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300"></div>
                  <div className="text-white relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link href={item.href}>
                    <Button className="w-full bg-gray-900 hover:bg-black text-white rounded-xl py-3 group-hover:bg-blue-600 transition-all duration-300">
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Practical Guides & Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice to make your travel smoother and more enjoyable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Link key={index} href={article.href}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden text-left h-full flex flex-col">
                  <div className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${
                      article.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      article.color === 'green' ? 'from-green-400 to-green-600' :
                      'from-purple-400 to-purple-600'
                    } flex items-center justify-center shadow-lg text-white`}>
                      {article.icon}
                    </div>
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">{article.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                  <div className="mt-auto p-8 pt-0">
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose China Travel Guide?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your trusted companion for exploring the Middle Kingdom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
                  feature.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  feature.color === 'green' ? 'from-green-400 to-green-600' :
                  'from-purple-400 to-purple-600'
                } flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
