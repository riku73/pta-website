import React from "react";

const skillsList = [
  {
    id: 1,
    skill: "Krafttraining",
    percentage: "95%",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&h=120&fit=crop",
  },
  {
    id: 2,
    skill: "Ernährung",
    percentage: "90%",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=120&h=120&fit=crop",
  },
  {
    id: 3,
    skill: "Cardio & HIIT",
    percentage: "92%",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=120&h=120&fit=crop",
  },
  {
    id: 4,
    skill: "Rehabilitation",
    percentage: "88%",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=120&h=120&fit=crop",
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`w-full duration-700 ${isTabActive === "skills" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
          <div>
            <div>
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=600&fit=crop" alt="Fitness Training" className="w-full rounded-lg object-cover" />
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-[42px] font-semibold text-clr_white mb-5">Unsere Expertise</h2>
              <p className="text-lg text-clr_pra mb-0">
                Unsere Trainer sind in verschiedenen Bereichen spezialisiert,
                um dir die bestmögliche Betreuung zu bieten. Von Krafttraining
                über Ernährungsberatung bis hin zu Rehabilitation – wir haben
                für jedes Ziel den richtigen Experten.
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between  gap-6">
                  {skillsList.map(({id, skill, image, percentage}) => {
                    return (
                      <div key={id} className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                        <div className="flex items-center gap-6">
                          <div className="w-[60px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
                            <img src={image} alt={skill} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <span className="md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">{skill}</span>
                            <span className="font-semibold text-5xl text-clr_white block">{percentage}</span>
                          </div>
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
