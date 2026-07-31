"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What types of machines does GS Machinery manufacture?",
    answer:
      "We manufacture PET blowing machines, bottle and jar making machines, blow moulding machines, and water filling machines for plastic packaging production.",
  },
  {
    question: "Do you provide installation and training support?",
    answer:
      "Yes, our engineers assist with on-site installation and operator training to ensure your team is confident running the machine from day one.",
  },
  {
    question: "Can machines be customized for specific bottle or jar sizes?",
    answer:
      "Yes, we offer configurations for different cavity counts, capacities and mould sizes based on your production requirements.",
  },
  {
    question: "What is the typical delivery time?",
    answer:
      "Delivery time is generally around 10 days depending on the machine and quantity ordered, though this can vary for customized configurations.",
  },
  {
    question: "Do you offer after-sales service and spare parts?",
    answer:
      "Yes, we provide dedicated technical support and spare parts availability to keep your production line running with minimal downtime.",
  },
  {
    question: "Do you deliver across India?",
    answer:
      "Yes, we deliver pan-India with a reliable supply chain reaching manufacturers across every major market in the country.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3">
            FAQ
          </p>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#232831]">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-4"></div>
          <p className="mt-5 text-[15px] leading-7 text-gray-500 max-w-xl mx-auto">
            Answers to the questions we hear most often from manufacturers
            evaluating our machines.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? "border-[#b99631] bg-[#fbf8f2]" : "border-gray-200 bg-white"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15px] sm:text-[16px] font-semibold text-[#232831]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#b99631] text-white"
                        : "bg-gray-100 text-[#b99631]"
                    }`}
                  >
                    {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-6 text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
