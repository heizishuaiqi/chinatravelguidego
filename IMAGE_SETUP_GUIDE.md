# 📸 图片设置指导手册

## 🚀 快速开始

### 1. 创建目录结构
运行以下命令自动创建所有需要的图片目录：

```bash
npm run create-image-dirs
```

这将创建完整的目录结构并在每个目录中生成说明文件。

### 2. 目录结构总览

创建完成后，您的 `public/images/` 目录结构如下：

```
public/images/
├── destinations/           # 目的地图片
│   ├── hero/              # 首页展示图 (400×300px)
│   ├── covers/            # 列表页封面 (600×400px)
│   ├── details/           # 详情页主图 (1200×800px)
│   ├── thumbnails/        # 缩略图 (300×200px)
│   ├── og/               # 社交分享图 (1200×630px)
│   └── galleries/        # 相册图片 (800×600px)
├── attractions/           # 景点图片
│   ├── covers/           # 列表页封面 (500×350px)
│   ├── details/          # 详情页主图 (1200×800px)
│   ├── thumbnails/       # 缩略图 (250×175px)
│   ├── og/              # 社交分享图 (1200×630px)
│   └── galleries/       # 相册图片 (800×600px)
├── food/                 # 美食图片
│   ├── dishes/          # 菜品图片
│   └── restaurants/     # 餐厅图片
├── seo/                 # SEO相关图片
└── ui/                  # UI相关图片
    ├── placeholders/    # 占位符图片
    └── icons/          # 图标文件
```

## 📋 第一阶段：核心图片准备清单

### 优先级1：目的地封面图 (必须)
为6个主要目的地准备封面图：

```
✅ beijing-cover.webp     (600×400px)
✅ shanghai-cover.webp    (600×400px)  
✅ guangzhou-cover.webp   (600×400px)
✅ xian-cover.webp        (600×400px)
✅ chengdu-cover.webp     (600×400px)
✅ hangzhou-cover.webp    (600×400px)
```

### 优先级2：首页Hero图片 (重要)
为首页展示准备Hero图：

```
✅ beijing-hero.webp      (400×300px)
✅ shanghai-hero.webp     (400×300px)
✅ guangzhou-hero.webp    (400×300px)
✅ xian-hero.webp         (400×300px)
✅ chengdu-hero.webp      (400×300px)
✅ hangzhou-hero.webp     (400×300px)
```

### 优先级3：主要景点封面图 (重要)
为热门景点准备封面图：

```
✅ forbidden-city-cover.webp         (500×350px)
✅ great-wall-badaling-cover.webp    (500×350px)
✅ temple-of-heaven-cover.webp       (500×350px)
✅ summer-palace-cover.webp          (500×350px)
✅ the-bund-cover.webp               (500×350px)
✅ yu-garden-cover.webp              (500×350px)
✅ oriental-pearl-tower-cover.webp   (500×350px)
✅ terracotta-warriors-cover.webp    (500×350px)
```

## 🛠️ 图片处理工具推荐

### 在线工具（免费）
1. **压缩**: [TinyPNG](https://tinypng.com/) - WebP/PNG/JPG压缩
2. **格式转换**: [Squoosh](https://squoosh.app/) - Google开发的图片优化工具
3. **调整尺寸**: [ImageResizer](https://imageresizer.com/)

### 专业软件
1. **Photoshop** - 专业图片编辑
2. **GIMP** - 免费的Photoshop替代品
3. **Figma** - 现代设计工具，适合批量处理

### 批量处理脚本
创建一个简单的批处理脚本：

```bash
# 使用ImageMagick批量转换和调整尺寸
# 安装: brew install imagemagick (macOS) 或 apt-get install imagemagick (Ubuntu)

# 批量转换为WebP格式并调整尺寸
magick *.jpg -resize 600x400^ -gravity center -extent 600x400 -quality 85 -format webp *.webp
```

## 🎨 图片获取建议

### 免费图片资源
1. **[Unsplash](https://unsplash.com/)** 
   - 搜索关键词：Beijing, Shanghai, Forbidden City, Great Wall
   - 高质量摄影作品，免费商用

2. **[Pexels](https://pexels.com/)**
   - 丰富的中国旅游图片
   - 多种尺寸下载

3. **[Pixabay](https://pixabay.com/)**
   - 包含插图和照片
   - 支持中文搜索

### 专业图片库（付费）
1. **Shutterstock** - 最大的图片库
2. **Getty Images** - 高质量专业图片
3. **Adobe Stock** - 与Adobe软件集成良好

### AI生成图片
1. **Midjourney** - 高质量AI图片生成
2. **DALL-E** - OpenAI的图片生成工具
3. **Stable Diffusion** - 开源AI图片生成

## 📱 代码使用示例

### 使用新的图片组件

```tsx
import { DestinationImage, AttractionImage } from '@/components/ui/ImageWithFallback';

// 目的地图片
<DestinationImage
  slug="beijing"
  title="Beijing"
  type="cover"
  className="rounded-lg"
  priority={true}
/>

// 景点图片  
<AttractionImage
  slug="forbidden-city"
  title="Forbidden City"
  type="detail"
  className="w-full h-auto"
/>
```

### 使用图片路径函数

```tsx
import { getDestinationImagePath, getAttractionImagePath } from '@/lib/image-utils';

// 获取目的地图片路径
const beijingCover = getDestinationImagePath('beijing', 'cover');
// 返回: /images/destinations/covers/beijing-cover.webp

// 获取景点图片路径
const forbiddenCityDetail = getAttractionImagePath('forbidden-city', 'detail');
// 返回: /images/attractions/details/forbidden-city-detail.webp
```

## ✅ 验证清单

完成图片设置后，请检查：

- [ ] 运行 `npm run create-image-dirs` 成功
- [ ] 所有目录都已创建
- [ ] 每个目录都有README说明文件
- [ ] 网站在开发环境下正常运行（占位符图片显示）
- [ ] 准备了核心图片并放置在正确目录
- [ ] 图片文件名符合命名规范
- [ ] 图片尺寸符合技术规范
- [ ] 图片文件大小在限制范围内

## 🚨 常见问题

### Q: 图片不显示怎么办？
A: 检查文件路径、文件名大小写、文件格式是否正确。组件会自动回退到占位符图片。

### Q: 如何更换现有图片？
A: 直接替换对应目录中的文件，确保文件名保持一致。

### Q: 能否使用不同的图片格式？
A: 建议使用WebP格式以获得最佳压缩效果，OG图片使用JPG格式以确保兼容性。

### Q: 如何添加新的目的地或景点图片？
A: 按照命名规范创建对应的图片文件，系统会自动识别并使用。

## 📞 技术支持

如果遇到问题，请：
1. 检查控制台错误信息
2. 确认文件路径和命名是否正确
3. 验证图片文件是否存在且可访问
4. 查看浏览器开发者工具中的网络请求

---

📝 **更新日期**: 2024年1月  
🔄 **版本**: 1.0.0 