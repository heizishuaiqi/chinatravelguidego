# Logo 使用指南

## 📁 文件结构

```
public/
├── logos/
│   ├── logo.png                    # 主logo (400×400正方形)
│   ├── logo-small.png              # 小尺寸 (24×24)
│   ├── logo-medium.png             # 中等尺寸 (32×32)
│   ├── logo-large.png              # 大尺寸 (40×40)
│   ├── logo-xlarge.png             # 特大尺寸 (64×64)
│   └── favicons/                   # 网站图标
│       ├── favicon-16x16.png       # 16x16像素favicon
│       ├── favicon-32x32.png       # 32x32像素favicon
│       ├── favicon-96x96.png       # 96x96像素favicon
│       └── favicon.ico             # 传统ico格式
```

## 🚀 快速开始

### 1. 您的Logo信息
- **原始尺寸**: 400×400像素
- **格式**: PNG位图
- **宽高比**: 1:1（正方形）
- **类型**: 正方形logo

### 2. 放置Logo文件
将您的400×400的PNG logo文件放置到：

```bash
# 主logo（400×400的正方形文件）
public/logos/logo.png
```

### 3. 系统会自动处理
- **导航栏**: 自动缩放到40×40像素
- **页脚**: 自动缩放到40×40像素  
- **图标版本**: 使用相同的正方形logo

### 3. 自动缩放（可选）
如果您只有一个尺寸的logo，可以使用我们提供的工具进行自动缩放：

```typescript
import { generateLogoSizes, downloadBlob } from '@/lib/image-utils';

// 在浏览器环境中使用
const file = // 您的logo文件
const scaledLogos = await generateLogoSizes(file);

// 下载生成的文件
Object.entries(scaledLogos).forEach(([name, blob]) => {
  downloadBlob(blob, `${name}.png`);
});
```

## 📐 尺寸规格

### 主Logo（保持1:1正方形比例）
- **小尺寸**: 24×24px
- **中等尺寸**: 32×32px  
- **大尺寸**: 40×40px（导航栏和页脚使用）
- **特大尺寸**: 64×64px

### 图标版本（与主logo相同）
- **16×16px**: 小图标、favicon
- **32×32px**: 中等图标、书签图标
- **64×64px**: 大图标
- **96×96px**: 桌面快捷方式

### 显示效果
- **导航栏**: 40×40px（保持正方形比例）
- **页脚**: 40×40px（保持正方形比例）
- **图标**: 与主logo相同

## 🎨 Logo组件使用

### 基本使用
```tsx
import { Logo } from '@/components/ui/Logo';

// 完整logo（带文字）
<Logo size="lg" showText={true} />

// 仅图标
<Logo size="md" showText={false} />

// 自定义颜色
<Logo size="sm" textColor="text-blue-400" />
```

### 可用属性
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'full' | 'icon' | 'horizontal'
- `showText`: boolean
- `textColor`: string
- `className`: string

### 专用组件
```tsx
// 仅图标
<LogoIcon size="md" />

// 水平版本
<LogoHorizontal size="lg" />
```

## 💡 设计建议

### Logo设计原则
1. **简洁明了**: 避免过于复杂的细节
2. **可缩放性**: 确保在小尺寸下仍然清晰可见
3. **颜色搭配**: 与网站主题色调协调
4. **文化适应**: 适合国际用户审美

### 技术要求
- **SVG格式**: 优先使用，确保无损缩放
- **透明背景**: PNG格式需要透明背景
- **颜色模式**: RGB颜色模式
- **文件大小**: 建议单个文件不超过100KB

## 🔧 故障排除

### Logo不显示
1. 检查文件路径是否正确
2. 确认文件格式是否支持
3. 检查文件是否损坏
4. 查看浏览器控制台错误信息

### 显示模糊
1. 确保原始文件分辨率足够高
2. 检查是否使用了SVG格式
3. 验证图片压缩设置

### 加载缓慢
1. 优化文件大小
2. 使用WebP格式（现代浏览器）
3. 启用图片懒加载

## 📝 更新Logo

### 替换现有Logo
1. 准备新的logo文件
2. 替换 `public/logos/` 目录中的对应文件
3. 清除浏览器缓存
4. 重新构建项目

### 批量更新
```bash
# 如果需要更新所有尺寸
npm run build  # 重新构建项目
```

## 💡 推荐的文件放置

### 立即可用
```bash
# 将您的400×400 PNG文件放置到：
public/logos/logo.png
```

### 可选的额外文件
```bash
# 如果您有其他尺寸：
public/logos/logo-small.png    # 24×24px
public/logos/logo-medium.png   # 32×32px  
public/logos/logo-large.png    # 40×40px
public/logos/logo-xlarge.png   # 64×64px
```

### 自动生成的文件
使用自动缩放工具可以生成：
- `logo-icon-16.png` (16×16)
- `logo-icon-32.png` (32×32)
- `logo-icon-64.png` (64×64)
- `favicon-16.png` (16×16)
- `favicon-32.png` (32×32)
- `favicon-96.png` (96×96)

## 🎯 最佳实践

1. **文件命名**: 使用描述性的文件名
2. **版本管理**: 保留logo的不同版本
3. **备份**: 定期备份logo文件
4. **测试**: 在不同设备和浏览器上测试显示效果
5. **优化**: 定期优化文件大小和加载性能

## 📞 技术支持

如果您在使用过程中遇到问题，请：
1. 检查本指南中的故障排除部分
2. 查看浏览器控制台的错误信息
3. 确认文件路径和格式正确性

---

**注意**: 记得在更换logo后清除浏览器缓存，以确保看到最新的变化。 