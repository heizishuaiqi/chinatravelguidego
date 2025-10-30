'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { destinations } from '@/data/destinations';
import { getDestinationImagePath, getPlaceholderImage } from '@/lib/image-utils';

// 选取前6个目的地作为画廊内容
const galleryDestinations = destinations.slice(0, 6).map((dest, index) => ({
  ...dest,
  // 使用标准化的图片路径函数
  heroImage: getDestinationImagePath(dest.slug || dest.id, 'hero'),
  // 如果图片不存在，回退到占位符
  fallbackImage: getPlaceholderImage(
    400, 
    300, 
    dest.title,
    ['f87171','60a5fa','fb923c','4ade80','ec4899','22d3ee'][index]
  ),
  rotate: [-5, 3, 6, -4, 5, -3][index],
}));

// 定义图片位置
const imagePositions = [
  { top: '5%', left: '10%', width: '40%' },
  { top: '0%', left: '50%', width: '45%' },
  { top: '30%', left: '65%', width: '30%' },
  { top: '55%', left: '5%', width: '35%' },
  { top: '65%', left: '50%', width: '38%' },
  { top: '35%', left: '25%', width: '33%' },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-8rem)]">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8 z-10">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
              Explore China
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                Visa-Free
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Your simple, accurate, and up-to-date guide for international visitors. Discover China&apos;s most beautiful destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/destinations">
                <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 rounded-2xl px-8 py-4 group">
                  Explore Destinations
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/visa">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 rounded-2xl px-8 py-4">
                  Check Visa Policy
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Visual - Creative Image Collage */}
          <div className="relative h-[500px] lg:h-[600px]">
            {galleryDestinations.map((destination, index) => (
              <Link href={`/destinations/${destination.slug}`} key={destination.id}>
                <motion.div
                  className="absolute cursor-pointer"
                  style={imagePositions[index]}
                  animate={{
                    y: [0, -8, 0, 8, 0],
                    x: [0, 4, 0, -4, 0],
                    rotate: [destination.rotate, destination.rotate - 1.5, destination.rotate, destination.rotate + 1.5, destination.rotate],
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 20,
                    boxShadow: '0px 20px 40px rgba(0,0,0,0.2)'
                  }}
                >
                  <img
                    src={destination.heroImage || destination.fallbackImage}
                    alt={`${destination.title} - Beautiful destination in ${destination.province}, China featuring ${destination.highlights[0]}`}
                    className="w-full h-auto rounded-xl shadow-2xl object-cover"
                  />
                </motion.div>
              </Link>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
} 