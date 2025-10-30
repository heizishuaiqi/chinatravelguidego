# 📸 修正后的图片规划

## 🎯 **实际需要的图片**

基于对网站代码的详细分析，以下是**真正需要**的图片：

### **1. 目的地图片 (6个目的地)**

| 图片类型 | 尺寸 | 用途 | 路径示例 | 优先级 |
|----------|------|------|----------|--------|
| **Hero图片** | 400×300px | 首页展示 | `/images/destinations/hero/beijing-hero.webp` | 🔥 高 |
| **Cover图片** | 600×400px | 列表页封面 | `/images/destinations/covers/beijing-cover.webp` | 🔥 高 |
| **OG图片** | 1200×630px | 社交分享 | `/images/destinations/og/beijing-og.jpg` | 🔥 高 |

**需要数量：6个目的地 × 3类 = 18张图片**

### **2. 景点图片 (23个景点)**

| 图片类型 | 尺寸 | 用途 | 路径示例 | 优先级 |
|----------|------|------|----------|--------|
| **Cover图片** | 500×350px | 列表页封面 | `/images/attractions/covers/forbidden-city-cover.webp` | 🔥 高 |
| **OG图片** | 1200×630px | 社交分享 | `/images/attractions/og/forbidden-city-og.jpg` | 🔥 高 |

**需要数量：23个景点 × 2类 = 46张图片**

## 📊 **修正后的统计**

| 类型 | 数量 | 总计 |
|------|------|------|
| 目的地图片 | 6 × 3 = 18张 | 18张 |
| 景点图片 | 23 × 2 = 46张 | 46张 |
| **总计** | | **64张** |

## 🗂️ **简化后的目录结构**

```
public/images/
├── destinations/
│   ├── hero/               # 首页展示图 (400×300px)
│   ├── covers/             # 列表页封面 (600×400px)
│   └── og/                 # 社交分享图 (1200×630px)
├── attractions/
│   ├── covers/             # 列表页封面 (500×350px)
│   └── og/                 # 社交分享图 (1200×630px)
└── seo/                    # 默认SEO图片
```

## 🎯 **第一阶段图片清单**

### **目的地图片**
```bash
# Hero图片 (首页使用)
beijing-hero.webp (400×300)
shanghai-hero.webp (400×300)
guangzhou-hero.webp (400×300)
xian-hero.webp (400×300)
chengdu-hero.webp (400×300)
hangzhou-hero.webp (400×300)

# Cover图片 (列表页使用)
beijing-cover.webp (600×400)
shanghai-cover.webp (600×400)
guangzhou-cover.webp (600×400)
xian-cover.webp (600×400)
chengdu-cover.webp (600×400)
hangzhou-cover.webp (600×400)

# OG图片 (社交分享)
beijing-og.jpg (1200×630)
shanghai-og.jpg (1200×630)
guangzhou-og.jpg (1200×630)
xian-og.jpg (1200×630)
chengdu-og.jpg (1200×630)
hangzhou-og.jpg (1200×630)
```

### **景点图片**
```bash
# Cover图片 (列表页使用)
forbidden-city-cover.webp (500×350)
great-wall-badaling-cover.webp (500×350)
temple-of-heaven-cover.webp (500×350)
summer-palace-cover.webp (500×350)
the-bund-cover.webp (500×350)
yu-garden-cover.webp (500×350)
oriental-pearl-tower-cover.webp (500×350)
terracotta-warriors-cover.webp (500×350)
# ... 其他15个景点的封面图

# OG图片 (社交分享)
forbidden-city-og.jpg (1200×630)
great-wall-badaling-og.jpg (1200×630)
temple-of-heaven-og.jpg (1200×630)
summer-palace-og.jpg (1200×630)
the-bund-og.jpg (1200×630)
yu-garden-og.jpg (1200×630)
oriental-pearl-tower-og.jpg (1200×630)
terracotta-warriors-og.jpg (1200×630)
# ... 其他15个景点的OG图片
```

## 🔧 **更新工具和组件**

我们需要更新图片工具库，移除不必要的图片类型：

### **使用示例**
```tsx
// 目的地Hero图片（首页使用）
<DestinationImage
  slug="beijing"
  title="Beijing"
  type="hero"
  className="rounded-lg"
  priority={true}
/>

// 目的地Cover图片（列表页使用）
<DestinationImage
  slug="beijing"
  title="Beijing"
  type="cover"
  className="rounded-lg"
/>

// 景点Cover图片（列表页使用）
<AttractionImage
  slug="forbidden-city"
  title="Forbidden City"
  type="cover"
  className="rounded-lg"
/>
```

## 🎨 **可选：未来扩展**

如果想要添加更丰富的视觉效果，可以考虑：

1. **详情页主图**：为目的地和景点详情页添加大图展示
2. **图片画廊**：添加多图展示功能
3. **缩略图**：为列表页添加小图预览

但目前的精简方案已经能够满足网站的基本需求。

## ✅ **立即行动**

1. 专注于64张核心图片的准备
2. 优先准备Hero图片和Cover图片
3. 最后准备OG图片用于SEO
4. 考虑是否需要为详情页添加图片展示功能

---

**节省工作量：从467张图片减少到64张图片！**  
**提高效率：专注于真正需要的图片！** 