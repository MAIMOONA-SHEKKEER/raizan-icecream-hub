"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";
import { navLinks } from "@/data/navLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pink-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-pink-600 sm:text-2xl"
        >
          Raizan Ice Cream Hub
        </Link>

        <div className="hidden md:block">
          <Navbar />
        </div>

        <div className="hidden md:block">
          <Link
            href="/menu"
            className="rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
          >
            Explore GLAZE
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg border border-pink-200 px-3 py-2 text-sm font-medium text-pink-600 md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-pink-100 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-zinc-700 transition hover:text-pink-600"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-pink-700"
            >
              Explore GLAZE
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
