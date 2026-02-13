import Link from 'next/link';

interface SectionLabelProps {
  children: React.ReactNode;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function SectionLabel({
  children,
  viewAllHref,
  viewAllLabel = 'View all'
}: SectionLabelProps) {
  return (
    <div className="mb-6 flex items-center justify-between sm:mb-8">
      <h2 className="text-lg font-semibold text-[#1a1f3a] sm:text-xl">
        {children}
      </h2>

      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="hidden text-sm font-medium text-[#3d7aed] transition-colors duration-150 hover:text-[#FF5E5B] sm:block"
        >
          {viewAllLabel}
        </Link>
      )}
    </div>
  );
}
