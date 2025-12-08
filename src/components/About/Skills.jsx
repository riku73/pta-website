import React from "react";
import Image from "next/image";

const skillsList = [
  {
    id: 1,
    skill: "Krafttraining",
    percentage: "95%",
  },
  {
    id: 2,
    skill: "Ernährung",
    percentage: "90%",
  },
  {
    id: 3,
    skill: "Cardio & HIIT",
    percentage: "92%",
  },
  {
    id: 4,
    skill: "Rehabilitation",
    percentage: "88%",
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`w-full duration-700 ${isTabActive === "skills" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
          <div>
            <div className="w-full space-y-4">
              <Image
                src="/images/team-trainers.jpg"
                alt="PTA Team"
                width={2048}
                height={1366}
                className="w-full rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 41vw"
              />
              <Image
                src="/images/pta-banner.jpg"
                alt="PTA Personal Training Academy"
                width={1920}
                height={823}
                className="w-full rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 41vw"
              />
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl text-white mb-5 leading-tight">Unsere Expertise</h2>
              <p className="text-lg text-clr_pra mb-0">
                Unsere Trainer sind in verschiedenen Bereichen spezialisiert,
                um dir die bestmögliche Betreuung zu bieten. Von Krafttraining
                über Ernährungsberatung bis hin zu Rehabilitation – wir haben
                für jedes Ziel den richtigen Experten.
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between  gap-6">
                  {skillsList.map(({id, skill, percentage}) => {
                    return (
                      <div key={id} className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                        <div>
                          <span className="md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">{skill}</span>
                          <span className="font-semibold text-5xl text-clr_base block">{percentage}</span>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
