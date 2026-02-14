import Container from '@/components/ui/Container';
import PostCard from '@/components/ui/PostCard';
import SectionLabel from '@/components/ui/SectionLabel';
import { POSTS } from '@/lib/data';

export default function RecentPostsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="recent-posts-heading"
      className="bg-[#eef2f7] py-12 sm:py-16 lg:py-20 2xl:py-24"
    >
      <Container>
        <SectionLabel viewAllHref="/blog" viewAllLabel="View all">
          <span id="recent-posts-heading">Recent posts</span>
        </SectionLabel>

        {/*
         * Mobile  → 1 col
         * sm+     → 2 col grid
         * All cards equal height via h-full on PostCard
         */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {POSTS.map((post, i) => (
            <div
              key={post.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
