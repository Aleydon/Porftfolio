'use client';

import { NAV_ITEMS } from '@/lib/data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

// Only "Works", "Blog", "Contact" show in the desktop header per the design
const DESKTOP_NAV = NAV_ITEMS.filter(item =>
  ['Home', 'Projects', 'Contact'].includes(item.label)
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        id="home"
        className="fixed top-0 right-0 left-0 z-50 border-b border-[#e8eaed]/60 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Logo — visible md+ */}
          <Link
            href="/"
            className="font-display hidden text-lg font-semibold text-[#1a1f3a] transition-colors hover:text-[#FF5E5B] md:block"
          >
            Aleydon
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {DESKTOP_NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-[15px] font-medium text-[#1a1f3a] transition-all duration-150 hover:bg-[#f5f6f8] hover:text-[#FF5E5B]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger — only visible below md */}
          <div className="ml-auto flex md:hidden">
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
              onClick={() => {
                setIsOpen(prev => !prev);
              }}
              className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-[6px] rounded-lg transition-colors hover:bg-black/5"
            >
              <span
                className={cn(
                  'block h-0.5 w-6 origin-center rounded-full bg-[#1a1f3a] transition-all duration-300',
                  isOpen && 'translate-y-2 rotate-45'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 rounded-full bg-[#1a1f3a] transition-all duration-300',
                  isOpen && 'scale-x-0 opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-6 origin-center rounded-full bg-[#1a1f3a] transition-all duration-300',
                  isOpen && '-translate-y-2 -rotate-45'
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={() => {
          setIsOpen(false);
        }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          'fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white px-6 pt-20 pb-10 shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.href}
              className="animate-slide-down"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="block rounded-lg px-4 py-3 text-lg font-medium text-[#1a1f3a] transition-colors duration-150 hover:bg-[#f5f6f8] hover:text-[#FF5E5B]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto text-sm text-[#6b7280]">
          © {new Date().getFullYear()} John Doe
        </div>
      </nav>
    </>
  );
}
