import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

export const metadata = {
  title: "Über Uns | PTA Personal Training Academy Luxembourg",
  description: "Lerne das PTA Team kennen. Seit 2015 begleiten wir Menschen in Luxemburg auf ihrem Weg zu mehr Fitness und Gesundheit. Zertifizierte Trainer, familiäre Atmosphäre.",
  openGraph: {
    title: "Über Uns | PTA Personal Training Academy",
    description: "Lerne das PTA Team kennen. Seit 2015 begleiten wir Menschen in Luxemburg auf ihrem Weg zu mehr Fitness und Gesundheit.",
    url: "https://pta-training.lu/ueber-uns",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
  },
};

const teamMembers = [
  {
    id: 1,
    name: "Functional Training",
    role: "Unser Kernbereich",
    description: "Zertifizierte Trainer mit Leidenschaft für Bewegung und Gesundheit. Wir begleiten dich auf deinem Weg – egal wo du startest.",
    image: "/images/functional-training-area.jpg"
  },
  {
    id: 2,
    name: "Rehabilitation",
    role: "Spezialisierte Betreuung",
    description: "Erfahrung mit Reha-Patienten, Verletzungsprävention und Wiederaufbau. Wir arbeiten eng mit Ärzten und Physiotherapeuten zusammen.",
    image: "/images/gym-pullup-trx.jpg"
  },
  {
    id: 3,
    name: "Ernährung",
    role: "Ganzheitlicher Ansatz",
    description: "Training und Ernährung gehen Hand in Hand. Wir helfen dir, beides in deinen Alltag zu integrieren – ohne Verzicht.",
    image: "/images/medicine-balls.jpg"
  }
];

const AboutUs = () => {
  return (
    <>
      <PageHeader
        heading={"Über Uns"}
        page={"Über Uns"}
        backgroundImage="/images/gym-interior-wide.jpg"
      />

      {/* Story Section */}
      <section className="pt_120 pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="/images/team-trainers.jpg"
                alt="PTA Team - Jason, Jimmy und João"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="text-clr_base font-caveat text-2xl mb-4 block">Unsere Geschichte</span>
              <h2 className="text-white text-4xl lg:text-5xl font-medium mb-6">
                Deine Personal Training Academy
              </h2>
              <p className="text-clr_pra text-lg mb-6">
                Die PTA wurde 2015 in Heiderscheid, Luxembourg gegründet – aus der Überzeugung heraus,
                dass Fitness mehr ist als nur Schwitzen im Studio. Wir sind lokal, familiär und leidenschaftlich.
              </p>
              <p className="text-clr_pra text-lg mb-8">
                Wir trainieren mit Menschen jeden Alters und jeder Lebenssituation: vom Reha-Patienten
                über den Wiedereinsteiger bis zum ambitionierten Sportler. Was uns verbindet? Die Leidenschaft
                dafür, dich Schritt für Schritt voranzubringen – ganz gleich, wo du gerade stehst.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 font-medium px-[30px] py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
              >
                <span className="z-10 relative duration-500">Termin vereinbaren</span>
                <ArrowRight className="z-10 relative duration-500 text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="pt-16 pb_120 bg-common_bg">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Was uns ausmacht</span>
            <h2 className="text-white text-4xl lg:text-5xl font-medium">
              Lokal, familiär, professionell
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(({ id, name, role, description, image }) => (
              <div
                key={id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden group"



              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-2xl font-medium mb-2">{name}</h3>
                  <span className="text-clr_base text-lg block mb-4">{role}</span>
                  <p className="text-clr_pra">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-16 pb_120">
        <div className="container">
          <div className="bg-common_bg rounded-lg p-10 lg:p-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-clr_base text-5xl lg:text-6xl font-bold block mb-2">500+</span>
                <span className="text-white text-lg">Zufriedene Kunden</span>
              </div>
              <div>
                <span className="text-clr_base text-5xl lg:text-6xl font-bold block mb-2">10+</span>
                <span className="text-white text-lg">Jahre Erfahrung</span>
              </div>
              <div>
                <span className="text-clr_base text-5xl lg:text-6xl font-bold block mb-2">5</span>
                <span className="text-white text-lg">Trainer</span>
              </div>
              <div>
                <span className="text-clr_base text-5xl lg:text-6xl font-bold block mb-2">98%</span>
                <span className="text-white text-lg">Erfolgsquote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
