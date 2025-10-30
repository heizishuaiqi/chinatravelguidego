'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CardImageProps {
  slug: string;
  title: string;
  description?: string;
  type: 'destination' | 'attraction';
  imageType?: 'cover' | 'detail';
  gradientClass?: string;
  className?: string;
}

export function CardImage({ 
  slug, 
  title, 
  description,
  type, 
  imageType = 'cover',
  gradientClass,
  className = ''
}: CardImageProps) {
  const [hasError, setHasError] = useState(false);
  const [fallbackUsed, setFallbackUsed] = useState(false);
  
  if (!slug) {
    return null;
  }
  
  // 构建图片路径
  const basePath = type === 'destination' ? '/images/destinations' : '/images/attractions';
  const primaryImagePath = `${basePath}/${imageType}s/${slug}-${imageType}.WEBP`;
  const fallbackImagePath = imageType === 'cover' 
    ? `${basePath}/details/${slug}-detail.WEBP`
    : `${basePath}/covers/${slug}-cover.WEBP`;
  
  const handleError = () => {
    if (!fallbackUsed) {
      setFallbackUsed(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };
  
  // 如果两个图片都失败了，显示渐变色背景
  if (hasError && gradientClass) {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
        <div className="flex items-center justify-center h-full text-white text-6xl font-bold opacity-20">
          {title.charAt(0)}
        </div>
      </div>
    );
  }

  return (
    <Image
      src={fallbackUsed ? fallbackImagePath : primaryImagePath}
      alt={description ? `${title} - ${description}` : title}
      fill
      className={`object-cover group-hover:scale-105 transition-transform duration-300 ${className}`}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
      onError={handleError}
    />
  );
}

