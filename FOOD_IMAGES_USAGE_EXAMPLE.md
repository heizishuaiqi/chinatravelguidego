# 食物图片使用示例（精简版）

## 目录结构回顾

```
public/images/food/dishes/
├── covers/    # 菜品封面图 (400x300px) - 可选
├── details/   # 菜品详情图 (1200x400px) - 必需
└── og/        # OG分享图 (1200x630px) - 必需
```

## 1. 工具函数使用

### 基础函数

```typescript
import { 
  getDishImagePath, 
  createFoodImageObject, 
  getDishChineseName 
} from '@/lib/food-image-utils';

// 获取图片路径
const coverPath = getDishImagePath('mapo-tofu', 'cover');
// 返回: '/images/food/dishes/covers/mapo-tofu-cover.WEBP'

const detailPath = getDishImagePath('kung-pao-chicken', 'detail');
// 返回: '/images/food/dishes/details/kung-pao-chicken-detail.WEBP'

const ogPath = getDishImagePath('sichuan-hot-pot', 'og');
// 返回: '/images/food/dishes/og/sichuan-hot-pot-og.WEBP'
```

### 图片对象创建

```typescript
// 创建包含主图和备用图的完整对象
const dishImage = createFoodImageObject('mapo-tofu', 'detail');
// 返回:
// {
//   src: '/images/food/dishes/details/mapo-tofu-detail.WEBP',
//   fallback: '/images/ui/placeholders/sichuan-cuisine-placeholder.WEBP',
//   alt: 'mapo tofu detail'
// }

// 获取中文名称
const chineseName = getDishChineseName('mapo-tofu');
// 返回: '麻婆豆腐'
```

## 2. React组件中的使用

### 食物列表页面 (当前使用渐变背景)

```tsx
// src/app/food/page.tsx
// 当前实现：渐变背景 + 图标

{/* 如果要使用封面图片，可以这样改造： */}
<div className="h-48 relative overflow-hidden">
  <Image
    src={getDishImagePath(dish.slug, 'cover')}
    alt={`${dish.name} - ${getDishChineseName(dish.slug)}`}
    fill
    className="object-cover"
    onError={(e) => {
      // 如果图片加载失败，回退到渐变背景
      e.currentTarget.style.display = 'none';
    }}
  />
  {/* 渐变背景作为备用 */}
  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    <div className="relative z-10 text-center text-white">
      <Utensils className="h-12 w-12 mx-auto mb-3 opacity-90" />
      <h3 className="text-xl font-semibold">{dish.name}</h3>
    </div>
  </div>
</div>
```

### 食物详情页面 Hero 区域

```tsx
// src/app/food/[slug]/page.tsx
// 当前实现：渐变背景

{/* 如果要使用详情图片，可以这样改造： */}
<div className="relative h-96 rounded-3xl overflow-hidden mb-12">
  <Image
    src={getDishImagePath(dish.slug, 'detail')}
    alt={`${dish.name} - ${getDishChineseName(dish.slug)}`}
    fill
    className="object-cover"
    priority
    onError={(e) => {
      // 如果图片加载失败，回退到渐变背景
      e.currentTarget.style.display = 'none';
    }}
  />
  {/* 渐变覆盖层 */}
  <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`}>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
  
  {/* 内容 */}
  <div className="absolute bottom-8 left-8 text-white z-10">
    <div className="flex items-center mb-2">
      <MapPin className="h-5 w-5 mr-2" />
      <span className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
        {dish.region}
      </span>
    </div>
    <h1 className="text-5xl md:text-6xl font-light mb-4">{dish.name}</h1>
    <p className="text-xl opacity-90 max-w-2xl">{dish.description}</p>
  </div>
</div>
```

### 带有ImageWithFallback组件的实现

```tsx
// src/components/ui/FoodImageWithFallback.tsx
import { useState } from 'react';
import Image from 'next/image';
import { getDishImagePath, getDishChineseName } from '@/lib/food-image-utils';

interface FoodImageWithFallbackProps {
  dishSlug: string;
  dishName: string;
  imageType: 'cover' | 'detail' | 'og';
  className?: string;
  gradientClass?: string;
  showFallbackIcon?: boolean;
}

export function FoodImageWithFallback({
  dishSlug,
  dishName,
  imageType,
  className,
  gradientClass,
  showFallbackIcon = true
}: FoodImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false);
  
  if (imageError) {
    // 显示渐变背景作为备用
    return (
      <div className={`${className} ${gradientClass} flex items-center justify-center relative`}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {showFallbackIcon && (
          <div className="relative z-10 text-center text-white">
            <Utensils className="h-12 w-12 mx-auto mb-3 opacity-90" />
            <h3 className="text-xl font-semibold">{dishName}</h3>
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Image
        src={getDishImagePath(dishSlug, imageType)}
        alt={`${dishName} - ${getDishChineseName(dishSlug)}`}
        fill
        className="object-cover"
        onError={() => setImageError(true)}
      />
    </div>
  );
}
```

## 3. SEO和元数据

### OG图片在metadata中的使用

```tsx
// src/app/food/[slug]/page.tsx
import { getDishImagePath } from '@/lib/food-image-utils';

export async function generateMetadata({ params }: DishPageProps): Promise<Metadata> {
  const { slug } = await params;
  const dish = getDishBySlug(slug);

  if (!dish) {
    return { title: 'Dish Not Found' };
  }

  return {
    title: `${dish.name} - ${dish.cuisineName} | China Travel Guide`,
    description: dish.description,
    openGraph: {
      title: `${dish.name} - ${dish.cuisineName}`,
      description: dish.description,
      images: [
        {
          url: getDishImagePath(slug, 'og'),
          width: 1200,
          height: 630,
          alt: `${dish.name} - ${dish.cuisineName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [getDishImagePath(slug, 'og')],
    },
  };
}
```

## 4. 批量图片处理

### 获取所有菜品的图片映射

```typescript
import { getAllDishDetailImages, getAllDishOgImages } from '@/lib/food-image-utils';
import { getAllDishes } from '@/data/food';

// 获取所有菜品的slug
const allDishes = getAllDishes();
const dishSlugs = allDishes.map(dish => dish.slug);

// 获取所有详情图片
const detailImages = getAllDishDetailImages(dishSlugs);
// 返回: { 'mapo-tofu': { src: '...', fallback: '...', alt: '...' }, ... }

// 获取所有OG图片
const ogImages = getAllDishOgImages(dishSlugs);
```

## 5. 创建图片目录

```bash
# 运行脚本创建目录结构
npm run create-food-dirs

# 或者直接运行
node scripts/create-food-image-dirs.js
```

## 6. 图片准备清单

### 高优先级 - OG图片 (24张)
- 尺寸：1200x630px
- 格式：WEBP
- 用途：社交分享

### 中优先级 - 详情图片 (24张)
- 尺寸：1200x400px
- 格式：WEBP
- 用途：详情页Hero区域

### 低优先级 - 封面图片 (24张)
- 尺寸：400x300px
- 格式：WEBP
- 用途：列表页优化（可选）

## 7. 图片命名清单

```
# 川菜
mapo-tofu-{type}.WEBP         # 麻婆豆腐
kung-pao-chicken-{type}.WEBP  # 宫保鸡丁
sichuan-hot-pot-{type}.WEBP   # 四川火锅
dan-dan-noodles-{type}.WEBP   # 担担面

# 粤菜
dim-sum-{type}.WEBP           # 点心
roast-duck-{type}.WEBP        # 烧鸭
wonton-noodles-{type}.WEBP    # 云吞面

# 京菜
peking-duck-{type}.WEBP       # 北京烤鸭
jiaozi-{type}.WEBP            # 饺子
zhajiangmian-{type}.WEBP      # 炸酱面
jianbing-{type}.WEBP          # 煎饼

# 沪菜
xiaolongbao-{type}.WEBP       # 小笼包
shengjianbao-{type}.WEBP      # 生煎包
hong-shao-rou-{type}.WEBP     # 红烧肉

# 湘菜
maoxuewang-{type}.WEBP        # 毛血旺
orange-chicken-{type}.WEBP    # 湘式橙味鸡
stinky-tofu-{type}.WEBP       # 臭豆腐

# 地方特色
roujiamo-{type}.WEBP              # 肉夹馍
hot-dry-noodles-{type}.WEBP       # 热干面
goubuli-baozi-{type}.WEBP         # 狗不理包子
guilin-rice-noodles-{type}.WEBP   # 桂林米粉
crossing-bridge-noodles-{type}.WEBP # 过桥米线
duck-blood-vermicelli-{type}.WEBP # 鸭血粉丝汤
tsingtao-beer-experience-{type}.WEBP # 青岛啤酒体验
```

其中 `{type}` 为：`cover`、`detail`、`og`

## 8. 开发流程

1. **准备图片**：按照命名规范准备图片文件
2. **放置图片**：将图片放入对应的目录中
3. **测试显示**：在开发环境中测试图片显示
4. **优化备用**：确保备用机制正常工作
5. **SEO验证**：检查OG图片是否正确显示

这个精简版的规划更符合网站的实际需求，避免了不必要的复杂性。 