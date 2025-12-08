import React from "react";
import PageHeader from "../../components/Shared/PageHeader";
import Link from "next/link";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";

export const metadata = {
  title: "Unsere Leistungen | PTA Personal Training Academy Luxembourg",
  description: "Personal Training, Ernährungsberatung, Gruppentraining, Fitness Bootcamp, Rehabilitation und Sportmannschaften. Professionelle Betreuung in Luxemburg.",
  openGraph: {
    title: "Unsere Leistungen | PTA Training Luxembourg",
    description: "Personal Training, Ernährungsberatung, Gruppentraining und mehr. Professionelle Fitness-Betreuung in Luxemburg.",
    url: "https://pta-training.lu/leistungen",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
  },
};

const services = [
  {
    id: 1,
    slug: "personal-training",
    title: "Personal Training",
    subtitle: "Training, das sich nach dir richtet",
    description: "Im 1:1-Training gehört die volle Aufmerksamkeit nur dir. Wir bauen dein Programm um deine Ziele, deinen Körper und deinen Alltag herum.",
    features: [
      "Dein persönlicher Trainingsplan",
      "Regelmäßige Fortschrittskontrolle",
      "Flexible Terminvereinbarung",
      "Motivation & Unterstützung"
    ],
    image: "/images/gym-pullup-trx.jpg"
  },
  {
    id: 2,
    slug: "ernaehrungsberatung",
    title: "Ernährungsberatung",
    subtitle: "Essen, das zu dir passt",
    description: "Keine starren Diätpläne, sondern Ernährung, die sich in dein Leben einfügt – realistisch, nachhaltig und ohne Verzichtsdruck.",
    features: [
      "Persönlicher Ernährungsplan",
      "Makronährstoff-Berechnung",
      "Einkaufslisten & Rezepte",
      "Wöchentliche Check-ins"
    ],
    image: "/images/medicine-balls.jpg"
  },
  {
    id: 3,
    slug: "gruppentraining",
    title: "Gruppentraining",
    subtitle: "Gemeinsam stärker",
    description: "In kleinen Gruppen trainierst du effektiv und hast dabei jede Menge Spaß. Die Motivation der anderen zieht dich mit.",
    features: [
      "Kleine Gruppen (max. 8 Personen)",
      "Vielfältige Kursauswahl",
      "Qualifizierte Trainer",
      "Starkes Gemeinschaftsgefühl"
    ],
    image: "/images/functional-training-area.jpg"
  },
  {
    id: 4,
    slug: "fitness-bootcamp",
    title: "Fitness Bootcamp",
    subtitle: "Intensiv, dynamisch, motivierend",
    description: "Kurze, knackige Workouts – hier wird richtig Gas gegeben. Functional Training, HIIT und jede Menge gute Laune.",
    features: [
      "4-Wochen Intensivprogramm",
      "Regelmäßige Workouts",
      "Ernährungsplan inklusive",
      "Starke Community"
    ],
    image: "/images/kettlebells.jpg"
  },
  {
    id: 5,
    slug: "rehabilitation",
    title: "Rehabilitation & Aufbautraining",
    subtitle: "Zurück zu voller Beweglichkeit",
    description: "Nach einer Verletzung, OP oder bei chronischen Beschwerden begleiten wir dich behutsam zurück in die Bewegung – sicher und mit viel Geduld.",
    features: [
      "Abstimmung mit Arzt/Physio",
      "Behutsame Progression",
      "Schmerzfreies Training",
      "Langfristige Betreuung"
    ],
    image: "/images/gym-interior-wide.jpg"
  },
  {
    id: 6,
    slug: "sportmannschaften",
    title: "Sportmannschaften",
    subtitle: "Leistung für dein Team",
    description: "Professionelles Athletiktraining für Sportvereine und Mannschaften aus ganz Luxemburg – für jede Sportart und jedes Niveau.",
    features: [
      "Teamspezifische Programme",
      "Athletik & Kondition",
      "Verletzungsprävention",
      "Saisonplanung & Periodisierung"
    ],
    image: "/images/team-trainers.jpg"
  }
];

const Services = () => {
  return (
    <>
      <PageHeader
        heading={"Unsere Leistungen"}
        page={"Leistungen"}
        backgroundImage="/images/functional-training-area.jpg"
      />

      <section className="pt_120 pb_120">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-clr_base font-caveat text-2xl mb-4 block">Was wir bieten</span>
            <h2 className="text-white text-4xl lg:text-5xl font-medium mb-6">
              Das bieten wir dir
            </h2>
            <p className="text-clr_pra text-lg">
              Von Personal Training über Ernährungsberatung bis hin zu Rehabilitation –
              wir haben das passende Angebot für dich.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ id, slug, title, subtitle, description, features, image }) => (
              <div
                key={id}
                className="bg-common_bg rounded-lg overflow-hidden group"
               
               
               
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
                  <h3 className="text-white text-2xl font-medium mb-3 mt-1">{title}</h3>
                  <p className="text-clr_pra mb-4">{description}</p>

                  <ul className="space-y-2 mb-6">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-clr_pra">
                        <CheckCircleFill className="text-clr_base text-sm" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/leistungen/${slug}`}
                    className="inline-flex items-center gap-2 text-clr_base hover:text-white duration-300 font-medium"
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-common_bg rounded-lg p-10 lg:p-16">
              <h3 className="text-white text-3xl lg:text-4xl font-medium mb-6">
                Nicht sicher, was zu dir passt?
              </h3>
              <p className="text-clr_pra text-lg mb-8 max-w-2xl mx-auto">
                Buche ein kostenloses Erstgespräch und wir finden gemeinsam heraus,
                welches Angebot am besten zu deinen Zielen passt.
              </p>
              <Link
                href="/kontakt"
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
