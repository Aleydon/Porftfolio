import Image from 'next/image';

import Me from '@/assets/me.jpeg';
import { techIcons } from '@/constants/techIcons';
import { DownloadCV } from './DownloadCV';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-end  w-full h-[610px]md:h-[400px] bg-gray-800">
      <div className="container flex flex-col-reverse items-start justify-between md:flex-row pb-10 w-[40%] gap-2">
        <div className="flex-col w-full md:max-w-[600px] text-center">
          <p className="text-[#7562e0] text-2xl">Hello i&apos;m </p>
          <h2 className="text-3xl font-semibold mt-1 text-white">
            Roberto Aleydon
          </h2>
          <p className="text-white">
            Full Stack <span className="block"></span>Web and Mobile Developer
          </p>

          <div className="text-[#7562e0] text-2xl">
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
          <div
            className="flex justify-center items-center bg-[#7562e0] p-2 
            rounded-md md:cursor-pointer hover:bg-[#6b57e0] transition-all duration-200"
          >
            <DownloadCV />
          </div>
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
