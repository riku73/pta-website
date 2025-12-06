import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight } from "react-bootstrap-icons";

const teamMembers = [
  {
    id: 1,
    name: "Das PTA Team",
    role: "Functional Training Experten",
    description: "Zertifizierte Trainer mit Leidenschaft für Bewegung und Gesundheit. Wir begleiten dich auf deinem Weg – egal wo du startest.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Rehabilitation",
    role: "Spezialisierte Betreuung",
    description: "Erfahrung mit Reha-Patienten, Verletzungsprävention und Wiederaufbau. Wir arbeiten eng mit Ärzten und Physiotherapeuten zusammen.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
  },
  {
    id: 3,
    name: "Ernährung",
    role: "Ganzheitlicher Ansatz",
    description: "Training und Ernährung gehen Hand in Hand. Wir helfen dir, beides in deinen Alltag zu integrieren – ohne Verzicht.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop"
  }
];

const AboutUs = () => {
  return (
    <>
      <PageHeader
        heading={"Über Uns"}
        page={"Über Uns"}
      />

      <section className="pt_120 pb_120">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">
            <div data-aos="fade-right" data-aos-duration="1000">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
                alt="PTA Gym"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
              <span className="text-clr_base font-caveat text-2xl mb-4 block">Unsere Geschichte</span>
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
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
                href="/contact"
                className="inline-flex items-center gap-2 font-medium px-[30px] py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
              >
                <span className="z-10 relative duration-500">Termin vereinbaren</span>
                <ArrowRight className="z-10 relative duration-500 text-xl" />
              </Link>
            </div>
          </div>

          <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Was uns ausmacht</span>
            <h2 className="text-white text-4xl lg:text-5xl font-bold">
              Lokal, familiär, professionell
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(({ id, name, role, description, image }) => (
              <div
                key={id}
                className="bg-common_bg rounded-lg overflow-hidden group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={id * 100}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white text-2xl font-semibold mb-2">{name}</h3>
                  <span className="text-clr_base text-lg block mb-4">{role}</span>
                  <p className="text-clr_pra">{description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-common_bg rounded-lg p-10 lg:p-16" data-aos="fade-up" data-aos-duration="1000">
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
                <span className="text-clr_base text-5xl lg:text-6xl font-bold block mb-2">15</span>
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
