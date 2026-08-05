import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block relative w-full h-[600px]">
        <Image
          src="/banner.png"
          alt="PET Blowing Machine Banner"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1920px"
        />
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden relative w-full h-[500px]">
        <Image
          src="/mobilebanner.png"
          alt="PET Blowing Machine Banner"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mt-8 mb-4">
        Pet Bottle Making Machine Manufacturer in Delhi – GS Machinery
      </h1>
    </section>
  );
};
