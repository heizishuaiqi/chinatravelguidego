const fs = require('fs');
const path = require('path');

// 所有目的地列表 - 18个目的地
const destinations = [
  'beijing', 'shanghai', 'guangzhou', 'shenzhen', 
  'chengdu', 'xian', 'hangzhou', 'suzhou', 
  'nanjing', 'chongqing', 'guilin', 'xiamen', 
  'qingdao', 'dalian', 'kunming', 'tianjin', 
  'wuhan', 'lhasa'
];

// 所有景点列表 - 36个景点（修正版）
const attractions = [
  // 北京景点 (4个)
  'forbidden-city', 'great-wall-badaling', 'temple-of-heaven', 'summer-palace',
  // 上海景点 (3个)
  'the-bund', 'yu-garden', 'oriental-pearl-tower',
  // 西安景点 (3个)
  'terracotta-warriors', 'xian-city-wall', 'big-wild-goose-pagoda',
  // 成都景点 (2个)
  'giant-panda-base', 'jinli-street',
  // 杭州景点 (2个)
  'west-lake', 'lingyin-temple',
  // 苏州景点 (2个)
  'humble-administrators-garden', 'tiger-hill',
  // 广州景点 (2个)
  'canton-tower', 'shamian-island',
  // 深圳景点 (2个)
  'window-of-the-world', 'dameisha-beach',
  // 重庆景点 (2个)
  'hongya-cave', 'ciqikou-ancient-town',
  // 桂林景点 (2个)
  'li-river-cruise', 'reed-flute-cave',
  // 厦门景点 (2个)
  'gulangyu-island', 'nanputuo-temple',
  // 青岛景点 (2个)
  'tsingtao-beer-museum', 'badaguan-scenic-area',
  // 昆明景点 (2个)
  'stone-forest', 'dianchi-lake',
  // 拉萨景点 (2个)
  'potala-palace', 'jokhang-temple',
  // 天津景点 (2个)
  'five-great-avenues', 'tianjin-eye',
  // 武汉景点 (2个)
  'yellow-crane-tower', 'east-lake'
];

// 目录结构定义
const directoryStructure = {
  'public/images/destinations/hero': destinations,
  'public/images/destinations/covers': destinations,
  'public/images/destinations/details': destinations,
  'public/images/destinations/og': destinations,
  'public/images/attractions/covers': attractions,
  'public/images/attractions/details': attractions,
  'public/images/attractions/og': attractions,
  'public/images/seo': []
};

// 创建目录的函数
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✅ 创建目录: ${dirPath}`);
  } else {
    console.log(`📁 目录已存在: ${dirPath}`);
  }
}

// 创建README文件的函数
function createReadme(dirPath, fileList, type) {
  const readmePath = path.join(dirPath, 'README.md');
  
  let content = `# ${type} 图片目录\n\n`;
  
  if (fileList.length > 0) {
    content += `## 需要的图片文件 (${fileList.length}张)\n\n`;
    fileList.forEach(file => {
      const extension = type.includes('OG') ? 'jpg' : 'webp';
      const typeKey = type.toLowerCase().includes('hero') ? 'hero' :
                     type.toLowerCase().includes('cover') ? 'cover' :
                     type.toLowerCase().includes('detail') ? 'detail' : 'og';
      content += `- [ ] ${file}-${typeKey}.${extension}\n`;
    });
  } else {
    content += `## 默认图片目录\n\n用于存放默认的SEO图片。\n`;
  }
  
  content += `\n## 图片规格\n\n`;
  
  if (type.includes('Hero')) {
    content += `- **尺寸**: 400×300px\n- **格式**: WebP\n- **大小**: <50KB\n- **用途**: 首页展示\n`;
  } else if (type.includes('Cover')) {
    const size = type.includes('目的地') ? '600×400px' : '500×350px';
    content += `- **尺寸**: ${size}\n- **格式**: WebP\n- **大小**: <80KB\n- **用途**: 列表页封面\n`;
  } else if (type.includes('Detail')) {
    content += `- **尺寸**: 1200×400px\n- **格式**: WebP\n- **大小**: <150KB\n- **用途**: 详情页背景\n`;
  } else if (type.includes('OG')) {
    content += `- **尺寸**: 1200×630px\n- **格式**: JPG\n- **大小**: <150KB\n- **用途**: 社交分享\n`;
  }
  
  content += `\n## 准备建议\n\n`;
  content += `- 🎨 **高质量**: 确保图片清晰、色彩饱和\n`;
  content += `- 🔍 **SEO友好**: 文件名小写，使用连字符分隔\n`;
  content += `- 📱 **响应式**: 适合在不同设备上展示\n`;
  content += `- 🚀 **性能优化**: 控制文件大小，使用正确格式\n`;
  content += `- 📸 **构图平衡**: 适合作为背景的横向构图\n`;
  content += `- 🌟 **吸引力**: 展现中国文化的美好形象\n`;
  
  fs.writeFileSync(readmePath, content);
  console.log(`📄 创建README: ${readmePath}`);
}

// 主函数
function main() {
  console.log('🚀 开始创建完整图片目录结构...\n');
  
  // 创建所有目录
  Object.keys(directoryStructure).forEach(dirPath => {
    createDirectory(dirPath);
  });
  
  console.log('\n📝 创建README文件...\n');
  
  // 创建README文件
  createReadme('public/images/destinations/hero', destinations, '目的地Hero');
  createReadme('public/images/destinations/covers', destinations, '目的地Cover');
  createReadme('public/images/destinations/details', destinations, '目的地Detail');
  createReadme('public/images/destinations/og', destinations, '目的地OG');
  createReadme('public/images/attractions/covers', attractions, '景点Cover');
  createReadme('public/images/attractions/details', attractions, '景点Detail');
  createReadme('public/images/attractions/og', attractions, '景点OG');
  createReadme('public/images/seo', [], 'SEO默认');
  
  console.log('\n🎉 图片目录创建完成！\n');
  console.log('📊 最终统计信息:');
  console.log(`- 目的地数量: ${destinations.length}个`);
  console.log(`- 景点数量: ${attractions.length}个`);
  console.log(`- 目的地图片需求: ${destinations.length * 4}张`);
  console.log(`- 景点图片需求: ${attractions.length * 3}张`);
  console.log(`- 总图片需求: ${destinations.length * 4 + attractions.length * 3}张`);
  console.log('\n🎯 三阶段建议:');
  console.log('第一阶段 - 立即效果 (44张):');
  console.log('  - 一线城市Hero图片 (8张)');
  console.log('  - 一线城市Detail图片 (8张)');
  console.log('  - 主要景点Detail图片 (28张)');
  console.log('第二阶段 - 完善体验 (66张):');
  console.log('  - 其他城市Hero+Detail图片 (20张)');
  console.log('  - 所有景点Cover图片 (36张)');
  console.log('  - 剩余景点Detail图片 (10张)');
  console.log('第三阶段 - SEO优化 (70张):');
  console.log('  - 所有目的地Cover图片 (18张)');
  console.log('  - 所有OG图片 (54张)');
  console.log('\n💡 现在您可以开始准备第一阶段的44张图片！');
}

// 运行主函数
main(); 