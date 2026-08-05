const machineTypes = [
  {
    title: "Manual Machines",
    desc: "Operated by hand, good for very small businesses or testing.",
  },
  {
    title: "Semi-Automatic Machines",
    desc: "Some steps are automatic, some need an operator. Good for small to mid-size units.",
  },
  {
    title: "Fully Automatic Machines",
    desc: "The whole process runs on its own, with very little manual work. Best for large-scale, high-speed production.",
  },
];

export default function WhatIsPetBottleMachineSection() {
  return (
    <section className="py-20 bg-[#f9f7f2]">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#b99631] mb-3">
          Know Your Machine
        </p>
        <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#232831] leading-tight mb-6">
          What Is a Pet Bottle Making Machine?
        </h2>

        <p className="text-[15px] leading-7 text-gray-600 max-w-4xl mb-10">
          A pet bottle making machine (also called a PET blow moulding
          machine) takes small plastic tubes, called preforms, and turns them
          into finished plastic bottles. The machine heats the preform and
          then uses air pressure to blow it into the shape of a bottle mould.
          This is how water bottles, cold drink bottles, oil bottles, and
          pharma bottles are made in factories every day.
        </p>

        <h3 className="text-[18px] font-bold text-[#232831] mb-6">
          There are three common types of these machines:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {machineTypes.map((type) => (
            <div
              key={type.title}
              className="bg-white rounded-2xl p-7 shadow-sm border-t-4 border-[#b99631]"
            >
              <h4 className="text-[16px] font-bold text-[#232831] mb-3">
                {type.title}
              </h4>
              <p className="text-sm leading-6 text-gray-600">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
