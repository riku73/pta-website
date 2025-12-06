import React from "react";
import Title from "../Shared/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Kennenlernen & Ziele besprechen",
    info: "Im kostenlosen Erstgespräch nehmen wir uns Zeit für dich.",
    list: [
      "Wir hören zu: Was ist dein Ziel, wo stehst du gerade?",
      "Wir analysieren: Fitness-Level, gesundheitliche Aspekte, Alltag",
      "Wir planen: Welches Training passt am besten zu dir?",
    ],
  },
  {
    id: 2,
    title: "Dein Training beginnt",
    info: "Jetzt geht's los – mit einem Plan, der genau zu dir passt.",
    list: [
      "Individuell angepasst: Übungen, Intensität, Häufigkeit",
      "Professionelle Betreuung: Korrekte Ausführung, sichere Progression",
      "Flexibel bleiben: Wir passen an, wenn sich dein Leben ändert",
    ],
  },
  {
    id: 3,
    title: "Fortschritt sehen & feiern",
    info: "Deine Erfolge motivieren uns genauso wie dich.",
    list: [
      "Regelmäßige Check-ins: Wo stehst du, was läuft gut?",
      "Fortschritte messen: Kraft, Ausdauer, Wohlbefinden",
      "Weiter wachsen: Neue Ziele setzen, dranbleiben, stolz sein",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px] pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle="In drei Schritten zu deinem persönlichen Trainingsplan"
          sortTitle="So starten wir gemeinsam"
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
