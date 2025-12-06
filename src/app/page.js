import React from "react";
import { images, images2 } from "../Utlits/marqueeItems";
import About from "../Components/About/About";
import Metting from "../Components/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import MarqueeWapper from "../Components/Shared/MarqueeWapper";
import Awards from "../Components/About/Awards";
import EventBanner from "../Components/EventBanner";


const Home = () => {
  return (
    <>
      <EventBanner />
      <MarqueeWapper direction="left" images={images} />
      <About />
      <Services isHeading={true} />
      <MarqueeWapper direction="right" images={images2} />
      <WorkeProcess />
      <Testimonial />
      <Metting />
      <Awards />
      <Blogs />
    </>
  );
};

export default Home;
