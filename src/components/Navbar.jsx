"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "PRODUCT",
      href: "#top-products",
    },
    {
      title: "Gallery",
      href: "#gallery",
    },
    {
      title: "CONTACT",
      href: "#contact",
    },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-50 shadow-md">
      {/* ===================== TOP BAR ===================== */}
      <div className="bg-[#c3ab5d] text-white pb-2">
        <div className="max-w-7xl mx-auto px-3 sm:px-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2  sm:gap-6 py-4 sm:py-0 h-14 sm:h-12">
            {/* Left - GST */}
            <div className="text-xs sm:text-sm font-semibold">
              <span>GST : 07AICPG7964K1ZW</span>
            </div>

            {/* Right - Phone */}
            <div>
              <a
                href="tel:+9108045476539"
                className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium "
              >
                <FaPhoneAlt className="text-sm sm:text-base" />
                <span className="truncate">+91 08045476539</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== NAVBAR ===================== */}

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-5">
          <div className="h-17 flex items-center justify-between">
            {/* Logo */}

            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={160}
                height={64}
                priority
                className="object-contain h-12 sm:h-14 w-auto"
              />
            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex items-center gap-2 text-[15px] font-semibold uppercase tracking-wide text-[#b99631] transition-all duration-300 hover:text-black"
                >
                  {item.title}

                  {item.dropdown && <FaChevronDown className="text-[11px]" />}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-[#b99631] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-[#b99631] text-3xl"
            >
              {mobileMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* ===================== MOBILE MENU ===================== */}

      <div
        className={`lg:hidden bg-white overflow-hidden transition-all duration-500 ${
          mobileMenu ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        {navLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={() => setMobileMenu(false)}
            className="block border-b border-gray-200 px-6 py-4 text-[#b99631] font-medium hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              {item.title}
              {item.dropdown && <FaChevronDown className="text-xs" />}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}
