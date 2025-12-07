'use client'
import React from "react";
import Marquee from "react-fast-marquee";


const MarqueeWapper = ({images, direction}) => {
  return (
    <div className="text-slider bg-common_bg py-3 h-[90px] flex items-center">
      <div>
        <Marquee direction={direction}>
          {
            images?.map(({id, image}, index)=> <img key={id} src={image} alt={`Fitness Training ${index + 1}`} className="h-[70px] w-auto mx-2 rounded"/>)
          }
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeWapper;
