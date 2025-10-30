import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// 合并CSS类名的工具函数
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化价格的工具函数
export function formatPrice(price: string | number): string {
  if (typeof price === 'number') {
    return `¥${price.toLocaleString()}`;
  }
  return price;
}

// 生成slug的工具函数
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// 截断文本的工具函数
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// 格式化日期的工具函数
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

// 验证邮箱的工具函数
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// 获取图片URL的工具函数
export function getImageUrl(imagePath: string): string {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `/images/${imagePath}`;
} 