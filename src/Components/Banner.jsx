import React from "react";
import Link from "next/link";
import { Facebook, Instagram, ArrowUpRight, Telephone } from "react-bootstrap-icons";

const socalIcon = [
  {
    id: 1,
    link: "https://www.facebook.com/PTAlTraining",
    icon: <Facebook aria-hidden="true" />,
    label: "Besuche uns auf Facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/pta.training",
    icon: <Instagram aria-hidden="true" />,
    label: "Folge uns auf Instagram",
  },
];
const Banner = () => {
  return (
    <section id="home" className="relative w-full min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/gym-interior-wide.jpg')",
          imageRendering: '-webkit-optimize-contrast',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        <div className="absolute inset-0 bg-black/75" />
      </div>
      <div className="container relative z-10 min-h-screen flex items-center lg:pt-20">
        <div className="w-full">
            <div className="xl:pt-0 lg:pt-0 md:pt-0 pt-0">
              <Link href={"/kontakt"} className="md:text-[24px] text-lg leading-[140%] md:mb-[50px] mb-8 border-b border-b-clr_white text-clr_white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base">
                <span className="block">
                  Starten ist leichter als du denkst.
                </span>
                <span className="flex gap-4 items-center">
                  Termin vereinbaren
                  <ArrowUpRight aria-hidden="true" />
                </span>
              </Link>
              <h1 className="xl:text-[116px] lg:text-[80px] md:text-[68px] sm:text-[48px] text-[48px] font-semibold sm:mb-[20px] mb-[15px] leading-[110%]">
                <span className="block text-clr_white">Personal</span>
                <span className="block text-clr_white">Training</span>
                <span className="block designers" data-text="Academy">
                  Academy
                </span>
              </h1>
              <p className="text-clr_pra text-base md:text-lg max-w-2xl">
                Personal Training, Gruppenkurse und mehr – für alle, die mehr aus sich rausholen wollen.
              </p>
            </div>
        </div>
      </div>
            <div className="absolute right-4 top-[55%] -translate-y-1/2 hidden xl:grid gap-[80px] z-20">
        <div className="rotate-90 flex items-center justify-center gap-[16px]">
          <Telephone className="text-clr_base -rotate-90 text-lg" aria-hidden="true" />
          <Link href={"tel:+352691789483"} className="text-clr_white hover:text-clr_base duration-300 cursor-pointer" aria-label="Rufen Sie uns an: +352 691 789 483">+352 691 789 483</Link>
        </div>
        <div>
          <ul className="grid justify-center lg:gap-[14px] gap-[10px]">
            {socalIcon.map(({ icon, id, link, label }) => {
              return (
                <li key={id}>
                  <Link href={link} target="_blank" rel="noopener noreferrer me" aria-label={label} className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38px] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center hover:bg-clr_base cursor-pointer transition-colors duration-300">
                    <span className="text-white">{icon}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
