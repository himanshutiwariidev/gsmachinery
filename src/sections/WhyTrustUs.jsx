import { LuUsers, LuPackage, LuMapPin, LuBadgeCheck, LuCalendarCheck, LuBuilding } from "react-icons/lu";

const trustPoints = [
  {
    icon: LuUsers,
    value: "1,200+",
    label: "Satisfied clients across India",
  },
  {
    icon: LuPackage,
    value: "1,000+",
    label: "Machines and products delivered",
  },
  {
    icon: LuMapPin,
    value: "500+",
    label: "Markets served across the country",
  },
  {
    icon: LuBadgeCheck,
    value: "ISO 9001:2015",
    label: "Certified manufacturing unit",
  },
  {
    icon: LuCalendarCheck,
    value: "18+ Years",
    label: "In the plastic machinery industry",
  },
  {
    icon: LuBuilding,
    value: "Delhi Based",
    label: "With pan-India delivery support",
  },
];

export default function WhyTrustUsSection() {
  return (
    <section className="py-20 bg-[#232831]">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3 text-center">
          Track Record
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-extrabold text-white leading-tight mb-4 text-center">
          Why Businesses Trust GS Machinery
        </h2>
        <div className="w-16 h-[3px] bg-[#b99631] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => (
            <div
              key={point.label}
              className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <div className="shrink-0 w-14 h-14 rounded-full bg-white/5 border-2 border-[#b99631]/50 flex items-center justify-center text-[#b99631] text-2xl">
                <point.icon />
              </div>
              <div>
                <h3 className="text-[18px] font-extrabold text-white leading-tight">
                  {point.value}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{point.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-[15px] leading-7 text-gray-400 max-w-3xl mx-auto">
          These numbers reflect years of consistent work, honest dealings,
          and machines that keep running long after installation.
        </p>
      </div>
    </section>
  );
}
