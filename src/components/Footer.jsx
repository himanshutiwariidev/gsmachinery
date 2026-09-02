import Link from "next/link";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/#top-products" },
    { title: "Gallery", href: "/#gallery" },
    { title: "Contact", href: "/#contact" },
    { title: "About", href: "/#about" },
  ];

  return (
    <footer className="bg-[#232831] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <Image
              src="/logo.jpeg"
              alt="GS Machinery"
              width={70}
              height={70}
              className="object-contain bg-white p-1 mb-4"
            />
            <p className="text-sm leading-6 text-gray-400">
              Manufacturer of PET blowing machines, bottle &amp; jar making
              machines, blow moulding machines and water filling machines.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[15px] font-semibold uppercase tracking-wide mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="hover:text-[#c3ab5d] transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[15px] font-semibold uppercase tracking-wide mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#c3ab5d] shrink-0" />
                <span>GST : 07AICPG7964K1ZW</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#c3ab5d] shrink-0" />
                <a
                  href="tel:+918588966670"
                  className="hover:text-[#c3ab5d] transition-colors duration-300"
                >
                  +91 8588966670 , 9811656190 
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#c3ab5d] shrink-0" />
                <span>
                  Kh. No. 10/3, Ground Floor, Near Shani Mandir, Tikri Khurd
                  Village, Delhi - 110040, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-[#c3ab5d]/30">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="tracking-wide text-center sm:text-left">
            &copy; {year}{" "}
            <span className="text-[#c3ab5d] font-semibold">GS Machinery</span>.
            All Rights Reserved.
          </p>
          <p className="text-center sm:text-right hover:text-[#c3ab5d] transition-colors duration-300">
            Designed &amp; Developed by{" "}
            <span className="font-medium">CYBERTRICKS Media Pvt Ltd</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
