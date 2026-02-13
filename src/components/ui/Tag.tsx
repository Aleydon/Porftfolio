import { cn } from '@/lib/utils';

interface TagProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent';
  className?: string;
}

export default function Tag({
  children,
  variant = 'default',
  className
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
        variant === 'default' && 'bg-[#e8ecf5] text-[#3d4a8a]',
        variant === 'accent' && 'bg-[#FF5E5B]/10 text-[#FF5E5B]',
        className
      )}
    >
      {children}
    </span>
  );
}
