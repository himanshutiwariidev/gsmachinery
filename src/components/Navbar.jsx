"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    {
      title: "HOME",
      href: "/",
    },
    {
      title: "PRODUCT",
      href: "/products",
      dropdown: true,
    },
    {
      title: "COMPANY PROFILE",
      href: "/company-profile",
    },
    {
      title: "SITEMAP",
      href: "/sitemap",
    },
    {
      title: "CONTACT",
      href: "/contact",
    },
    {
      title: "OUR CATALOGUE",
      href: "/catalogue",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF size={14} />,
      href: "#",
    },
    {
      icon: <FaXTwitter size={14} />,
      href: "#",
    },
    {
      icon: <FaLinkedinIn size={14} />,
      href: "#",
    },
    {
      icon: <FaYoutube size={14} />,
      href: "#",
    },
    {
      icon: <FaInstagram size={14} />,
      href: "#",
    },
  ];

  return (
    <header className="w-full sticky top-0 left-0 z-50 shadow-md">


{/* ===================== TOP BAR ===================== */}

<div className="bg-[#c3ab5d] text-white">
  <div className="max-w-7xl mx-auto px-5">

    <div className="h-auto sm:h-12 py-2 sm:py-0 flex items-center justify-center sm:justify-between gap-2">

      {/* Left - GST & Phone */}

      <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold">

        <span className="">
          GST : 07AICPG7964K1ZW
        </span>

        <a
          href="tel:+919910050448"
          className="flex items-center gap-2 "
        >
          <FaPhoneAlt />
          +91 9910050448
        </a>

      </div>

      {/* Right - Social Icons (hidden on mobile) */}

      <div className="hidden sm:flex items-center gap-2">

        {socialLinks.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="w-8 h-8 rounded-sm bg-white/20 hover:bg-[#b99631] transition-all duration-300 flex items-center justify-center"
          >
            {item.icon}
          </Link>
        ))}

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
                width={80}
                height={80}
                priority
                className="object-contain"
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

                  {item.dropdown && (
                    <FaChevronDown className="text-[11px]" />
                  )}

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