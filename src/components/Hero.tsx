import Image from 'next/image';

import Me from '@/assets/me.jpeg';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-end  w-full h-[400px] bg-gray-800">
      <div className="container flex flex-col-reverse items-start justify-between md:flex-row pb-10 w-[40%] gap-2">
        <div className="w-full md:max-w-[600px] text-center">
          <p className="text-[#7562e0] text-2xl">Hello i&apos;m </p>
          <h2 className="text-3xl font-semibold mt-1 text-white">
            Roberto Aleydon
          </h2>
          <p className="text-white">Web and Mobile Developer</p>

          <div className="text-[#7562e0] text-2xl">Techs</div>
          <div className="text-white">Contact</div>
        </div>
        <Image
          className="rounded-full md:rounded-md mb-2 mt-5"
          src={Me}
          alt="Roberto Aleydon"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}
