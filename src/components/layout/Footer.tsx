'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <Link 
            href="/destinations" 
            className={`transition-colors text-sm font-medium relative ${
              isActive('/destinations') 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Destinations
          </Link>
          <Link 
            href="/attractions" 
            className={`transition-colors text-sm font-medium relative ${
              isActive('/attractions') 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Attractions
          </Link>
          <Link 
            href="/travel-guide" 
            className={`transition-colors text-sm font-medium relative ${
              isActive('/travel-guide') 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Travel Guide
          </Link>
          <Link 
            href="/food" 
            className={`transition-colors text-sm font-medium relative ${
              isActive('/food') 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Food & Culture
          </Link>
          <Link 
            href="/about" 
            className={`transition-colors text-sm font-medium relative ${
              isActive('/about') 
                ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            About
          </Link>
        </div>

        {/* Logo and Description */}
        <div className="text-center mb-8">
          <div className="mb-4 flex justify-center">
            <Link href="/" className="transition-transform hover:scale-105">
              <Logo size="md" variant="full" showText={true} textColor="text-gray-700" />
            </Link>
          </div>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Your comprehensive guide to traveling in China. Essential information
            for foreign visitors to explore China with confidence.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-100 pt-8">
          <p className="text-xs text-gray-400">
            © 2025 China Travel Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 