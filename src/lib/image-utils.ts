/**
 * 图片处理工具函数
 * 用于自动缩放logo到不同尺寸
 */

// 图片类型定义 - 添加detail类型用于详情页面
export type ImageType = 'hero' | 'cover' | 'detail' | 'og';
export type ImageFormat = 'webp' | 'jpg' | 'png';

// 图片尺寸配置 - 添加detail类型
export const IMAGE_SIZES = {
  destinations: {
    hero: { width: 400, height: 300 },       // 首页展示
    cover: { width: 600, height: 400 },      // 列表页封面
    detail: { width: 1200, height: 400 },    // 详情页hero背景
    og: { width: 1200, height: 630 },        // 社交分享
  },
  attractions: {
    cover: { width: 500, height: 350 },      // 列表页封面
    detail: { width: 1200, height: 400 },    // 详情页hero背景
    og: { width: 1200, height: 630 },        // 社交分享
  }
} as const;

// 生成目的地图片路径
export function getDestinationImagePath(
  slug: string,
  type: ImageType,
  format: ImageFormat = 'webp'
): string {
  const basePath = '/images/destinations';
  
  switch (type) {
    case 'hero':
      return `${basePath}/hero/${slug}-hero.${format}`;
    case 'cover':
      return `${basePath}/covers/${slug}-cover.${format}`;
    case 'detail':
      return `${basePath}/details/${slug}-detail.${format}`;
    case 'og':
      return `${basePath}/og/${slug}-og.jpg`; // OG图片始终使用JPG
    default:
      return `${basePath}/covers/${slug}-cover.${format}`;
  }
}

// 生成景点图片路径
export function getAttractionImagePath(
  slug: string,
  type: ImageType,
  format: ImageFormat = 'webp'
): string {
  const basePath = '/images/attractions';
  
  switch (type) {
    case 'cover':
      return `${basePath}/covers/${slug}-cover.${format}`;
    case 'detail':
      return `${basePath}/details/${slug}-detail.${format}`;
    case 'og':
      return `${basePath}/og/${slug}-og.jpg`; // OG图片始终使用JPG
    default:
      return `${basePath}/covers/${slug}-cover.${format}`;
  }
}

// 生成占位符图片
export function getPlaceholderImage(
  width: number,
  height: number,
  text: string,
  bgColor: string = 'e5e7eb',
  textColor: string = '6b7280'
): string {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

// 获取图片完整信息
export function getImageInfo(
  type: 'destination' | 'attraction',
  slug: string,
  imageType: ImageType,
  title: string
) {
  const getPath = type === 'destination' ? getDestinationImagePath : getAttractionImagePath;
  const sizes = IMAGE_SIZES[type === 'destination' ? 'destinations' : 'attractions'];
  const size = sizes[imageType as keyof typeof sizes];
  
  return {
    src: getPath(slug, imageType),
    alt: `${title} - ${imageType} image`,
    width: size?.width || 600,
    height: size?.height || 400,
    placeholder: getPlaceholderImage(
      size?.width || 600,
      size?.height || 400,
      title
    )
  };
}

// 检查图片是否存在（用于回退到占位符）
export function getImageWithFallback(
  imagePath: string,
  fallbackPath: string,
  alt: string
) {
  return {
    src: imagePath,
    fallback: fallbackPath,
    alt
  };
}

// 生成响应式图片srcSet
export function generateSrcSet(
  basePath: string,
  sizes: number[]
): string {
  return sizes
    .map(size => {
      const path = basePath.replace(/\.(webp|jpg|png)$/, `@${size}w.$1`);
      return `${path} ${size}w`;
    })
    .join(', ');
}

// SEO优化的图片文件名验证
export function validateImageFileName(fileName: string): boolean {
  // 检查文件名是否符合SEO规范：小写、连字符分隔、无特殊字符
  const seoPattern = /^[a-z0-9-]+\.(webp|jpg|jpeg|png)$/i;
  return seoPattern.test(fileName);
}

// 批量生成图片路径配置 - 添加detail类型
export function generateImagePaths(slug: string, type: 'destination' | 'attraction') {
  const getPath = type === 'destination' ? getDestinationImagePath : getAttractionImagePath;
  
  if (type === 'destination') {
    return {
      hero: getDestinationImagePath(slug, 'hero'),
      cover: getDestinationImagePath(slug, 'cover'),
      detail: getDestinationImagePath(slug, 'detail'),
      og: getDestinationImagePath(slug, 'og')
    };
  } else {
    return {
      cover: getAttractionImagePath(slug, 'cover'),
      detail: getAttractionImagePath(slug, 'detail'),
      og: getAttractionImagePath(slug, 'og')
    };
  }
} 