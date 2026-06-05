"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
                width={70}
                height={70}
                className="w-[30vh]"
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
              href="/compliance"
              className="text-base font-semibold text-gray-700 hover:text-emerald-700 transition"
            >
              Compliance
            </Link>

            <Link
              href="/get-involved"
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
              className="hidden md:inline-block rounded-3xl bg-gradient-to-r from-[#1c905a] to-[#39895b] px-6 py-3 text-base font-bold text-white transition duration-300 hover:scale-105 hover:text-black"
            >
              Donate
            </Link>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <input
                type="checkbox"
                id="menu-toggle"
                className="peer hidden"
              />

              <label
                htmlFor="menu-toggle"
                className="cursor-pointer inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </label>

              {/* Mobile Dropdown */}
              <div className="absolute left-0 top-20 hidden w-full bg-white shadow-lg peer-checked:block">
                <div className="flex flex-col p-4">
                  <Link
                    href="/about"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    About Us
                  </Link>

                  <Link
                    href="/verticals"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Our Verticals
                  </Link>

                  <Link
                    href="/theory-of-change"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Theory of Change
                  </Link>

                  <Link
                    href="/impact"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Impact
                  </Link>

                  <Link
                    href="/compliance"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Compliance
                  </Link>

                  <Link
                    href="/get-involved"
                    className="rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    Get Involved
                  </Link>

                  <Link
                    href="/donate"
                    className="mt-4 rounded-md bg-[#D98A29] py-3 text-center text-base font-bold text-white hover:bg-[#c2761f]"
                  >
                    DONATE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;