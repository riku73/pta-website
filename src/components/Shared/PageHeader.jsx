import Link from "next/link";
import React from "react";

const defaultBg = "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1920&q=80";

const PageHeader = ({heading, page, backgroundImage, useH2 = false, parentLink = "/", parentLabel = "Startseite"}) => {
  const HeadingTag = useH2 ? 'h2' : 'h1';

  return (
    <div
      className="relative bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${backgroundImage || defaultBg}')`
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 z-0"></div>
      <div className="container pt_120 pb_120 relative z-10">
        <div className="flex justify-center">
          <div>
            <div className="text-center">
              <HeadingTag className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-medium">{heading}</HeadingTag>
              <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap sm:gap-[10px] gap-y-1 gap-x-[14px]">
                <li className="text-2xl font-caveat">
                  <Link href={parentLink} scroll={true} className="text-white hover:text-clr_base duration-300">{parentLabel}</Link>
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
