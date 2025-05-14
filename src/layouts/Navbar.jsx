import React, { useState } from 'react';
import Button from '../components/Button.jsx';
import { ArrowLongRightIcon, Bars3Icon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { label: 'Acasă', href: '#' },
  { label: 'Utile', href: '#' },
  { label: 'Despre noi', href: '#' },
  { label: 'Contact', href: '#' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="shadow-soft-gray @container fixed top-4 right-4 left-4 z-20 flex h-14 items-center rounded-2xl border border-gray-200 bg-white p-3"
      aria-label="Navigare principală"
    >
      {/* Logo */}
      <div className="flex w-1/4 items-center">
        <a href="/" aria-label="Pagina principală">
          <img src="/svg/LOGO.svg" alt="logo" className="ml-2 h-5" />
        </a>
      </div>

      {/* Link-uri navigație - desktop */}
      <ul className="font-inter hidden w-1/2 items-center justify-center gap-2 font-semibold text-slate-500 @3xl:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="rounded-md px-4 py-1.5 text-sm transition-all duration-300 hover:bg-slate-100">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Acțiuni - desktop */}
      <div className="font-inter hidden w-1/4 items-center justify-end gap-3 font-bold @3xl:flex">
        <a
          href="/signup"
          className="flex flex-col items-center gap-0.5 rounded-md bg-slate-100 px-3 pt-1.5 pb-0.5 text-[8px] text-slate-500 hover:bg-slate-200"
        >
          <UserIcon className="size-3 text-slate-600" />
          <p className="overflow-x-hidden text-nowrap text-ellipsis">Sign up</p>
        </a>
        <Button variant="navLink" link="/cursuri">
          Cursuri
          <ArrowLongRightIcon className="size-6 text-white" />
        </Button>
      </div>

      {/* Buton hamburger - mobil */}
      <button
        className="ml-auto rounded p-2 @3xl:hidden"
        aria-label="Deschide meniul"
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <XMarkIcon className="h-7 w-7 text-slate-700" /> : <Bars3Icon className="h-7 w-7 text-slate-700" />}
      </button>

      {/* Meniu mobil */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="shadow-soft-gray absolute top-16 right-0 left-0 mx-1 flex flex-col items-center gap-2 rounded-2xl border border-gray-200 bg-white px-2 py-2 @3xl:hidden"
        >
          <ul className="font-inter flex w-full flex-col items-center gap-2 text-sm font-semibold text-slate-500">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full">
                <a
                  href={link.href}
                  className="block w-full rounded-lg px-4 py-2 text-center transition-all duration-300 hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/login"
            className="font-inter mt-6 block w-full rounded-md px-4 py-2 text-center text-sm font-semibold text-slate-500 transition-all duration-300 hover:bg-slate-100"
            onClick={() => setMenuOpen(false)}
          >
            Log In
          </a>
          <Button variant="navLink" link="/cursuri">
            Cursuri
            <ArrowLongRightIcon className="size-6 text-white" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
