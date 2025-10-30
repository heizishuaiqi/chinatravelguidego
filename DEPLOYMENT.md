# China Travel Helper - 部署指南

本文档提供了 China Travel Helper 网站的部署指南。

## 🚀 静态导出

项目已配置为支持静态导出，可以部署到任何静态托管服务。

### 构建步骤

1. **安装依赖**
```bash
npm install
```

2. **构建静态网站**
```bash
npm run build
```

3. **导出文件位置**
静态文件将生成在 `out/` 目录中。

## 🌐 部署选项

### Vercel (推荐)
1. 连接 GitHub 仓库到 Vercel
2. Vercel 会自动检测 Next.js 项目
3. 自动部署，支持自动构建和静态导出

### Netlify
1. 将 `out/` 目录部署到 Netlify
2. 构建命令: `npm run build`
3. 发布目录: `out`

### GitHub Pages
1. 将 `out/` 目录内容推送到 gh-pages 分支
2. 启用 GitHub Pages
3. 设置自定义域名（可选）

### 其他静态托管服务
- **Cloudflare Pages**: 支持自动构建
- **AWS S3 + CloudFront**: 企业级解决方案
- **Firebase Hosting**: Google 的静态托管服务

## ⚙️ 配置说明

### Next.js 配置
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',           // 启用静态导出
  images: {
    unoptimized: true        // 禁用图片优化
  },
  trailingSlash: true,       // SEO 优化
  // basePath: '/path',      // 子路径部署（可选）
};
```

### 环境变量
目前项目不需要环境变量，所有数据都是静态的。

## 📁 目录结构
```
out/
├── index.html              # 首页
├── about/index.html         # 关于页面
├── visa/index.html          # 签证页面
├── destinations/index.html  # 目的地页面
├── _next/                   # Next.js 资源
└── ...                      # 其他页面
```

## 🔄 CI/CD 自动化

### GitHub Actions 示例
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

## 🔍 SEO 优化

网站已包含基础 SEO 优化：
- Meta 标签和描述
- 语义化 HTML 结构
- 适当的标题层级
- 移动端友好设计

## 📊 性能优化

- 静态生成，加载速度快
- 优化的 CSS 和 JS 打包
- 响应式图片（需要时）
- CDN 分发支持

## 🛡️ 安全考虑

- 无服务器端代码，减少攻击面
- 静态文件，无数据库安全问题
- HTTPS 支持（通过托管平台）

## 📝 维护说明

### 内容更新
1. 修改 `src/data/` 目录中的数据文件
2. 更新相关页面组件
3. 重新构建和部署

### 添加新页面
1. 在 `src/app/` 创建新页面
2. 更新导航组件
3. 添加相应的数据文件

---

最后更新: 2024年1月 