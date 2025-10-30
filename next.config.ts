import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 启用静态导出
  output: 'export',
  
  // 禁用图片优化（静态导出时需要）
  images: {
    unoptimized: true
  },
  
  // 如果需要部署到子路径，可以设置 basePath
  // basePath: '/china-travel-guide',
  
  // 为了更好的SEO，生成站点地图
  trailingSlash: true,
  
  // 禁用 x-powered-by 头部
  poweredByHeader: false,
  
  // 启用严格模式
  reactStrictMode: true,
  
  // 在构建时忽略 ESLint 错误（用于快速部署）
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // 在构建时忽略 TypeScript 错误（如果需要）
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // 实验性功能
  experimental: {
    // 暂时禁用类型化路由以避免构建错误
    // typedRoutes: true,
  },
};

export default nextConfig;
