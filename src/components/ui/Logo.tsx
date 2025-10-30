'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'horizontal';
  className?: string;
  showText?: boolean;
  textColor?: string;
}

const logoSizes = {
  // 基于400×400的正方形比例 (1:1)
  sm: { width: 24, height: 24 },   // 小尺寸
  md: { width: 32, height: 32 },   // 中等尺寸
  lg: { width: 40, height: 40 }    // 大尺寸
};

export function Logo({ 
  size = 'md', 
  variant = 'icon', 
  className,
  showText = true,
  textColor = 'text-blue-600'
}: LogoProps) {
  const { width, height } = logoSizes[size];
  const [imageError, setImageError] = useState(false);
  
  // 临时使用文字logo作为fallback
  const FallbackLogo = () => (
    <div className={cn(
      'font-bold rounded-sm flex items-center justify-center',
      size === 'sm' && 'text-lg',
      size === 'md' && 'text-xl',
      size === 'lg' && 'text-2xl',
      textColor
    )}>
      🇨🇳
    </div>
  );

  // 根据variant选择不同的logo路径
  const getLogoPath = () => {
    switch (variant) {
      case 'horizontal':
        return '/logos/logo.png';  // 现在是正方形，所以都用同一个
      case 'full':
        return '/logos/logo.png';
      case 'icon':
        return '/logos/logo.png';  // 正方形logo本身就是图标
      default:
        return '/logos/logo.png';  // 默认使用主logo
    }
  };

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      {/* 尝试加载SVG logo，失败时显示fallback */}
      <div className="relative">
        {imageError ? (
          <FallbackLogo />
        ) : (
          <Image
            src={getLogoPath()}
            alt="China Travel Guide Logo"
            width={width}
            height={height}
            className="object-contain"
            onError={() => {
              setImageError(true);
            }}
          />
        )}
      </div>
      
      {/* 品牌名文字 */}
      {showText && (
        <span className={cn(
          'font-semibold',
          size === 'sm' && 'text-base',
          size === 'md' && 'text-lg',
          size === 'lg' && 'text-xl',
          'text-gray-900'
        )}>
          China Travel Guide
        </span>
      )}
    </div>
  );
}

// 特殊用途的Logo组件
export function LogoIcon({ size = 'md', className }: Pick<LogoProps, 'size' | 'className'>) {
  return <Logo size={size} variant="icon" showText={false} className={className} />;
}

export function LogoHorizontal({ size = 'md', className }: Pick<LogoProps, 'size' | 'className'>) {
  return <Logo size={size} variant="horizontal" showText={false} className={className} />;
} 