const keyFacts = [
  { label: "Nature of Business", value: "Manufacturer, Supplier" },
  { label: "Year of Establishment", value: "2008" },
  { label: "No. of Employees", value: "25" },
  { label: "GST No.", value: "07AICPG7964K1ZW" },
  { label: "Annual Turnover", value: "INR 5 Crore" },
  { label: "Manufacturing Brand Name", value: "GS Machinery" },
  { label: "Location", value: "Delhi, India" },
];

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Narrative */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3">
              About Us
            </p>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#232831] leading-tight mb-6">
              Manufacturing Excellence Since{" "}
              <span className="text-[#b99631]">2008</span>
            </h2>

            <div className="space-y-4 text-[15px] leading-7 text-gray-600">
              <p>
                Since 2008, we, GS Machinery, have been striving day and
                night to meet all the demands for high-performance Automatic
                Blow Molding Machines, Air Dryers, Soda Bottle Blowing
                Machines, Fully Automatic Bottle Making Machines, Automatic
                PET Bottle Making Machines, and other products.
              </p>
              <p>
                We are registered manufacturers and suppliers located in the
                capital city of India, Delhi. Backed by excellent resources,
                we are continually achieving excellence across all our
                business activities.
              </p>
              <p>
                Thus, we are a customer-centric organization, ensuring
                timely completion of orders, secure transactions, flexible
                business policies, and other benefits. Over the years, we
                have achieved tremendous growth and the support of a large
                clientele because of our hard work.
              </p>
            </div>
          </div>

          {/* Key Facts */}
          <div className="relative">
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 border-4 border-[#b99631]/20 rounded-2xl"></div>

            <div className="relative bg-[#232831] rounded-2xl p-8 sm:p-10 shadow-xl">
              <h3 className="text-white text-[20px] font-bold mb-6 pb-4 border-b border-white/10">
                Key Facts of GS Machinery
              </h3>

              <dl className="space-y-5">
                {keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center justify-between gap-4 pb-5 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <dt className="text-sm text-gray-400">{fact.label}</dt>
                    <dd className="text-sm font-semibold text-white text-right">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
