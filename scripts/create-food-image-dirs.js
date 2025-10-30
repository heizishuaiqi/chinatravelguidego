#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 精简版图片目录结构
const directories = [
  'public/images/food/dishes/covers',
  'public/images/food/dishes/details',
  'public/images/food/dishes/og',
];

// 创建目录的函数
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`✓ Created directory: ${dirPath}`);
  } else {
    console.log(`- Directory already exists: ${dirPath}`);
  }
}

// 创建README文件
function createReadme(dirPath, content) {
  const readmePath = path.join(dirPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, content);
    console.log(`✓ Created README: ${readmePath}`);
  } else {
    console.log(`- README already exists: ${readmePath}`);
  }
}

// 主函数
function main() {
  console.log('🍜 Creating food image directories (simplified)...\n');

  // 创建所有目录
  directories.forEach(createDirectory);

  // 创建README文件
  createReadme('public/images/food', `# 食物图片目录

## 目录结构
- \`dishes/covers/\` - 菜品封面图 (400x300px)
- \`dishes/details/\` - 菜品详情图 (1200x400px)
- \`dishes/og/\` - OG分享图 (1200x630px)

## 图片规范
- 格式：WEBP
- 命名：{dish-slug}-{type}.WEBP
- 质量：85-90% 压缩率

## 24道菜品列表
### 川菜
- mapo-tofu (麻婆豆腐)
- kung-pao-chicken (宫保鸡丁)
- sichuan-hot-pot (四川火锅)
- dan-dan-noodles (担担面)

### 粤菜
- dim-sum (点心)
- roast-duck (烧鸭)
- wonton-noodles (云吞面)

### 京菜
- peking-duck (北京烤鸭)
- jiaozi (饺子)
- zhajiangmian (炸酱面)
- jianbing (煎饼)

### 沪菜
- xiaolongbao (小笼包)
- shengjianbao (生煎包)
- hong-shao-rou (红烧肉)

### 湘菜
- maoxuewang (毛血旺)
- orange-chicken (湘式橙味鸡)
- stinky-tofu (臭豆腐)

### 地方特色小吃
- roujiamo (肉夹馍)
- hot-dry-noodles (热干面)
- goubuli-baozi (狗不理包子)
- guilin-rice-noodles (桂林米粉)
- crossing-bridge-noodles (过桥米线)
- duck-blood-vermicelli (鸭血粉丝汤)
- tsingtao-beer-experience (青岛啤酒体验)
`);

  createReadme('public/images/food/dishes/covers', `# 菜品封面图

## 用途
- 可选：用于食物列表页面替代渐变背景
- 当前状态：列表页面使用渐变背景 + 图标

## 规格
- 尺寸：400x300px
- 格式：WEBP
- 命名：{dish-slug}-cover.WEBP

## 示例
- mapo-tofu-cover.WEBP
- kung-pao-chicken-cover.WEBP
- sichuan-hot-pot-cover.WEBP
`);

  createReadme('public/images/food/dishes/details', `# 菜品详情图

## 用途
- 食物详情页面Hero区域背景图
- 当前状态：详情页面使用渐变背景

## 规格
- 尺寸：1200x400px
- 格式：WEBP
- 命名：{dish-slug}-detail.WEBP

## 示例
- mapo-tofu-detail.WEBP
- kung-pao-chicken-detail.WEBP
- sichuan-hot-pot-detail.WEBP
`);

  createReadme('public/images/food/dishes/og', `# OG分享图

## 用途
- 社交媒体分享时显示的图片
- Facebook、Twitter、微信等平台分享

## 规格
- 尺寸：1200x630px
- 格式：WEBP
- 命名：{dish-slug}-og.WEBP

## 示例
- mapo-tofu-og.WEBP
- kung-pao-chicken-og.WEBP
- sichuan-hot-pot-og.WEBP
`);

  console.log('\n✅ Food image directories created successfully!');
  console.log('\n📝 Next steps:');
  console.log('1. 准备OG图片 (24张) - 高优先级');
  console.log('2. 准备详情图片 (24张) - 中优先级');
  console.log('3. 准备封面图片 (24张) - 低优先级');
  console.log('\n📁 Total directories created:', directories.length);
  console.log('🖼️  Total images needed: 48-72 (24 dishes × 2-3 types)');
}

main(); 