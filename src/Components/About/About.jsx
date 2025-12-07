'use client'
import React, { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import AboutMe from "./AboutMe";

const tabList = [
  {
    id: 1,
    name: "Über Uns",
    value: "about",
  },
  {
    id: 2,
    name: "Erfahrung",
    value: "experience",
  },
  {
    id: 3,
    name: "Ausbildung",
    value: "education",
  },
  {
    id: 4,
    name: "Expertise",
    value: "skills",
  },
];

const About = () => {
  const [isTabActive, setIsTabAative] = useState("about");

  const handleTabClick = (e) => {
    setIsTabAative(e);
  };

  return (
    <>
      <section className="pt-16 pb_120">
        <div className="container">
          <div className="text-center mx-auto xl:mb-[60px] md:mb-[50px] mb-[30px] px-4 sm:px-6 lg:px-0">
            <span
              className="text-clr_base font-caveat text-xl sm:text-2xl mb-4 block"
            >
              Personal Training Academy Luxembourg
            </span>
            <p
              className="lg:text-[42px] md:text-[28px] sm:text-xl text-lg font-medium text-clr_white lg:leading-[66px] md:leading-[44px] leading-[32px]"
            >
              Egal, ob du gerade erst anfängst, nach einer Verletzung wieder in Bewegung kommen möchtest oder als Athlet deine Performance steigern willst – bei uns bist du richtig. Wir glauben, dass jeder Körper einzigartig ist und sein eigenes Tempo hat.
            </p>
          </div>
          <div>
            <ul className="flex items-center justify-center flex-wrap gap-5 mb-[100px]">
              {tabList.map(({ id, name, value }) => (
                <li key={id} className={`nav-links  `}>
                  <button
                    onClick={() => handleTabClick(value)}
                    className={`tablink ${
                      isTabActive === value
                        ? "bg-clr_base text-clr_title"
                        : "bg-[#1D1D1D] text-clr_white"
                    } rounded-[10px]  lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center `}
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
            <div className="relative">
              <AboutMe isTabActive={isTabActive} />
              <Experience isTabActive={isTabActive} />
              <Education isTabActive={isTabActive} />
              <Skills isTabActive={isTabActive} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
