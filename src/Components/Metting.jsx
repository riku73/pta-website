import React from "react";
import Link from "next/link";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import TitleSecond from "./Shared/TitleSecond";

const Metting = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden  pt_120 pb_120">
      <div className="container">
        <div className="grid lg:grid-cols-[58%_auto] gap-20 items-center">
          <div>
            <div>
              <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all">
                <TitleSecond
                  mainTitle={"Bereit für den ersten Schritt?"}
                  sortTitle={"Buche jetzt dein kostenloses Erstgespräch"}
                />
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
               
               
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
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
                className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
               
               
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                  <Telephone className="text-[26px] text-clr_title" />
                </span>
                <span>
                  <span className="text-clr_pra md:text-lg text-base mb-1 block">
                    Telefon
                  </span>
                  <Link
                    href={"tel:+352123456"}
                    className="text-white md:text-xl text-base font-medium"
                  >
                    +352 123 456
                  </Link>
                </span>
              </div>
              <div
                className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
               
               
              >
                <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
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
          <div>
            <div
             
             
            >
              <img src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?w=500&h=500&fit=crop" alt="Personal Training Consultation" className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metting;
