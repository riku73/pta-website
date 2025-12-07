import React from "react";
import Price from "./Price";
import Title from "../Shared/Title";

const planData = [
  {
    id: 1,
    planName: "Basis",
    price: "€49",
    time: "pro Monat",
    fetcher: [
      "1x Personal Training pro Woche",
      "Zugang zum Trainingsbereich",
      "Individueller Trainingsplan",
      "Monatliche Fortschrittskontrolle",
    ],
    image: "/img/project/basic.png",
  },
  {
    id: 2,
    planName: "Standard",
    price: "€79",
    time: "pro Monat",
    fetcher: [
      "2x Personal Training pro Woche",
      "Zugang zum Trainingsbereich",
      "Individueller Trainingsplan",
      "Ernährungsberatung Grundpaket",
      "14-tägige Fortschrittskontrolle",
    ],
    image: "/img/project/warranty.png",
  },
  {
    id: 3,
    planName: "Premium",
    price: "€129",
    time: "pro Monat",
    fetcher: [
      "Unbegrenztes Personal Training",
      "Voller Zugang zu allen Kursen",
      "Individueller Trainings- & Ernährungsplan",
      "Wöchentliche Check-ins",
      "Priority-Terminbuchung",
    ],
    image: "/img/project/premium-quality.png",
  },
];

const Pricing = () => {
  return (
    <section className="pt_120 pb_120">
      <div className="container">
        <Title
          mainTitle={"Finde das Angebot, das zu deinem Ziel passt"}
          sortTitle={"Unsere Mitgliedschaften"}
        />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center">
          {planData.map(({ id, image, planName, fetcher, price, time }) => (
            <Price
              key={id}
              image={image}
              planName={planName}
              price={price}
              time={time}
              fetcher={fetcher}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
