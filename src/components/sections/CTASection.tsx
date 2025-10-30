import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
    showIcon?: boolean;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'default' | 'compact';
}

export function CTASection({
  title = "Ready to Explore China?",
  description = "Join thousands of travelers who trust our comprehensive guide. Start planning your unforgettable journey today.",
  primaryButton = {
    text: "Start Planning",
    href: "/destinations",
    showIcon: true
  },
  secondaryButton = {
    text: "Check Visa Requirements",
    href: "/visa"
  },
  variant = 'default'
}: CTASectionProps) {
  return (
    <section className={`bg-gradient-to-br from-blue-600 to-purple-700 text-white ${variant === 'default' ? 'py-20' : 'py-12'}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 text-center ${variant === 'default' ? 'max-w-4xl' : 'max-w-3xl'}`}>
        <h2 className={`font-bold mb-6 ${variant === 'default' ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
          {title}
        </h2>
        <p className={`text-blue-100 mb-10 mx-auto ${variant === 'default' ? 'text-xl max-w-2xl' : 'text-lg max-w-xl'}`}>
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={primaryButton.href}>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-2xl px-8 py-4 font-semibold text-lg shadow-lg"
            >
              {primaryButton.text}
              {primaryButton.showIcon && <ArrowRight className="ml-2 h-5 w-5" />}
            </Button>
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button 
                size="lg" 
                className="border-2 border-white !text-white !bg-transparent hover:!bg-white hover:!text-blue-600 rounded-2xl px-8 py-4 font-semibold text-lg"
              >
                {secondaryButton.text}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

