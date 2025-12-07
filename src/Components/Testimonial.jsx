'use client'
import React from "react";
import Rating from "./Shared/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const reviewList = [
  {
    id: 1,
    name: "Jenny Bodevin",
    position: "PTA Mitglied",
    review: `Einfach top! Das persönliche Programm und die gute Atmosphäre machen den Unterschied. Hier fühlt man sich von Anfang an gut aufgehoben.`,
    stars: 5,
  },
  {
    id: 2,
    name: "Michael T.",
    position: "IT-Consultant",
    review: `Nach einem Bandscheibenvorfall hatte ich Angst, wieder anzufangen. Mein Trainer hat mich Schritt für Schritt aufgebaut – heute bin ich schmerzfrei und sogar wieder beim Laufen. Die Geduld hier ist wirklich beeindruckend.`,
    stars: 5,
  },
  {
    id: 3,
    name: "Sandra K.",
    position: "Bürokauffrau",
    review: `Nach zwei Schwangerschaften hatte ich null Bezug mehr zu meinem Körper und wusste nicht, wo ich anfangen soll. Das Team von PTA hat mir geholfen, wieder fit zu werden und Selbstvertrauen zurückzugewinnen. Die Atmosphäre ist so herzlich – genau das habe ich gebraucht.`,
    stars: 5,
  },
  {
    id: 4,
    name: "Julia R.",
    position: "Studentin",
    review: `Ich hatte null Erfahrung mit Sport und war mega unsicher, ob ich das überhaupt kann. Beim ersten Termin wurde mir sofort die Nervosität genommen – alles wird in Ruhe erklärt, nichts wird vorausgesetzt. Die Community hier ist einfach toll!`,
    stars: 5,
  },
];

const Testimonial = () => {
  return (
    <section
      className="overflow-hidden pt_120 pb_120"
      id="testimonial"
    >
      <div className="container">
        <div className="text-center md:mb-[60px] sm:mb-[50px] mb-[45px] max-w-[920px] mx-auto">
          <span
            className="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
           
           
          >
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
            <span>Kundenstimmen</span>
            <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          </span>
          <h2
            className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
           
           
          >
            Was unsere Community sagt
          </h2>
        </div>
        <div
          className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden lg:py-[130px] lg:px-[60px] md:py-[100px] md:px-[30px] sm:py-4 px-0 py-[10px] relative"
         
         
        >
          <div>
            <div className="lg:max-w-[66%] w-auto mx-auto">
              <div className="sm:mr-[10px] sm:ml-[30px] mr-0 ml-0">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 2000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {reviewList.map(({ id, name, position, review, stars }) => {
                    return (
                      <SwiperSlide key={id}>
                        <div className="relative">
                          <div>
                            <Rating star={stars} />
                          </div>
                          <i className="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block ">
                            {review}
                          </i>
                          <h4 className="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                            {name}
                          </h4>
                          <span className="text-lg text-clr_pra">
                            {position}{" "}
                          </span>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
