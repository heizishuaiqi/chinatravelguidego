/**
 * 食物图片路径工具函数（精简版）
 * 只包含网站实际使用的图片类型
 */

export type FoodImageType = 'cover' | 'detail' | 'og';

/**
 * 获取菜品图片路径
 * @param dishSlug 菜品slug
 * @param imageType 图片类型
 * @returns 图片路径
 */
export function getDishImagePath(
  dishSlug: string, 
  imageType: FoodImageType
): string {
  const basePath = '/images/food/dishes';
  
  switch (imageType) {
    case 'cover':
      return `${basePath}/covers/${dishSlug}-cover.WEBP`;
    case 'detail':
      return `${basePath}/details/${dishSlug}-detail.WEBP`;
    case 'og':
      return `${basePath}/og/${dishSlug}-og.WEBP`;
    default:
      throw new Error(`Unknown image type: ${imageType}`);
  }
}

/**
 * 获取图片备用路径（如果主图片不存在）
 * @param dishSlug 菜品slug
 * @param imageType 图片类型
 * @returns 备用图片路径
 */
export function getFallbackImagePath(
  dishSlug: string, 
  imageType: FoodImageType
): string {
  // 根据菜品所属菜系提供通用备用图片
  const cuisineMap: { [key: string]: string } = {
    'mapo-tofu': 'sichuan',
    'kung-pao-chicken': 'sichuan',
    'sichuan-hot-pot': 'sichuan',
    'dan-dan-noodles': 'sichuan',
    'dim-sum': 'cantonese',
    'roast-duck': 'cantonese',
    'wonton-noodles': 'cantonese',
    'peking-duck': 'beijing',
    'jiaozi': 'beijing',
    'zhajiangmian': 'beijing',
    'jianbing': 'beijing',
    'xiaolongbao': 'shanghai',
    'shengjianbao': 'shanghai',
    'hong-shao-rou': 'shanghai',
    'maoxuewang': 'hunan',
    'orange-chicken': 'hunan',
    'stinky-tofu': 'hunan',
    'roujiamo': 'local',
    'hot-dry-noodles': 'local',
    'goubuli-baozi': 'local',
    'guilin-rice-noodles': 'local',
    'crossing-bridge-noodles': 'local',
    'duck-blood-vermicelli': 'local',
    'tsingtao-beer-experience': 'local'
  };

  const cuisine = cuisineMap[dishSlug] || 'local';
  
  // 备用图片路径（可以是通用的占位图）
  switch (imageType) {
    case 'cover':
    case 'detail':
      return `/images/ui/placeholders/${cuisine}-cuisine-placeholder.WEBP`;
    case 'og':
      return `/images/ui/placeholders/food-og-placeholder.WEBP`;
    default:
      return '/images/ui/placeholders/food-placeholder.WEBP';
  }
}

/**
 * 生成完整的图片对象，包含主图片和备用图片
 * @param dishSlug 菜品slug
 * @param imageType 图片类型
 * @returns 图片对象
 */
export function createFoodImageObject(
  dishSlug: string, 
  imageType: FoodImageType
) {
  return {
    src: getDishImagePath(dishSlug, imageType),
    fallback: getFallbackImagePath(dishSlug, imageType),
    alt: `${dishSlug.replace(/-/g, ' ')} ${imageType}`,
  };
}

/**
 * 获取所有菜品的封面图片映射
 * @param dishSlugs 菜品slug数组
 * @returns 图片映射对象
 */
export function getAllDishCoverImages(dishSlugs: string[]) {
  return dishSlugs.reduce((acc, slug) => {
    acc[slug] = createFoodImageObject(slug, 'cover');
    return acc;
  }, {} as Record<string, ReturnType<typeof createFoodImageObject>>);
}

/**
 * 获取所有菜品的详情图片映射
 * @param dishSlugs 菜品slug数组
 * @returns 图片映射对象
 */
export function getAllDishDetailImages(dishSlugs: string[]) {
  return dishSlugs.reduce((acc, slug) => {
    acc[slug] = createFoodImageObject(slug, 'detail');
    return acc;
  }, {} as Record<string, ReturnType<typeof createFoodImageObject>>);
}

/**
 * 获取所有菜品的OG图片映射
 * @param dishSlugs 菜品slug数组
 * @returns 图片映射对象
 */
export function getAllDishOgImages(dishSlugs: string[]) {
  return dishSlugs.reduce((acc, slug) => {
    acc[slug] = createFoodImageObject(slug, 'og');
    return acc;
  }, {} as Record<string, ReturnType<typeof createFoodImageObject>>);
}

/**
 * 验证图片路径是否存在
 * @param imagePath 图片路径
 * @returns 是否存在
 */
export function validateImagePath(imagePath: string): boolean {
  // 这里可以添加图片存在性检查逻辑
  // 简单起见，只检查路径格式
  return imagePath.includes('/images/food/dishes/') && 
         (imagePath.endsWith('.WEBP') || imagePath.endsWith('.webp'));
}

/**
 * 获取菜品中文名称（用于alt文本）
 * @param slug 菜品slug
 * @returns 中文名称
 */
export function getDishChineseName(slug: string): string {
  const chineseNames: { [key: string]: string } = {
    'mapo-tofu': '麻婆豆腐',
    'kung-pao-chicken': '宫保鸡丁',
    'sichuan-hot-pot': '四川火锅',
    'dan-dan-noodles': '担担面',
    'dim-sum': '点心',
    'roast-duck': '烧鸭',
    'wonton-noodles': '云吞面',
    'peking-duck': '北京烤鸭',
    'jiaozi': '饺子',
    'zhajiangmian': '炸酱面',
    'jianbing': '煎饼',
    'xiaolongbao': '小笼包',
    'shengjianbao': '生煎包',
    'hong-shao-rou': '红烧肉',
    'maoxuewang': '毛血旺',
    'orange-chicken': '湘式橙味鸡',
    'stinky-tofu': '臭豆腐',
    'roujiamo': '肉夹馍',
    'hot-dry-noodles': '热干面',
    'goubuli-baozi': '狗不理包子',
    'guilin-rice-noodles': '桂林米粉',
    'crossing-bridge-noodles': '过桥米线',
    'duck-blood-vermicelli': '鸭血粉丝汤',
    'tsingtao-beer-experience': '青岛啤酒体验'
  };
  
  return chineseNames[slug] || slug.replace(/-/g, ' ');
} 