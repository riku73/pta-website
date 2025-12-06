'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

const partnerList = [
  {
    id: 1,
    name: "DSSV",
  },
  {
    id: 2,
    name: "BSA",
  },
  {
    id: 3,
    name: "DGE",
  },
  {
    id: 4,
    name: "FMS",
  },
  {
    id: 5,
    name: "TÜV",
  },
];
const Partner = () => {
  return (
    <>
      <div className="pt_120">
        <h4
          className="text-center mx-auto mb-[60px] text-white text-2xl font-semibold leading-[130%]"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Zertifiziert und anerkannt von führenden Verbänden
        </h4>
        <div className="swiper justify-between">
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            loop={true}
            modules={[Pagination, Autoplay, Navigation]}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {partnerList.map(({ id, name }) => {
              return (
                <SwiperSlide key={id}>
                  <div
                    key={id}
                    className="swiper-slide text-center flex justify-center items-center relative"
                  >
                    <div className="bg-[#1D1D1D] px-8 py-4 rounded-lg">
                      <span className="text-clr_base text-2xl font-bold">{name}</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Partner;
