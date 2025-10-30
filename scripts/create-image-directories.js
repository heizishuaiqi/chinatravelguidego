const fs = require('fs');
const path = require('path');

// 目录结构定义
const imageDirectories = [
  // 目的地图片目录
  'public/images/destinations/hero',
  'public/images/destinations/covers',
  'public/images/destinations/details',
  'public/images/destinations/thumbnails',
  'public/images/destinations/og',
  'public/images/destinations/galleries',
  
  // 景点图片目录
  'public/images/attractions/covers',
  'public/images/attractions/details',
  'public/images/attractions/thumbnails',
  'public/images/attractions/og',
  'public/images/attractions/galleries',
  
  // 美食图片目录
  'public/images/food/dishes',
  'public/images/food/restaurants',
  
  // SEO图片目录
  'public/images/seo',
  
  // UI图片目录
  'public/images/ui/placeholders',
  'public/images/ui/icons'
];

// 创建目录的函数
function createDirectories() {
  console.log('🚀 开始创建图片目录结构...\n');
  
  imageDirectories.forEach(dir => {
    const fullPath = path.join(process.cwd(), dir);
    
    try {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`✅ 创建目录: ${dir}`);
      } else {
        console.log(`📁 目录已存在: ${dir}`);
      }
    } catch (error) {
      console.error(`❌ 创建目录失败: ${dir}`, error.message);
    }
  });
  
  console.log('\n🎉 目录结构创建完成！');
  
  // 创建README文件
  createReadmeFiles();
}

// 为每个目录创建README文件
function createReadmeFiles() {
  console.log('\n📝 创建README文件...\n');
  
  const readmeContent = {
    'public/images/destinations/hero': {
      title: '首页Hero图片',
      description: '用于首页展示的目的地图片',
      specs: '尺寸: 400×300px, 格式: WebP, 大小: <50KB',
      naming: 'beijing-hero.webp, shanghai-hero.webp'
    },
    'public/images/destinations/covers': {
      title: '目的地封面图片',
      description: '用于目的地列表页的封面图片',
      specs: '尺寸: 600×400px, 格式: WebP, 大小: <80KB',
      naming: 'beijing-cover.webp, shanghai-cover.webp'
    },
    'public/images/destinations/details': {
      title: '目的地详情图片',
      description: '用于目的地详情页的主图',
      specs: '尺寸: 1200×800px, 格式: WebP, 大小: <200KB',
      naming: 'beijing-detail.webp, shanghai-detail.webp'
    },
    'public/images/destinations/thumbnails': {
      title: '目的地缩略图',
      description: '用于小尺寸展示的缩略图',
      specs: '尺寸: 300×200px, 格式: WebP, 大小: <30KB',
      naming: 'beijing-thumb.webp, shanghai-thumb.webp'
    },
    'public/images/destinations/og': {
      title: '社交分享图片',
      description: '用于社交媒体分享的OG图片',
      specs: '尺寸: 1200×630px, 格式: JPG, 大小: <150KB',
      naming: 'beijing-og.jpg, shanghai-og.jpg'
    },
    'public/images/destinations/galleries': {
      title: '目的地相册图片',
      description: '用于目的地详情页的图片画廊',
      specs: '尺寸: 800×600px, 格式: WebP, 大小: <120KB',
      naming: 'beijing-gallery-1.webp, beijing-gallery-2.webp'
    },
    'public/images/attractions/covers': {
      title: '景点封面图片',
      description: '用于景点列表页的封面图片',
      specs: '尺寸: 500×350px, 格式: WebP, 大小: <70KB',
      naming: 'forbidden-city-cover.webp, great-wall-badaling-cover.webp'
    },
    'public/images/attractions/details': {
      title: '景点详情图片',
      description: '用于景点详情页的主图',
      specs: '尺寸: 1200×800px, 格式: WebP, 大小: <200KB',
      naming: 'forbidden-city-detail.webp, great-wall-badaling-detail.webp'
    }
  };
  
  Object.entries(readmeContent).forEach(([dir, info]) => {
    const readmePath = path.join(process.cwd(), dir, 'README.md');
    const content = `# ${info.title}

${info.description}

## 技术规范
${info.specs}

## 命名规范
${info.naming}

## 注意事项
- 确保图片质量优秀，适合旅游网站展示
- 遵循SEO友好的文件命名规则
- 控制文件大小以优化加载速度
- 使用描述性的ALT文本
`;
    
    try {
      fs.writeFileSync(readmePath, content);
      console.log(`✅ 创建README: ${dir}/README.md`);
    } catch (error) {
      console.error(`❌ 创建README失败: ${dir}`, error.message);
    }
  });
}

// 运行脚本
if (require.main === module) {
  createDirectories();
}

module.exports = { createDirectories }; 