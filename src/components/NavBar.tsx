'use client';

import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:flex md:justify-between md:items-center p-4 bg-gray-800">
      {/* Logo ou Título */}
      <div className="flex justify-between items-center">
        <div className="text-white font-bold">Logo</div>

        {/* Botão Hamburger */}
        <button
          onClick={toggleMenu}
          className="text-white md:hidden flex flex-col items-center space-y-1"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </div>

      {/* Menu de Navegação */}
      <div
        className={`${isOpen ? 'block' : 'hidden'} 
        md:flex md:space-x-8 justify-center mt-4 md:mt-0 p-2.5`}
      >
        <div
          className="flex flex-col space-y-2  gap-4
          md:flex-row md:space-y-0 md:justify-between
        "
        >
          <a
            href="/"
            className="text-white md:bg-green-500 hover:bg-green-400  md:rounded-md p-1 "
          >
            <h2 className="text-center">Home</h2>
          </a>
          <a
            href="/about"
            className="text-white md:bg-green-500 hover:bg-green-400 md:rounded-md p-1"
          >
            <h2 className="text-center">About</h2>
          </a>
          <a
            href="/services"
            className="text-white md:bg-green-500 hover:bg-green-400 md:rounded-md p-1"
          >
            <h2 className="text-center">Projects</h2>
          </a>
          <a
            href="/contact"
            className="text-white md:bg-green-500 hover:bg-green-400 md:rounded-md p-1"
          >
            <h2 className="text-center">Contact</h2>
          </a>
        </div>
      </div>
    </nav>
  );
}
