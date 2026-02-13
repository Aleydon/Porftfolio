import { PROJECTS } from '@/lib/data';
import Container from '../ui/Container';
import ProjectCard from '../ui/ProjectCard';
import SectionLabel from '../ui/SectionLabel';

export default function FeaturedWorksSection() {
  return (
    <section
      aria-labelledby="featured-works-heading"
      className="bg-white py-12 sm:py-16 lg:py-20 2xl:py-24"
    >
      <Container>
        <SectionLabel viewAllHref="/work" viewAllLabel="View all work">
          <span id="featured-works-heading">Featured works</span>
        </SectionLabel>

        {/* Divider list — matches design's horizontal card layout on desktop */}
        <div className="divide-y divide-[#e8eaed]">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
