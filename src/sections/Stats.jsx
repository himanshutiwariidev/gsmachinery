"use client";

import Image from "next/image";

const stats = [
  {
    image: "/Satisfied-Clients.png",
    number: "1,200+",
    title: "Satisfied Clients",
  },
  {
    image: "/Number-Of-Employees.png",
    number: "250+",
    title: "Number Of Employees",
  },
  {
    image: "/Total-Products.png",
    number: "1,000+",
    title: "Total Products",
  },
  {
    image: "/Market-We-Serve.png",
    number: "500+",
    title: "Market We Serve",
  },
];

export default function StatsSection() {
  return (
    <section className="py-10 bg-[#f7f7f7]">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Left Border */}

              <span className="absolute left-0 top-0 h-full w-[10px] sm:w-[16px] bg-[#b99631]"></span>

              {/* Content */}

              <div className="px-4 py-6 sm:px-10 sm:py-10 flex flex-col items-center text-center">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-14 h-14 sm:w-[100px] sm:h-[100px] object-contain mb-3 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                />

                <h2 className="text-2xl sm:text-[40px] leading-none font-extrabold text-[#232831]">
                  {item.number}
                </h2>

                <h3 className="mt-2 text-sm sm:text-[18px] leading-tight sm:leading-[40px] font-medium text-[#2d3138]">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}