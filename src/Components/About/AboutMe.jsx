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
    contact: "+352 123 456",
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
            <div
              className="w-full"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=600&fit=crop" alt="Personal Training" className="w-full rounded-lg object-cover" />
            </div>
          </div>
          <div>
            <div className="lg:pl-10 pl-0">
              <h2
                className="text-[42px] font-semibold text-clr_white mb-5"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Wer wir sind
              </h2>
              <p
                className="text-lg text-clr_pra mb-0"
                data-aos="fade-up"
                data-aos-duration="500"
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
                        data-aos="zoom-in"
                      >
                        <div className="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base h-full">
                          <div>
                            <span className="text-clr_pra md:text-lg text-base mb-5 block">
                              {system}
                            </span>
                            <span className="text-xl text-clr_white">{contact}</span>
                            {socalContact && (
                              <ul className="flex items-center xl:gap-4 gap-2">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link href={"#"} className="text-clr_white text-2xl">{info}</Link>
                                  </li>
                                ))}
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
