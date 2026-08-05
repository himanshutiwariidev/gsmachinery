import { LuGauge, LuRuler, LuWallet, LuZap, LuHeadset } from "react-icons/lu";

const points = [
  {
    icon: LuGauge,
    question: "How many bottles do you need per day?",
    answer:
      "This decides whether you need a manual, semi-automatic, or fully automatic machine.",
  },
  {
    icon: LuRuler,
    question: "What size and shape of bottles do you make?",
    answer: "This affects the cavity count and mould size you need.",
  },
  {
    icon: LuWallet,
    question: "What is your budget?",
    answer:
      "A manual machine costs less to buy but needs more manpower. A fully automatic machine costs more upfront but saves money over time.",
  },
  {
    icon: LuZap,
    question: "Do you have space and power supply ready?",
    answer: "Bigger machines need more floor space and higher power capacity.",
  },
  {
    icon: LuHeadset,
    question: "Does the manufacturer offer support?",
    answer:
      "Always choose a manufacturer who helps with installation and after-sales service, not just the machine.",
  },
];

export default function HowToChooseSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3">
          Buying Guide
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#232831] leading-tight mb-4">
          How to Choose the Best Pet Bottle Making Machine
        </h2>
        <p className="text-[15px] leading-7 text-gray-600 max-w-3xl mb-10">
          Before buying, think about these points:
        </p>

        <div className="space-y-5">
          {points.map((point) => (
            <div
              key={point.question}
              className="flex items-start gap-5 bg-[#f9f7f2] rounded-2xl p-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-white border-2 border-[#b99631]/40 flex items-center justify-center text-[#b99631] text-xl">
                <point.icon />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#232831] mb-1">
                  {point.question}
                </h3>
                <p className="text-sm leading-6 text-gray-600">
                  {point.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[15px] leading-7 text-gray-600 max-w-3xl">
          At GS Machinery, our team is happy to guide you through these
          questions before you decide, so you invest in the right machine the
          first time.
        </p>
      </div>
    </section>
  );
}
