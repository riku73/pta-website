'use client'
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { List, ArrowRight, X } from "react-bootstrap-icons";
import { menuList } from "@/Utlits/menuList";


const RanderHeader = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropDownId, setDropDownId] = useState(null);
  const [fixedHeader, setFixedHeader] = useState(false);

  // Function for handling the sticky header
  const updateHeaderStickyState = useCallback(() => {
    setFixedHeader(window.scrollY >= 35);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateHeaderStickyState);
    return () => window.removeEventListener("scroll", updateHeaderStickyState);
  }, [updateHeaderStickyState]);

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  const setActiveSubMenu = (id) => {
    setDropDownId((prevId) => (prevId === id ? null : id)); // Toggle submenu
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Spacer to prevent layout shift when header becomes fixed */}
      {fixedHeader && <div className="h-[82px]" />}
      <header
        className={`${fixedHeader ? "fixed top-0 left-0 z-50 bg-black" : "relative"} w-full z-10`}
      >
      <div className="xxl:max-w-[1805px] container mx-auto px-3">
        <div className="flex justify-between items-center w-full relative py-5">
          <div className="main__logo">
            <Link href={"/"} onClick={scrollToTop} scroll={false} className="block">
              <span className="text-3xl xl:text-4xl font-bold text-clr_base">PTA</span>
            </Link>
          </div>
          <ul
            className={`flex lg:flex-row flex-col lg:items-center lg:gap-[14px] gap-0 fixed lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle max-h-[calc(100vh-130px)]  lg:h-full  lg:bg-transparent  duration-500 origin-top px-3 ${menuActive
              ? "opacity-100 visible"
              : "opacity-0 invisible lg:opacity-100 lg:visible"
              }`}
          >
            {menuList.map(({ id, name, path, dropDown, section }) => {
              return (
                <li
                  className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown"
                  key={id}
                  onClick={() => setActiveSubMenu(id)}
                >
                  <Link
                    href={`${path}${section ? section : ""}`}
                    onClick={path === "/" ? scrollToTop : undefined}
                    scroll={path === "/" ? false : undefined}
                    className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base "
                  >
                    {name}
                  </Link>
                  {dropDown?.length && (
                    <ul
                      className={`lg:absolute static top-16 left-0  w-[250px] px-5 py-2 leading-9 z-50 transition-all bg-clr_white shadow-mainShadow justify-center  block gap-[5px] before:absolute before:content-[''] before:-top-[18px] before:left-[26px] before:w-0 before:h-0  before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 ${dropDownId === id ? "" : ""
                        }`}
                    >
                      {dropDown.map(({ id, name, path }) => {
                        return (
                          <li key={id}>
                            <Link
                              href={path}
                              className="text-clr_body duration-500 hover:text-clr_base hover:pl-3 block"
                            >
                              {name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg  capitalize relative bg-clr_base overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px]  before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
            >
              <span className="text-sm xl:text-lg z-10 relative duration-500">
                Jetzt Starten
              </span>
              <span>
                <ArrowRight className="text-xl z-10 relative duration-500" />
              </span>
            </Link>
            <div
              onClick={toggleMenu}
              className={`lg:hidden ${menuActive ? "active" : ""}`}
            >
              {menuActive ? (
                <X className="text-[32px]  text-clr_white cursor-pointer" />
              ) : (
                <List className="text-[32px]  text-clr_white cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default RanderHeader;
