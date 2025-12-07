import React from "react";

const AboutCard = ({ title, para, info, image }) => {
  return (
    <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
      <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
        <div>
          <div>
            <img src={image} alt={title} className="w-full rounded-lg object-cover" />
          </div>
        </div>
        <div>
          <div className="lg:pl-10 pl-0">
            <h2 className="text-[42px] font-semibold text-clr_white mb-5">
              {title}
            </h2>
            <p className="text-lg text-clr_pra mb-0">{para}</p>
            <div className="lg:mt-[30px] mt-5">
              {info.map(({date, instition, position}, index) => {
                return (
                  <div key={index} className="flex items-center gap-8 border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                    <span className="md:text-lg text-base font-medium text-clr_base min-w-[120px]">
                      {date}
                    </span>
                    <div>
                      <h4 className="mb-[10px] text-white font-semibold md:text-2xl text-lg leading-normal">
                        {position}
                      </h4>
                      <p className="md:text-lg text-base text-clr_pra">
                        {instition}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
