'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Linkedin, Instagram, PlayFill, ArrowUpRight, Telephone } from "react-bootstrap-icons";
import VideoPlay from "./Shared/VideoPlay";

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="grid md:grid-cols-[70%_auto] gap-5">
          <div>
            <div className="xl:pt-[145px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[80px] sm:pb-[85px] py-[60px] xl:pl-10 pl-0">
              <Link href={"/contact"} className="md:text-[24px] text-base leading-[140%] md:mb-[50px] mb-6  border-b border-b-clr_white text-clr_white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base capitalize">
                <span className="block">
                  Bereit, durchzustarten?
                </span>
                <span className="flex gap-4 items-center">
                  Kostenloses Erstgespräch sichern
                  <i className="">
                    <ArrowUpRight />
                  </i>
                </span>
              </Link>
              <h1 className="lg:text-[116px] md:text-[68px] sm:text-[48px] text-[34px] font-semibold sm:mb-[50px] mb-[30px] leading-[120%]">
                <span className="text-clr_white">Personal Training</span>
                <span className="block designers" data-text="Academy">
                  Academy
                </span>
              </h1>
              <div className="flex items-center gap-6">
                <div onClick={openLightbox} className="cursor-pointer relative xl:w-20 xl:h-20 sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] flex justify-center items-center rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales">
                  <i className="text-clr_white sm:text-[42px] text-[30px]">
                    <PlayFill />
                  </i>
                </div>
                <span className="sm:text-xl text-base text-clr_white w-[100px]">Wie wir trainieren</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px] ">
        <div className="rotate-90 flex items-center justify-center gap-[16px] ">
          <Telephone className="text-clr_base -rotate-90 text-lg" />
          <Link href={"tel:+352123456"} className="text-clr_white hover:text-clr_base duration-300">+352 123 456</Link>
        </div>
        <div className="flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
          <span className="scroll text-clr_pra uppercase text-[15px]">
            Mehr entdecken
          </span>
          <ArrowUpRight className="text-clr_base -rotate-90 text-xl" />
        </div>
      </div>
      <div className="hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]  ">
        <div className="flex items-center justify-center gap-[50px] rotate-90">
          <span className="scroll text-clr_pra uppercase text-[15px]">
            Folge uns
          </span>
          <ArrowUpRight className="text-clr_base -rotate-90 text-xl" />
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
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )}
    </section>
  );
};

export default Banner;
