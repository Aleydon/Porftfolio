import Image from 'next/image';

import Me from '@/assets/me.jpeg';

export function Hero() {
  return (
    <div className="flex flex-col w-full items-center justify-center bg-amber-200">
      <div className="p-4">
        <h1>
          Hi, I&apos;m Roberto Aleydon. <br /> Web and Mobile Developer
        </h1>
      </div>
      <div>
        <Image
          className="rounded-full"
          src={Me}
          alt="Vercel Logo"
          width={100}
          height={24}
        />
      </div>
    </div>
  );
}
