import FeaturedWorksSection from '@/components/sections/FeaturedWorksSection';
import HeroSection from '@/components/sections/HeroSection';
import RecentPostsSection from '@/components/sections/RecentPostsSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <RecentPostsSection />
      <FeaturedWorksSection />
    </main>
  );
}
