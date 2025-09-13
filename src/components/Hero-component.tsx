import Image from "next/image";

export const TITLE_H1_HERO = "Aqui Fue";
export const SUBTITLE_HERO =
  "Comer es una experiencia, pero comer bien es una delicia.";

const Hero = () => {
  return (
    <div className="relative w-full h-[calc(100vh-0px)] flex justify-center items-center max-w-full!">
    {/* <Image src="/images/HeroAquiFue.png" alt="Hero" fill className="object-cover" /> */}

      {/* Overlay con gradiente */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-10" /> */}

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-black text-center gap-10 px-4 md:px-16 pb-48">
        <div className="relative flex flex-col gap-10 top-16">
          <div className="flex flex-col gap-10">
            <h1 className="uppercase md:capitalize text-[clamp(10.25rem,3.5vw,3.5rem)] font-bold leading-none">
              {TITLE_H1_HERO}
            </h1>
            <h2 className="text-[clamp(2rem,1.5vw,1.5rem)] font-medium">
              {SUBTITLE_HERO}
            </h2>
          </div>
          {/* <HeroButtons /> */}
        </div>
      </div>
      <div className="container-padding-section py-0! max-w-main absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full">
        {/* <SearchFilter /> */}
      </div>
    </div>
  );
};

export default Hero;