import React from "react";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
import Link from "next/link";

const contactInfo = [
  {
    id: 1,
    system: "E-Mail",
    contact: "info@pta-training.lu",
  },
  {
    id: 2,
    system: "Telefon",
    contact: "+352 691 789 483",
  },
  {
    id: 3,
    system: "Adresse",
    contact: "1 Fuussekaul, Heiderscheid, Luxembourg",
  },
  {
    id: 4,
    system: "Folge uns",
    socalContact: [
      <Facebook />,
      <Instagram />,
    ],
  },
];
const AboutMe = ({ isTabActive }) => {

  return (
    <div className={`w-full duration-700 ${isTabActive === "about" ? "z-10 opacity-100 translate-y-0" : "translate-y-20 -z-10 opacity-0 absolute  top-0 "} `}>
      <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
        <div className="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
          <div>
            <div className="w-full space-y-4">
              <img src="/images/team-trainers.jpg" alt="PTA Team - Jason, Jimmy und João" className="w-full rounded-lg object-cover" />
              <img src="/images/pta-banner.jpg" alt="PTA Personal Training Academy - Functional, Athletic, Strength, Speed, Interval, Mobility, Personal, Prevention, Agility, Outdoor" className="w-full rounded-lg object-cover" />
            </div>
          </div>
          <div>
            <div className="lg:pl-10 pl-0">
              <h2
                className="font-medium lg:text-5xl md:text-4xl text-3xl text-white mb-5 leading-tight"
               
               
              >
                Mach mehr aus dir.<br />
                <span className="text-clr_base">Professionell begleitet.</span><br />
                Persönlich betreut.
              </h2>
              <p
                className="text-lg text-clr_pra mb-0"
               
               
              >
                Die Personal Training Academy wurde 2015 gegründet – aus der Überzeugung heraus, dass Fitness mehr ist als nur Schwitzen im Studio. Unser Team aus erfahrenen Trainern und Ernährungsexperten arbeitet mit Menschen jeden Alters und jeder Lebenssituation: vom Reha-Patienten über den Wiedereinsteiger bis zum ambitionierten Sportler. Was uns verbindet? Die Leidenschaft dafür, dich Schritt für Schritt voranzubringen – ganz gleich, wo du gerade stehst.
              </p>
              <div className="mt-10">
                <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-6">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="h-full"
                       
                      >
                        <div className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base h-full">
                          <div>
                            <span className="text-clr_pra md:text-lg text-base mb-5 block">
                              {system}
                            </span>
                            <span className="text-xl text-clr_white">{contact}</span>
                            {socalContact && (
                              <ul className="flex items-center xl:gap-4 gap-2">
                                <li>
                                  <Link href="https://www.facebook.com/PTAlTraining" target="_blank" rel="noopener noreferrer" className="text-clr_white text-2xl hover:text-clr_base duration-300">{socalContact[0]}</Link>
                                </li>
                                <li>
                                  <Link href="https://www.instagram.com/pta.training" target="_blank" rel="noopener noreferrer" className="text-clr_white text-2xl hover:text-clr_base duration-300">{socalContact[1]}</Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
