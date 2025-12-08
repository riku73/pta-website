import Banner from "../components/Banner";
import About from "../components/About/About";
import Meeting from "../components/Meeting";
import Services from "../components/Services/Services";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs/Blogs";
import HomeScrollFix from "../components/Shared/HomeScrollFix";

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
      <WorkProcess />
      <Testimonial />
      <Meeting />
      <Blogs />
    </>
  );
};

export default Home;
