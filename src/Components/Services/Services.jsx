import React from "react";
import Service from "./Service";
import Title from "../Shared/Title";

const serviceList = [
  {
    id: "01",
    heading: "Personal Training",
    subHeading: "Training, das sich nach dir richtet",
    para: "Im 1:1-Training gehört die volle Aufmerksamkeit nur dir. Wir bauen dein Programm um deine Ziele, deinen Körper und deinen Alltag herum – ob Muskelaufbau, Gewichtsreduktion oder einfach mehr Energie im Leben.",
  },
  {
    id: "02",
    heading: "Ernährungsberatung",
    subHeading: "Essen, das zu dir passt",
    para: "Keine starren Diätpläne, sondern Ernährung, die sich in dein Leben einfügt. Unsere Experten zeigen dir, wie du dich ausgewogen ernährst, ohne auf Genuss zu verzichten – realistisch, nachhaltig und ohne Verzichtsdruck.",
  },
  {
    id: "03",
    heading: "Gruppentraining",
    subHeading: "Gemeinsam stärker",
    para: "In kleinen Gruppen trainierst du effektiv und hast dabei jede Menge Spaß. Die Motivation der anderen zieht dich mit, während dein Trainer trotzdem jeden einzelnen im Blick behält – perfekt für alle, die Teamspirit lieben.",
  },
  {
    id: "04",
    heading: "Online Coaching",
    subHeading: "Flexibel, wo du willst",
    para: "Dein Trainer in der Tasche: Mit individuellen Trainingsplänen, Video-Check-ins und persönlichem Support erreichst du deine Ziele – egal, ob zu Hause, auf Reisen oder im Fitnessstudio um die Ecke.",
  },
  {
    id: "05",
    heading: "Fitness Bootcamp",
    subHeading: "Intensiv, dynamisch, motivierend",
    para: "Kurze, knackige Workouts an der frischen Luft oder indoor – hier wird richtig Gas gegeben. Functional Training, HIIT und jede Menge gute Laune sorgen dafür, dass du über dich hinauswächst.",
  },
  {
    id: "06",
    heading: "Rehabilitation & Aufbautraining",
    subHeading: "Zurück zu voller Beweglichkeit",
    para: "Nach einer Verletzung, OP oder bei chronischen Beschwerden begleiten wir dich behutsam zurück in die Bewegung. In enger Abstimmung mit deinem Arzt oder Physiotherapeuten trainieren wir gezielt, sicher und mit viel Geduld.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`${isHeading && "pt_120"}  pb_120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Das bieten wir dir"
            sortTitle="Unsere Leistungen"
          />
        )}

        <div>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
