'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getPlaceholderImage } from '@/lib/image-utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackText?: string;
  fallbackColor?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fill,
  className,
  sizes,
  priority = false,
  fallbackText,
  fallbackColor = 'e5e7eb',
  onLoad,
  onError,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // 如果主图片加载失败，使用占位符
    if (imgSrc !== src) {
      // 已经是占位符了，不再重试
      onError?.();
      return;
    }
    
    // 生成占位符图片
    const placeholderSrc = getPlaceholderImage(
      width || 400,
      height || 300,
      fallbackText || alt,
      fallbackColor
    );
    
    setImgSrc(placeholderSrc);
    onError?.();
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className: `${className} ${isLoading ? 'animate-pulse bg-gray-200' : ''}`,
    onLoad: handleLoad,
    onError: handleError,
    sizes,
    priority,
    ...(fill ? { fill: true } : { width, height }),
  };

  return (
    <>
      <Image {...imageProps} />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {hasError && imgSrc === src && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-xs">Image loading...</p>
          </div>
        </div>
      )}
    </>
  );
}

// 针对目的地图片的特化组件
export function DestinationImage({
  slug,
  title,
  type = 'cover',
  className = '',
  priority = false,
  sizes,
}: {
  slug: string;
  title: string;
  type?: 'hero' | 'cover' | 'detail' | 'og';
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const { getDestinationImagePath, IMAGE_SIZES } = require('@/lib/image-utils');
  const imagePath = getDestinationImagePath(slug, type);
  const size = IMAGE_SIZES.destinations[type];

  return (
    <ImageWithFallback
      src={imagePath}
      alt={`${title} - ${type} image`}
      width={size.width}
      height={size.height}
      className={className}
      priority={priority}
      fallbackText={title}
      sizes={sizes}
    />
  );
}

// 针对景点图片的特化组件
export function AttractionImage({
  slug,
  title,
  type = 'cover',
  className = '',
  priority = false,
  sizes,
}: {
  slug: string;
  title: string;
  type?: 'cover' | 'detail' | 'og';
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const { getAttractionImagePath, IMAGE_SIZES } = require('@/lib/image-utils');
  const imagePath = getAttractionImagePath(slug, type);
  const size = IMAGE_SIZES.attractions[type];

  return (
    <ImageWithFallback
      src={imagePath}
      alt={`${title} - ${type} image`}
      width={size.width}
      height={size.height}
      className={className}
      priority={priority}
      fallbackText={title}
      sizes={sizes}
    />
  );
} 