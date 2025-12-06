import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";

const services = [
  {
    id: 1,
    title: "Personal Training",
    subtitle: "Training, das sich nach dir richtet",
    description: "Im 1:1-Training gehört die volle Aufmerksamkeit nur dir. Wir bauen dein Programm um deine Ziele, deinen Körper und deinen Alltag herum.",
    features: [
      "Dein persönlicher Trainingsplan",
      "Regelmäßige Fortschrittskontrolle",
      "Flexible Terminvereinbarung",
      "Motivation & Unterstützung"
    ],
    price: "79",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Ernährungsberatung",
    subtitle: "Essen, das zu dir passt",
    description: "Keine starren Diätpläne, sondern Ernährung, die sich in dein Leben einfügt – realistisch, nachhaltig und ohne Verzichtsdruck.",
    features: [
      "Persönlicher Ernährungsplan",
      "Makronährstoff-Berechnung",
      "Einkaufslisten & Rezepte",
      "Wöchentliche Check-ins"
    ],
    price: "49",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Gruppentraining",
    subtitle: "Gemeinsam stärker",
    description: "In kleinen Gruppen trainierst du effektiv und hast dabei jede Menge Spaß. Die Motivation der anderen zieht dich mit.",
    features: [
      "Kleine Gruppen (max. 8 Personen)",
      "Vielfältige Kursauswahl",
      "Qualifizierte Trainer",
      "Starkes Gemeinschaftsgefühl"
    ],
    price: "29",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    title: "Online Coaching",
    subtitle: "Flexibel, wo du willst",
    description: "Dein Trainer in der Tasche: Mit Trainingsplänen, Video-Check-ins und persönlichem Support erreichst du deine Ziele – egal wo du bist.",
    features: [
      "Training von zu Hause",
      "Video-Calls mit Trainer",
      "Trainings-App Zugang",
      "Chat-Support"
    ],
    price: "59",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    title: "Fitness Bootcamp",
    subtitle: "Intensiv, dynamisch, motivierend",
    description: "Kurze, knackige Workouts – hier wird richtig Gas gegeben. Functional Training, HIIT und jede Menge gute Laune.",
    features: [
      "4-Wochen Intensivprogramm",
      "Regelmäßige Workouts",
      "Ernährungsplan inklusive",
      "Starke Community"
    ],
    price: "199",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    title: "Rehabilitation & Aufbautraining",
    subtitle: "Zurück zu voller Beweglichkeit",
    description: "Nach einer Verletzung, OP oder bei chronischen Beschwerden begleiten wir dich behutsam zurück in die Bewegung – sicher und mit viel Geduld.",
    features: [
      "Abstimmung mit Arzt/Physio",
      "Behutsame Progression",
      "Schmerzfreies Training",
      "Langfristige Betreuung"
    ],
    price: "Auf Anfrage",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
  }
];

const Services = () => {
  return (
    <>
      <PageHeader
        heading={"Unsere Leistungen"}
        page={"Leistungen"}
      />

      <section className="pt_120 pb_120">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up" data-aos-duration="1000">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Was wir bieten</span>
            <h2 className="text-white text-4xl lg:text-5xl font-bold mb-6">
              Das bieten wir dir
            </h2>
            <p className="text-clr_pra text-lg">
              Von Personal Training über Ernährungsberatung bis hin zu Rehabilitation –
              wir haben das passende Angebot für dich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ id, title, subtitle, description, features, price, image }) => (
              <div
                key={id}
                className="bg-common_bg rounded-lg overflow-hidden group"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={id * 100}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-clr_base text-sm uppercase tracking-wider">{subtitle}</span>
                  <h3 className="text-white text-2xl font-semibold mb-3 mt-1">{title}</h3>
                  <p className="text-clr_pra mb-4">{description}</p>

                  <ul className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-clr_pra">
                        <CheckCircleFill className="text-clr_base text-sm" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-clr_base text-3xl font-bold">
                        {typeof price === "string" && price.includes("Anfrage") ? "" : "€"}
                        {price}
                      </span>
                      {typeof price === "number" || !price.includes("Anfrage") ? (
                        <span className="text-clr_pra text-sm"> / Monat</span>
                      ) : null}
                    </div>
                    <Link
                      href="/contact"
                      className="flex items-center gap-2 text-clr_base hover:text-white duration-300"
                    >
                      <span>Anfragen</span>
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="bg-common_bg rounded-lg p-10 lg:p-16">
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-6">
                Nicht sicher, was zu dir passt?
              </h3>
              <p className="text-clr_pra text-lg mb-8 max-w-2xl mx-auto">
                Buche ein kostenloses Erstgespräch und wir finden gemeinsam heraus,
                welches Angebot am besten zu deinen Zielen passt.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-medium px-[30px] py-4 text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
              >
                <span className="z-10 relative duration-500">Kostenloses Erstgespräch</span>
                <ArrowRight className="z-10 relative duration-500 text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
