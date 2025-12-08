import React from "react";
import AboutCard from "./AboutCard";

const Experience = ({ isTabActive }) => {
  return (
    <div
      className={`w-full duration-700 ${isTabActive === "experience" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}
    >
      <AboutCard
        title={"Unsere Erfahrung"}
        para={
          "Mit über 10 Jahren Erfahrung im Bereich Personal Training und Fitness haben wir tausende Menschen auf ihrem Weg zu einem gesünderen Leben begleitet. Unser Team vereint Expertise aus verschiedenen Bereichen der Gesundheits- und Fitnessbranche."
        }
        info={[
          {
            date: "Seit 2015",
            position: "Personal Training Academy",
            instition: "Gründung & Aufbau",
          },
          {
            date: "Über 500",
            position: "Erfolgreiche Transformationen",
            instition: "Zufriedene Kunden",
          },
          {
            date: "5",
            position: "Zertifizierte Trainer",
            instition: "Professionelles Team",
          },
        ]}
        image="/images/gym-interior-wide.jpg"
      />
    </div>
  );
};

export default Experience;
