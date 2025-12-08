import React from "react";
import Link from "next/link";
import { Envelope, GeoAlt, Telephone, ArrowRight } from "react-bootstrap-icons";
import TitleSecond from "./Shared/TitleSecond";

const Metting = () => {
  return (
    <section className="pt-16 pb_120">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Title, Button, Image */}
          <div>
            <TitleSecond
              mainTitle={"Bereit für den ersten Schritt?"}
              sortTitle={"Buche jetzt dein kostenloses Erstgespräch"}
            />
            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-medium px-8 py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
              >
                <span className="z-10 relative duration-500">Termin vereinbaren</span>
                <ArrowRight className="z-10 relative duration-500 text-xl" />
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Links */}
          <div>
            <div
              className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px] first:border-t first:border-t-[rgb(38_37_37)]"
            >
              <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center flex-shrink-0">
                <Envelope className="text-[26px] text-clr_title" />
              </span>
              <span>
                <span className="text-clr_pra md:text-lg text-base mb-1 block">
                  E-Mail
                </span>
                <Link
                  href={"mailto:info@pta-training.lu"}
                  className="text-white md:text-xl text-base font-medium"
                >
                  info@pta-training.lu
                </Link>
              </span>
            </div>
            <div
              className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
            >
              <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center flex-shrink-0">
                <Telephone className="text-[26px] text-clr_title" />
              </span>
              <span>
                <span className="text-clr_pra md:text-lg text-base mb-1 block">
                  Telefon
                </span>
                <Link
                  href={"tel:+352691789483"}
                  className="text-white md:text-xl text-base font-medium"
                >
                  +352 691 789 483
                </Link>
              </span>
            </div>
            <div
              className="hover:border-b hover:border-b-clr_base flex items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
            >
              <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center flex-shrink-0">
                <GeoAlt className="text-[26px] text-clr_title" />
              </span>
              <span>
                <span className="text-clr_pra md:text-lg text-base mb-1 block">
                  Standort
                </span>
                <span className="text-white md:text-xl text-base font-medium">
                  1 Fuussekaul, Heiderscheid, Luxembourg
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
