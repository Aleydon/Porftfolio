'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/assets/logo.svg';
import { NAV_LINKS } from '@/constants/navLinks';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 md:flex md:items-center md:justify-between">
      {/* Logo and Title */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </Link>
        <Link href="/">
          <h1 className="hidden md:block md:px-4 md:text-white">Aleydon</h1>
        </Link>
        {/* Hamburger Menu */}

        <button
          onClick={toggleMenu}
          className="flex flex-col items-center space-y-1 text-white md:hidden"
        >
          <div className="h-0.5 w-6 bg-white"></div>
          <div className="h-0.5 w-6 bg-white"></div>
          <div className="h-0.5 w-6 bg-white"></div>
        </button>
      </div>

      {/* Navigation Menu  */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} mt-4 justify-center p-2.5 pb-7 md:mt-0 md:flex md:space-x-8`}
      >
        <div className="mb-5 flex flex-col gap-4 space-y-2 md:flex-row md:justify-between md:space-y-0">
          {NAV_LINKS.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="p-1 text-white transition-all duration-200 md:rounded-sm md:border-b-2 md:border-[#7562e0] md:hover:bg-[#6b57e0]"
            >
              <h2 className="text-center">{link.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
