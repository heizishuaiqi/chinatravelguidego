import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  stats?: Array<{
    icon?: ReactNode;
    label: string;
    value: string | number;
  }>;
  gradient?: {
    from: string;
    to: string;
  };
  size?: 'default' | 'large' | 'compact';
}

export function PageHeader({
  title,
  subtitle,
  description,
  stats,
  gradient,
  size = 'default'
}: PageHeaderProps) {
  const sizeClasses = {
    large: 'text-5xl md:text-6xl',
    default: 'text-4xl md:text-5xl',
    compact: 'text-3xl md:text-4xl'
  };

  const spacing = {
    large: 'mb-20',
    default: 'mb-16',
    compact: 'mb-12'
  };

  return (
    <div className={`text-center ${spacing[size]}`}>
      {/* 标题 */}
      {gradient ? (
        <div className={`bg-gradient-to-r from-${gradient.from} to-${gradient.to} bg-clip-text text-transparent`}>
          <h1 className={`${sizeClasses[size]} font-light mb-6 tracking-tight`}>
            {title}
          </h1>
        </div>
      ) : (
        <h1 className={`${sizeClasses[size]} font-light text-gray-900 mb-6 tracking-tight`}>
          {title}
        </h1>
      )}

      {/* 副标题 */}
      {subtitle && (
        <p className="text-lg text-gray-500 mb-4 uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      {/* 描述 */}
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {description}
        </p>
      )}

      {/* 统计数据 */}
      {stats && stats.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-2">
              {stat.icon}
              <span className="font-medium">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

