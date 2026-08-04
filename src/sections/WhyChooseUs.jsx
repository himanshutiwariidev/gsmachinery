import {
  LuFactory,
  LuBadgeCheck,
  LuCpu,
  LuHeadset,
  LuTruck,
  LuHandshake,

  LuSettings,

} from "react-icons/lu";

const reasons = [
  {
    icon: LuFactory,
    title: "Manufacturing Excellence",
    description:
      "In-house manufacturing with precision engineering and rigorous quality control at every stage of production.",
  },
  {
    icon: LuBadgeCheck,
    title: "ISO 9001:2015 Certified",
    description:
      "Certified quality management systems ensure every machine we build is consistent, reliable and built to last.",
  },
  {
    icon: LuCpu,
    title: "Advanced Technology",
    description:
      "Cutting-edge PET blowing, bottle-making and blow moulding technology engineered for high-volume production.",
  },
  {
    icon: LuHeadset,
    title: "Dedicated Support",
    description:
      "Responsive after-sales service and technical support to keep your production line running without downtime.",
  },
  {
    icon: LuTruck,
    title: "Pan-India Delivery",
    description:
      "A reliable supply chain and timely delivery network reaching manufacturers across every major market in India.",
  },
  {
    icon: LuHandshake,
    title: "Trusted Partnership",
    description:
      "Long-term relationships built on transparency, fair pricing and dependable service you can count on.",
  },
];


export default function WhyChooseUsSection() {
  return (
    <section className="relative py-20 bg-[#fbf8f2] overflow-hidden">
      {/* Decorative corner — top left */}
      <div
        className="hidden sm:block absolute top-0 left-0 z-0 w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br from-[#d9bc72] to-[#b99631]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <div
        className="hidden sm:block absolute top-0 left-0 z-0 w-20 h-20 lg:w-24 lg:h-24 bg-[#232831]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Decorative corner — bottom right */}
      <div
        className="hidden sm:block absolute bottom-0 right-0 z-0 w-28 h-28 lg:w-36 lg:h-36 bg-[#232831]"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      />
      <div
        className="hidden sm:block absolute bottom-0 right-0 z-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-tl from-[#d9bc72] to-[#b99631]"
        style={{ clipPath: "polygon(100% 100%, 0 100%, 100% 0)" }}
      />

      {/* Faint factory watermark */}
      <LuFactory className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-0 text-[420px] text-[#232831]/[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#232831]">
            Why Choose Us
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#b99631]/60"></span>
            <LuSettings className="text-[#b99631] text-xl shrink-0" />
            <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#b99631]/60"></span>
          </div>

          <h2 className="mt-5 text-[26px] sm:text-[36px] lg:text-[42px] font-extrabold leading-tight">
            <span className="text-[#232831]">Built On </span>
            <span className="text-[#b99631]">Precision, </span>
            <span className="text-[#232831]">Trusted For </span>
            <span className="text-[#b99631]">Performance</span>
          </h2>

          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-4"></div>

          <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500">
            Over a decade of engineering plastic machinery that manufacturers
            rely on for consistent output, durability and after-sales care.
          </p>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-7 flex gap-5"
            >
              <div className="shrink-0 w-16 h-16 rounded-full border-2 border-[#b99631]/40 flex items-center justify-center text-[#b99631] text-2xl group-hover:bg-[#b99631] group-hover:text-white group-hover:border-[#b99631] transition-all duration-300">
                <reason.icon />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-[#232831] leading-snug">
                    {reason.title}
                  </h3>
                  <span className="text-2xl font-extrabold text-[#b99631]/60 shrink-0">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
