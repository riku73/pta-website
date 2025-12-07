import About from "../Components/About/About";
import Metting from "../Components/Metting";
import Services from "../Components/Services/Services";
import WorkeProcess from "../Components/WorkeProcess/WorkeProcess";
import Testimonial from "../Components/Testimonial";
import Blogs from "../Components/Blogs/Blogs";
import Awards from "../Components/About/Awards";
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
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop",
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
    images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop"],
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
      <About />
      <Services isHeading={true} />
      <WorkeProcess />
      <Testimonial />
      <Metting />
      <Awards />
      <Blogs />
    </>
  );
};

export default Home;
