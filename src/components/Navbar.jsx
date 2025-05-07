import React, { useState } from "react";
import Button from "./Button.jsx";
import { ArrowLongRightIcon, Bars3Icon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { label: "Acasă", href: "#" },
  { label: "Utile", href: "#" },
  { label: "Despre noi", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="@container fixed top-4 left-4 right-4 z-50 flex items-center p-3 h-14 border border-gray-200 shadow-soft-gray rounded-2xl bg-white"
      aria-label="Navigare principală"
    >
      {/* Logo */}
      <div className="w-1/4 flex items-center">
        <a href="/" aria-label="Pagina principală">
          <img src="/svg/LOGO.svg" alt="logo" className="h-5 ml-2" />
        </a>
      </div>

      {/* Link-uri navigație - desktop */}
      <ul className="w-1/2 justify-center items-center font-inter font-semibold text-slate-500 gap-2 hidden @3xl:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="px-4 py-1.5 text-sm hover:bg-slate-100 rounded-md transition-all duration-300">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Acțiuni - desktop */}
      <div className="w-1/4 justify-end items-center gap-3 font-inter font-bold hidden @3xl:flex">
        <a
          href="/signup"
          className="flex flex-col items-center gap-0.5 px-3 pt-1.5 pb-0.5 text-[8px] text-slate-500 bg-slate-100 hover:bg-slate-200 rounded-md"
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
        className="ml-auto @3xl:hidden p-2 rounded"
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
          className="absolute top-16 left-0 right-0 mx-1 bg-white border border-gray-200 rounded-2xl shadow-soft-gray flex flex-col items-center px-2 py-2 gap-2 @3xl:hidden"
        >
          <ul className="flex flex-col font-inter font-semibold text-sm text-slate-500 gap-2 w-full items-center">
            {navLinks.map((link) => (
              <li key={link.label} className="w-full">
                <a
                  href={link.href}
                  className="block w-full px-4 py-2 text-center hover:bg-slate-100 rounded-lg transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/login"
            className="block w-full mt-6 px-4 py-2 font-inter font-semibold text-sm text-slate-500 text-center hover:bg-slate-100 rounded-md transition-all duration-300"
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
