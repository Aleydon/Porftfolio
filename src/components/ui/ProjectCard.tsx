import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group">
      <Link
        href={`/work/${project.id}`}
        className="flex flex-col gap-5 rounded-xl px-3 py-6 transition-colors duration-200 hover:bg-[#fafbfd] sm:-mx-3 sm:flex-row sm:gap-6 sm:py-8 lg:gap-8"
        aria-label={`View project: ${project.title}`}
      >
        {/* Thumbnail */}
        <div className="w-full flex-shrink-0 sm:w-44 md:w-52 lg:w-60 xl:w-64">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#1a1f3a] shadow-md transition-shadow duration-300 group-hover:shadow-lg sm:w-44 md:w-52 lg:w-60 xl:w-64">
            <Image
              src={project.imageUrl}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 176px, (max-width: 1024px) 208px, 256px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col justify-center">
          <h3 className="font-display mb-2 text-2xl leading-snug font-semibold text-[#1a1f3a] transition-colors group-hover:text-[#3d4a8a] sm:text-2xl lg:text-3xl">
            {project.title}
          </h3>

          <div className="mb-3 flex items-center gap-2">
            <Tag variant="accent">{project.year}</Tag>
            <Tag variant="default">{project.tag}</Tag>
          </div>

          <p className="line-clamp-3 text-sm leading-relaxed text-[#6b7280] sm:text-base">
            {project.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
