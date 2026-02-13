import Image from 'next/image';

import Me from '@/assets/me.jpeg';
import { techIcons } from '@/constants/techIcons';
import { DownloadCV } from './DownloadCV';

export function Hero() {
  return (
    <section
      id="home"
      className="flex h-[610px] w-full flex-col items-center justify-end bg-gray-800 lg:h-[400px]"
    >
      <div className="container flex w-[50%] flex-col-reverse items-start justify-between gap-2 pb-10 lg:flex-row">
        <div className="w-full flex-col text-center lg:max-w-[600px]">
          <p className="text-2xl text-[#7562e0]">Hello i&apos;m </p>
          <h2 className="mt-1 text-3xl font-semibold text-white">
            Roberto Aleydon
          </h2>
          <p className="text-white">
            Full Stack <span className="block"></span>Web and Mobile Developer
          </p>

          <div className="text-2xl text-[#7562e0]">
            Techs
            <div className="my-2">
              <ul className="flex flex-wrap justify-center gap-2">
                {techIcons.map((icon, index) => (
                  <li key={index}>
                    <Image src={icon} alt="Tech" width={30} height={30} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-md bg-[#7562e0] p-2 transition-all duration-200 hover:bg-[#6b57e0] lg:cursor-pointer">
            <DownloadCV />
          </div>
        </div>

        <div>
          <Image
            className="mt-5 mb-2 rounded-full lg:rounded-md"
            src={Me}
            alt="Roberto Aleydon"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
