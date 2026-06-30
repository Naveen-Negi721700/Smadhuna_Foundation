"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={200}
                height={65}
                className="h-auto w-[180px] sm:w-[220px] md:w-[260px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              About Us
            </Link>

            <Link
              href="/verticals"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              Our Verticals
            </Link>

            <Link
              href="/theory-of-change"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              Theory of Change
            </Link>

            <Link
              href="/impact"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              Impact
            </Link>


            <Link
              href="/involved"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              Get Involved
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Donate Button */}
            <Link
              href="/Donate"
              className="hidden lg:inline-block rounded-3xl bg-gradient-to-r from-[#1c905a] to-[#39895b] px-6 py-3 text-base font-bold text-white transition duration-300 hover:scale-105 hover:text-black"
            >
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
            
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 z-40"
    ></div>

    {/* Mobile Menu */}
    <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100 z-50">
      <div className="flex flex-col p-4">

        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          About Us
        </Link>

        <Link
          href="/verticals"
          onClick={() => setMenuOpen(false)}
          className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Our Verticals
        </Link>

        <Link
          href="/theory-of-change"
          onClick={() => setMenuOpen(false)}
          className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Theory of Change
        </Link>

        <Link
          href="/impact"
          onClick={() => setMenuOpen(false)}
          className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Impact
        </Link>

       

        <Link
          href="/involved"
          onClick={() => setMenuOpen(false)}
          className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
        >
          Get Involved
        </Link>

        <Link
          href="/Donate"
          onClick={() => setMenuOpen(false)}
          className="mt-4"
        >
          <button className="w-full rounded-3xl bg-gradient-to-r from-[#0b3d26] to-[#2e8b57] px-6 py-3 text-base font-bold text-white">
            DONATE
          </button>
        </Link>
      </div>
    </div>    
  </>
)}
    </nav>   
  
  );
};    

export default Navbar;