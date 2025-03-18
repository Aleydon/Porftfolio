import Image from 'next/image';

import Me from '@/assets/me.jpeg';

export function Hero() {
  return (
    <div
      className="flex flex-col w-full items-center justify-center
        gap-4 md:flex-row md:justify-between md:items-center md:gap-8"
    >
      <div>
        <h2 className="md:text-2xl">
          Hi, I&apos;m Roberto Aleydon. <br /> Web and Mobile Developer
        </h2>
      </div>

      <div>
        <Image
          className="rounded-full md:w-32 md:h-32 "
          src={Me}
          alt="Vercel Logo"
          width={100}
          height={24}
        />
      </div>
    </div>
  );
}
