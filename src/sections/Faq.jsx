"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is a pet bottle making machine used for?",
    answer:
      "A pet bottle making machine is used to convert plastic preforms into finished plastic bottles through a process called blow moulding. It is commonly used in water bottling plants, beverage companies, oil bottling units, and pharma packaging businesses.",
  },
  {
    question: "Who is the best pet bottle making machine manufacturer in Delhi?",
    answer:
      "GS Machinery is a trusted pet bottle making machine manufacturer in Delhi, with over 18 years of experience and 1,200+ satisfied clients. We are ISO 9001:2015 certified and offer machines with proper after-sales support.",
  },
  {
    question: "What is the price of a pet bottle making machine?",
    answer:
      "Prices depend on the type and capacity of the machine. Semi-automatic machines start from around ₹3,90,000, while fully automatic machines can go up to ₹14,00,000 or more, depending on cavity count and production speed. Contact us for an exact quote based on your requirement.",
  },
  {
    question:
      "What is the difference between a semi-automatic and fully automatic pet bottle making machine?",
    answer:
      "A semi-automatic machine needs an operator for some steps, like loading preforms, while a fully automatic machine handles the entire process on its own with minimal manual work. Fully automatic machines are ideal for large-scale, high-speed production.",
  },
  {
    question: "How many bottles can a pet bottle making machine produce in a day?",
    answer:
      "This depends on the machine type and cavity count. A 2-cavity machine produces fewer bottles per hour than a 6-cavity fully automatic machine. GS Machinery can suggest the right machine based on your daily production target.",
  },
  {
    question: "Does GS Machinery provide installation and training support?",
    answer:
      "Yes. Our engineers assist with on-site installation and train your operators, so your team is confident running the machine from day one.",
  },
  {
    question: "Can the machine be customized for different bottle or jar sizes?",
    answer:
      "Yes. We offer machines in different cavity counts, capacities, and mould sizes, based on the bottle or jar size you need to manufacture.",
  },
  {
    question: "How long does it take to deliver a pet bottle making machine?",
    answer:
      "Delivery generally takes around 10 days, depending on the machine model and quantity ordered. Custom configurations may take a little longer.",
  },
  {
    question: "Do you provide spare parts and after-sales service?",
    answer:
      "Yes. We provide spare parts and dedicated technical support to keep your production line running with minimal downtime.",
  },
  {
    question: "Do you deliver pet bottle making machines outside Delhi?",
    answer:
      "Yes. While we are based in Delhi, we deliver our machines pan-India, reaching manufacturers across every major market in the country.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

        <div className="mt-16 text-center bg-[#232831] rounded-2xl px-6 sm:px-12 py-12">
          <h3 className="text-[22px] sm:text-[28px] font-extrabold text-white leading-tight mb-4">
            Get in Touch with GS Machinery
          </h3>
          <p className="text-[15px] leading-7 text-gray-400 max-w-2xl mx-auto mb-8">
            Looking for a dependable pet bottle making machine manufacturer?
            GS Machinery has been building trusted, high-performance machines
            since 2008. From semi-automatic to fully automatic models, we
            have a machine for every stage of your business.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-[#b99631] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-[#a3812a]"
          >
            Enquire Now for the Best Price
          </a>
        </div>
      </div>
    </section>
  );
}
