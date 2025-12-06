import Link from "next/link";
import React from "react";

const PageHeader = ({heading, page}) => {
  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="container pt_120 pb_120 relative z-10">
        <div className="flex justify-center">
          <div>
            <div className="text-center">
              <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">{heading}</h1>
              <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap sm:gap-[10px] gap-y-1 gap-x-[14px]">
                <li className="text-2xl font-caveat">
                  <Link href="/" className="text-white hover:text-clr_base duration-300">Startseite</Link>
                </li>
                <li className="text-white text-2xl">/</li>
                <li className="text-clr_base font-caveat text-2xl">{page}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
