/**
 * 共享的颜色和样式配置
 */

// Gradient 颜色配置
export const GRADIENT_COLORS = {
  // 主要渐变色
  blue: 'from-blue-500 to-indigo-600',
  green: 'from-green-500 to-teal-600',
  purple: 'from-purple-500 to-pink-600',
  red: 'from-red-500 to-orange-600',
  orange: 'from-orange-500 to-red-600',
  teal: 'from-teal-500 to-blue-600',
  cyan: 'from-cyan-500 to-blue-600',
  indigo: 'from-indigo-500 to-purple-600',
  pink: 'from-rose-500 to-pink-600',
  amber: 'from-amber-500 to-orange-600',
  emerald: 'from-emerald-500 to-teal-600',
  yellow: 'from-yellow-500 to-amber-600',
  
  // 目的地专用渐变色（按城市顺序）
  destinations: [
    'from-blue-500 to-purple-600',     // Beijing
    'from-green-500 to-teal-600',      // Shanghai  
    'from-orange-500 to-red-600',      // Guangzhou
    'from-purple-500 to-pink-600',     // Shenzhen
    'from-teal-500 to-blue-600',       // Chengdu
    'from-amber-500 to-orange-600',    // Xi'an
    'from-rose-500 to-purple-600',     // Hangzhou
    'from-cyan-500 to-blue-600',       // Suzhou
    'from-indigo-500 to-purple-600',   // Nanjing
    'from-emerald-500 to-teal-600',    // Chongqing
    'from-yellow-500 to-amber-600',    // Guilin
    'from-blue-500 to-cyan-600',       // Xiamen
    'from-green-500 to-emerald-600',   // Qingdao
    'from-purple-500 to-indigo-600',   // Dalian
    'from-orange-500 to-amber-600',    // Kunming
    'from-pink-500 to-rose-600',       // Tianjin
    'from-teal-500 to-cyan-600',       // Wuhan
    'from-indigo-500 to-blue-600',     // Lhasa
  ],
  
  // 景点分类渐变色
  categories: {
    'Historical Site': 'from-amber-500 to-orange-600',
    'Religious Site': 'from-purple-500 to-pink-600',
    'Scenic Area': 'from-green-500 to-teal-600',
    'Garden': 'from-emerald-500 to-green-600',
    'Landmark': 'from-blue-500 to-purple-600',
    'Museum': 'from-indigo-500 to-purple-600',
    'Cultural Site': 'from-rose-500 to-pink-600',
    'Natural Site': 'from-cyan-500 to-blue-600',
    'Wildlife': 'from-green-500 to-emerald-600',
    'Cultural Street': 'from-orange-500 to-red-600',
    'Theme Park': 'from-purple-500 to-pink-600',
    'Beach': 'from-cyan-500 to-blue-600',
    'Island': 'from-teal-500 to-cyan-600',
    'Historic Town': 'from-amber-500 to-orange-600',
    'Historic Area': 'from-rose-500 to-purple-600',
    'Palace': 'from-purple-500 to-indigo-600',
    'Historic Tower': 'from-blue-500 to-indigo-600',
    'Natural Area': 'from-green-500 to-teal-600',
    'Natural Wonder': 'from-emerald-500 to-green-600',
    'Scenic Cruise': 'from-cyan-500 to-blue-600',
  },
  
  // 美食菜系渐变色
  cuisines: [
    'from-red-500 to-orange-600',      // Sichuan - spicy red
    'from-green-500 to-emerald-600',   // Cantonese - fresh green
    'from-yellow-500 to-amber-600',    // Beijing - imperial yellow
    'from-blue-500 to-cyan-600',       // Shanghai - elegant blue
    'from-purple-500 to-pink-600',     // Hunan - bold purple
  ]
} as const;

// 类别图标 emoji 配置
export const CATEGORY_EMOJIS = {
  'Historical Site': '🏛️',
  'Religious Site': '🕌',
  'Scenic Area': '🌅',
  'Garden': '🌺',
  'Landmark': '🗼',
  'Museum': '🏛️',
  'Cultural Site': '🎭',
  'Natural Site': '🏞️',
  'Wildlife': '🐼',
  'Cultural Street': '🏮',
  'Theme Park': '🎡',
  'Beach': '🏖️',
  'Island': '🏝️',
  'Historic Town': '🏘️',
  'Historic Area': '🏛️',
  'Palace': '👑',
  'Historic Tower': '🗼',
  'Natural Area': '🌲',
  'Natural Wonder': '⛰️',
  'Scenic Cruise': '⛵',
} as const;

// 页面尺寸配置
export const PAGE_SIZES = {
  header: {
    large: 'text-5xl md:text-6xl',
    default: 'text-4xl md:text-5xl',
    compact: 'text-3xl md:text-4xl',
  },
  spacing: {
    large: 'mb-20',
    default: 'mb-16',
    compact: 'mb-12',
  }
} as const;

// 通用的响应式最大宽度
export const MAX_WIDTHS = {
  content: 'max-w-7xl',
  narrow: 'max-w-4xl',
  text: 'max-w-3xl',
  reading: 'max-w-2xl',
} as const;

// 动画延迟配置
export const ANIMATION_DELAYS = {
  stagger: (index: number) => `${index * 100}ms`,
  slow: '300ms',
  normal: '200ms',
  fast: '100ms',
} as const;

// 辅助函数：获取渐变色
export function getGradientByIndex(index: number, type: 'destinations' | 'cuisines' = 'destinations'): string {
  const gradients = GRADIENT_COLORS[type];
  return gradients[index % gradients.length];
}

// 辅助函数：获取类别渐变色
export function getCategoryGradient(category: string): string {
  return GRADIENT_COLORS.categories[category as keyof typeof GRADIENT_COLORS.categories] || GRADIENT_COLORS.blue;
}

// 辅助函数：获取类别 emoji
export function getCategoryEmoji(category: string): string {
  return CATEGORY_EMOJIS[category as keyof typeof CATEGORY_EMOJIS] || '📍';
}

// 辅助函数：获取美食渐变色
export function getCuisineGradient(index: number): string {
  return GRADIENT_COLORS.cuisines[index % GRADIENT_COLORS.cuisines.length];
}

