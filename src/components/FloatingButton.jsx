"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "918588966671";
  const message = "Hi, I would like to know more about your services.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] group"
    >
      {/* Tooltip */}
      <span className="absolute right-0 bottom-[70px] whitespace-nowrap rounded-full bg-black px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
        Chat with us
      </span>

      {/* Pulse */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

      {/* Button */}
      <span
        className="
          relative flex h-16 w-16 items-center justify-center
          rounded-full bg-[#25D366]
          text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)]
          transition-all duration-300
          hover:scale-110 hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)]
        "
      >
        <FaWhatsapp className="text-[36px]" />
      </span>
    </a>
  );
}