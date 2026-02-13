import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Consistent page-width container used across all sections.
 * Provides responsive horizontal padding and a max-width cap,
 * ensuring good readability up to TV / ultrawide screens (1920px+).
 */
export default function Container({
  children,
  className,
  as: Component = 'div'
}: ContainerProps) {
  return (
    <Component
      className={cn(
        // Responsive horizontal padding
        'mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20',
        // Max-width: capped at 1280px on large screens, centered
        // For TV/ultrawide we keep max-w-7xl so content doesn't stretch absurdly
        'max-w-7xl',
        className
      )}
    >
      {children}
    </Component>
  );
}
