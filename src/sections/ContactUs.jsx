"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaPaperPlane,
  FaGlobeAsia,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaGlobeAsia,
    label: "Country/State",
    value: "Delhi, India",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 08045476539",
    href: "tel:+9108045476539",
  },
  {
    icon: FaClock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 6:00 PM",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Address",
    value:
      "Kh. No. 10/3, Ground Floor, Near Shani Mandir, Tikri Khurd Village, Delhi - 110040, India",
  },
];

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-[#f7f7f7] scroll-mt-[450] md:scroll-mt-[100]"
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3">
            Contact Us
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#232831]">
            Get In Touch
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-4"></div>
          <p className="mt-5 text-[15px] leading-7 text-gray-500 max-w-xl mx-auto">
            Have a question about our machines or need a custom quote? Reach out
            and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 bg-[#232831] rounded-2xl p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {contactInfo.map((item) => {
                const content = (
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-11 h-11 rounded-full bg-[#b99631] text-white flex items-center justify-center text-lg">
                      <item.icon />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-400">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <p className="mt-10 text-sm leading-6 text-gray-400 border-t border-white/10 pt-6">
              GST : 07AICPG7964K1ZW
            </p>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md p-8 sm:p-10">
            {submitted && (
              <div className="mb-6 rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700">
                Thank you! Your message has been received — our team will get
                back to you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#232831] focus:outline-none focus:border-[#b99631] focus:ring-1 focus:ring-[#b99631] transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#232831] focus:outline-none focus:border-[#b99631] focus:ring-1 focus:ring-[#b99631] transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#232831] focus:outline-none focus:border-[#b99631] focus:ring-1 focus:ring-[#b99631] transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-[#232831] focus:outline-none focus:border-[#b99631] focus:ring-1 focus:ring-[#b99631] transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#b99631] hover:bg-[#232831] text-white font-semibold uppercase tracking-wide text-sm px-8 py-3 transition-colors duration-300"
              >
                Send Message
                <FaPaperPlane size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
