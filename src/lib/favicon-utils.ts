/**
 * Favicon生成工具
 * 从PNG logo生成各种尺寸的favicon
 */

// 支持的favicon尺寸
export const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 64, name: 'favicon-64x64.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 128, name: 'favicon-128x128.png' },
  { size: 192, name: 'favicon-192x192.png' },
  { size: 256, name: 'favicon-256x256.png' }
];

// 从PNG生成favicon
export async function generateFavicons(pngFile: File): Promise<{ [key: string]: Blob }> {
  const results: { [key: string]: Blob } = {};
  
  for (const favicon of FAVICON_SIZES) {
    results[favicon.name] = await resizePngToFavicon(pngFile, favicon.size);
  }
  
  return results;
}

// 调整PNG尺寸为favicon
async function resizePngToFavicon(file: File, size: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      
      if (!ctx) {
        reject(new Error('Canvas context not available'));
        return;
      }
      
      // 清空画布
      ctx.clearRect(0, 0, size, size);
      
      // 绘制缩放后的图像
      ctx.drawImage(img, 0, 0, size, size);
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create favicon blob'));
          }
        },
        'image/png',
        1.0
      );
    };
    
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
}

// 下载所有生成的favicon
export function downloadAllFavicons(favicons: { [key: string]: Blob }) {
  Object.entries(favicons).forEach(([name, blob]) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}

// 生成ICO格式（简化版，推荐使用在线转换工具）
export function generateWebManifest(siteName: string = 'China Travel Guide') {
  return {
    name: siteName,
    short_name: siteName,
    icons: FAVICON_SIZES.map(favicon => ({
      src: `/favicons/${favicon.name}`,
      sizes: `${favicon.size}x${favicon.size}`,
      type: 'image/png'
    })),
    theme_color: '#2563eb',
    background_color: '#ffffff',
    display: 'standalone'
  };
} 