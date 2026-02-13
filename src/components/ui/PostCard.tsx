import Link from 'next/link';
import type { Post } from '@/types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="h-full overflow-hidden rounded-xl bg-white shadow-[0_2px_16px_0_rgba(26,31,58,0.06)] transition-shadow duration-300 hover:shadow-[0_6px_24px_0_rgba(26,31,58,0.12)]">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex h-full flex-col p-5 transition-colors duration-200 hover:bg-[#fafbfd] sm:p-6"
        aria-label={`Read: ${post.title}`}
      >
        {/* Title */}
        <h3 className="font-display mb-3 text-xl leading-snug font-semibold text-[#1a1f3a] transition-colors group-hover:text-[#3d4a8a] sm:text-2xl">
          {post.title}
        </h3>

        {/* Meta */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <time
            dateTime={post.date}
            className="text-sm font-medium whitespace-nowrap text-[#6b7280]"
          >
            {post.date}
          </time>
          <span className="text-[#d1d5db] select-none" aria-hidden="true">
            |
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {post.categories.map((cat, idx) => (
              <span key={cat} className="text-sm text-[#6b7280]">
                {cat}
                {idx < post.categories.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
        </div>

        {/* Excerpt */}
        <p className="mt-auto line-clamp-4 pt-1 text-sm leading-relaxed text-[#6b7280] sm:text-base">
          {post.excerpt}
        </p>
      </Link>
    </article>
  );
}
