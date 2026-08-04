import { FaStar } from "react-icons/fa";
import GoogleLogo from "@/components/GoogleLogo";
import Avatar from "@/components/Avatar";

const testimonials = [
  {
    title: "Outstanding Build Quality",
    text: "Our PET blowing machine from GS Machinery has been running non-stop for over a year with zero major issues. Truly reliable engineering.",
    name: "Rajesh Mehta",
    date: "2026-05-14",
  },
  {
    title: "Excellent After-Sales Support",
    text: "Whenever we've needed technical help, their team responded within hours. Support like this is rare in this industry.",
    name: "Sunita Sharma",
    date: "2026-04-02",
  },
  {
    title: "Fast, Reliable Delivery",
    text: "We ordered a bottle making machine and it arrived exactly on schedule, fully tested and ready to install.",
    name: "Vikram Patel",
    date: "2026-03-21",
  },
  {
    title: "Great Value For Money",
    text: "The build quality matches machines twice the price. Our production output has increased significantly since installation.",
    name: "Anil Kumar",
    date: "2026-02-18",
  },
  {
    title: "Smooth Installation Process",
    text: "Their engineers guided us through setup and training. Our operators were confident within the first week.",
    name: "Neha Verma",
    date: "2026-06-09",
  },
  {
    title: "Consistent Quality Output",
    text: "Every batch of bottles comes out consistent in shape and thickness. Exactly what we needed for our bottling line.",
    name: "Suresh Iyer",
    date: "2026-01-27",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-[32px] font-extrabold text-[#232831]">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[3px] bg-[#b99631] mx-auto mt-3"></div>
          <p className="mt-5 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500">
            Real feedback from manufacturers who run our machines on their
            production floor every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1 text-[#f5b400]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
                <GoogleLogo className="w-7 h-7" />
              </div>

              <h3 className="text-[19px] font-bold text-[#232831] mb-2">
                {t.title}
              </h3>

              <p className="text-[14px] leading-6 text-gray-500 flex-1">
                {t.text}
              </p>

              <div className="flex items-center gap-3 mt-6">
                <Avatar name={t.name} className="w-10 h-10 text-sm" />
                <div>
                  <p className="text-sm font-bold text-[#232831]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
