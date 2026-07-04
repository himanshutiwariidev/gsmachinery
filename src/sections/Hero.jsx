import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="hidden md:block w-full h-[600px]  ">
        <Image
          src="/desktopbanner.webp" // Replace with your banner image name
          alt="PET Blowing Machine Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
       <div className="md:hidden w-full h-[550px]  ">
        <Image
          src="/mobilebanner.webp" // Replace with your banner image name
          alt="PET Blowing Machine Banner"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};