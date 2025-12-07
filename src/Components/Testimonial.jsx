'use client'
import React, { useState } from "react";
import Rating from "./Shared/Rating";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



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
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleDotClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section
      className="bg-common_bg bg-center bg-no-repeat bg-cover overflow-hidden pt-16 pb-16"
      id="testimonial"
    >
      <div className="container">
        <div className="text-center mb-10 max-w-[920px] mx-auto">
          <span className="text-2xl font-caveat text-clr_base relative flex justify-center items-center gap-4 mx-auto mb-4">
            <span className="w-12 h-[1px] bg-clr_base"></span>
            <span>Kundenstimmen</span>
            <span className="w-12 h-[1px] bg-clr_base"></span>
          </span>
          <h2 className="font-medium lg:text-5xl md:text-4xl text-3xl text-white leading-tight">
            Was unsere Community sagt
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={800}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {reviewList.map(({ id, name, position, review, stars }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="text-center px-4">
                    <div className="flex justify-center mb-4">
                      <Rating star={stars} />
                    </div>
                    <p className="text-lg md:text-xl text-clr_white mb-6 italic leading-relaxed">
                      "{review}"
                    </p>
                    <h4 className="text-clr_base font-semibold text-xl">
                      {name}
                    </h4>
                    <span className="text-base text-clr_pra">
                      {position}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviewList.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-clr_base w-8"
                    : "bg-white/30 w-3 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
