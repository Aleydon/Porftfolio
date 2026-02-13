import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { HERO_DATA } from '@/lib/data';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section
      aria-label="Introduction"
      className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-36 lg:pb-28"
    >
      <Container>
        {/*
         * Mobile  → flex-col, centered text
         * md+     → flex-row, text left / avatar right
         * xl+     → larger text, taller avatar
         */}
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:gap-12 md:text-left lg:gap-16 xl:gap-20">
          {/* ── Text block ─────────────────────────────── */}
          <div className="flex flex-col items-center md:max-w-lg md:items-start lg:max-w-xl xl:max-w-2xl">
            <h1
              className="animate-fade-in-up font-display mb-4 text-4xl leading-tight font-semibold text-[#1a1f3a] sm:text-5xl lg:mb-6 lg:text-6xl xl:text-[4.5rem] 2xl:text-7xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Hi, I am {HERO_DATA.name},
              <br />
              Full Stack Developer
            </h1>

            <p className="animate-fade-in-up mb-8 max-w-sm text-base leading-relaxed text-[#6b7280] delay-100 sm:text-lg md:max-w-md lg:mb-10 lg:max-w-lg lg:text-xl">
              {HERO_DATA.bio}
            </p>

            <div className="animate-fade-in-up delay-200">
              <Button as="a" href={HERO_DATA.resumeUrl} size="md">
                Download Resume
              </Button>
            </div>
          </div>

          {/* ── Avatar ─────────────────────────────────── */}
          <div className="animate-scale-in flex-shrink-0 delay-300">
            <div className="bg-[#1a1f3a]shadow-2xl relative h-36 w-36 overflow-hidden rounded-full ring-[#e8eaed] sm:h-48 sm:w-48 md:h-60 md:w-60 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96">
              <Image
                src={HERO_DATA.avatarUrl}
                alt={HERO_DATA.avatarAlt}
                fill
                sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, (max-width: 1024px) 240px, (max-width: 1280px) 288px, 384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
