import React from "react";
import Link from "next/link";
import { Facebook, Instagram, ArrowUpRight, Telephone } from "react-bootstrap-icons";

const socalIcon = [
  {
    id: 1,
    link: "https://www.facebook.com/PTAlTraining/",
    icon: <Facebook />,
  },
  {
    id: 2,
    link: "https://www.instagram.com/pta.training",
    icon: <Instagram />,
  },
];
const Banner = () => {
  return (
    <section id="home" className="relative w-full">
      <div className="container">
        <div>
            <div className="xl:pt-[40px] lg:pt-[30px] md:pt-[30px] sm:pt-[20px] pt-[15px]">
              <Link href={"/kontakt"} className="md:text-[24px] text-lg leading-[140%] md:mb-[50px] mb-8 border-b border-b-clr_white text-clr_white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base">
                <span className="block">
                  Starten ist leichter als du denkst.
                </span>
                <span className="flex gap-4 items-center">
                  Termin vereinbaren
                  <i className="">
                    <ArrowUpRight />
                  </i>
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
            <div className="hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[80px]  ">
        <div className="rotate-90 flex items-center justify-center gap-[16px] ">
          <Telephone className="text-clr_base -rotate-90 text-lg" />
          <Link href={"tel:+352123456"} className="text-clr_white hover:text-clr_base duration-300">+352 123 456</Link>
        </div>
        <div>
          <ul className="grid justify-center lg:gap-[14px] gap-[10px]">
            {socalIcon.map(({ icon, id, link }) => {
              return (
                <li key={id} >
                  <Link href={link} target="_blank" rel="noopener noreferrer" className="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center" >
                    <i className="text-white">{icon}</i>
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
