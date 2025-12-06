import React from "react";
import AboutCard from "./AboutCard";

const Education = ({ isTabActive }) => {
  return (
    <div className={`w-full duration-700 ${isTabActive === "education" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <AboutCard
        title={"Unsere Qualifikationen"}
        para={
          "Unser Team besteht aus zertifizierten Trainern und Ernährungsexperten mit umfangreicher Ausbildung. Wir bilden uns kontinuierlich weiter, um dir die bestmögliche Betreuung zu bieten."
        }
        info={[
          {
            date: "Zertifiziert",
            position: "Personal Trainer Lizenz",
            instition: "DSSV & BSA Akademie",
          },
          {
            date: "Spezialisiert",
            position: "Ernährungsberatung",
            instition: "DGE Zertifizierung",
          },
          {
            date: "Fortbildung",
            position: "Funktionelles Training",
            instition: "FMS & Kettlebell",
          },
        ]}
      />
    </div>
  );
};

export default Education;
