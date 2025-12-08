import Banner from "../Components/Banner";
import About from "../Components/About/About";
import Metting from "../Components/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import HomeScrollFix from "../Components/Shared/HomeScrollFix";

export const metadata = {
  title: "PTA - Personal Training Academy | Fitness in Heiderscheid, Luxembourg",
  description: "Deine Personal Training Academy in Luxembourg. Individuelles Training, Ernährungsberatung, Gruppentraining und Rehabilitation. Für jeden Körper, für jedes Ziel. Jetzt kostenloses Erstgespräch buchen!",
  openGraph: {
    title: "PTA - Personal Training Academy Luxembourg",
    description: "Individuelles Personal Training, Ernährungsberatung und Gruppentraining in Heiderscheid, Luxembourg. Starte jetzt deine Fitness-Reise!",
    url: "https://pta-training.lu",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://pta-training.lu/images/gym-interior-wide.jpg",
        width: 1200,
        height: 630,
        alt: "PTA Personal Training Academy - Fitness Studio in Luxembourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PTA - Personal Training Academy Luxembourg",
    description: "Individuelles Personal Training, Ernährungsberatung und Gruppentraining in Luxembourg.",
    images: ["https://pta-training.lu/images/gym-interior-wide.jpg"],
  },
  alternates: {
    canonical: "https://pta-training.lu",
  },
};

const Home = () => {
  return (
    <>
      <div id="top" style={{ position: 'absolute', top: 0, left: 0, height: 0, width: 0 }} />
      <HomeScrollFix />
      <Banner />
      <About />
      <Services isHeading={true} />
      <WorkeProcess />
      <Testimonial />
      <Metting />
      <Blogs />
    </>
  );
};

export default Home;
