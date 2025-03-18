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
    <nav className="md:flex md:justify-between md:items-center p-4 bg-gray-800">
      {/* Logo and Title */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </Link>
        <Link href="/">
          <h1 className="md:text-white md:px-4 hidden md:block">Aleydon</h1>
        </Link>
        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden flex flex-col items-center space-y-1"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Navigation Menu  */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} 
        md:flex md:space-x-8 justify-center mt-4 md:mt-0 p-2.5 pb-7`}
      >
        <div
          className="flex flex-col space-y-2 gap-4 mb-5
          md:flex-row md:space-y-0 md:justify-between
        "
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white md:bg-[#7562e0] hover:bg-purple-700 md:rounded-md p-1"
            >
              <h2 className="text-center">{link.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
