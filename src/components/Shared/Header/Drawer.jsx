import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import { socialIcons } from "../../../utils/socialIcons";
import Link from "next/link";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      className={`w-80 h-full fixed z-50  top-0 duration-500 overflow-y-scroll bg-black ${
        isSidebarActive ? "right-0" : "-right-80"
      }`}
    >
      <button
        onClick={() => setIsSidebarActive(false)}
        aria-label="Menü schließen"
        className="flex justify-center items-center w-12 h-12 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer"
      >
        <XLg className="text-[22px] text-clr_mtitle" aria-hidden="true" />
      </button>
      <div className="grid py-10 px-5">
        <Link href={"/"} onClick={scrollToTop} scroll={false} className="mb-5" aria-label="Zur Startseite">
          <span className="text-3xl font-bold text-clr_base">PTA</span>
        </Link>
        <p className="text-sm mb-10 text-clr_pra break-words leading-normal">
          Wir trainieren mit Menschen jeden Alters und jeder Lebenssituation – vom Wiedereinstieg über Reha bis zum Leistungssport. Bei uns zählt, wo du hinwillst, nicht wo du herkommst.
        </p>
        <div className="grid gap-6 mb-10">
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> Adresse </span>
              <span className="textp capitalize text-white font-medium leading-[120%]"> 1 Fuussekaul, Heiderscheid </span>
            </div>
          </div>
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> E-Mail </span>
              <Link href={"mailto:info@pta-training.lu"} className="textp text-white font-medium leading-[120%]"> info@pta-training.lu </Link>
            </div>
          </div>
          <div>
            <div>
              <span className="block mb-2 uppercase text-clr_pra font-bold text-sm"> Telefon </span>
              <Link href={"tel:+352691789483"} className="textp capitalize text-white font-medium leading-[120%]"> +352 691 789 483 </Link>
            </div>
          </div>
        </div>
        <div className="lg:mb-20 mb-14 relative">
          <ul className="flex gap-[14px]">
            {socialIcons.map(({ icon, id, link, label }) => (
              <li key={id}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                >
                  <span className="text-clr_title" aria-hidden="true">{icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          href={"/kontakt"}
          className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%]  capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
        >
          <span className="z-10 relative duration-500">
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="z-10 relative duration-500"> Termin vereinbaren </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
