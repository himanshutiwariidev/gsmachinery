import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full">
      {/* Desktop Banner */}
      <div className="hidden md:block relative w-full h-[600px]">
        <Image
          src="/desktopbanner.webp"
          alt="PET Blowing Machine Banner"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1920px"
        />
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden relative w-full h-[350px]">
        <Image
          src="/mobilebanner.webp"
          alt="PET Blowing Machine Banner"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
};
