import React from "react";
import PageHeader from "../../components/Shared/PageHeader";
import MultiStepForm from "../../components/Contact/MultiStepForm";
import Link from "next/link";

export const metadata = {
  title: "Kontakt | PTA Personal Training Academy Luxembourg",
  description: "Kontaktiere uns für ein kostenloses Erstgespräch. PTA Personal Training Academy in Heiderscheid, Luxembourg. Tel: +352 691 789 483, Email: info@pta-training.lu",
  openGraph: {
    title: "Kontakt | PTA Training Luxembourg",
    description: "Kontaktiere uns für ein kostenloses Erstgespräch. Personal Training Academy in Heiderscheid, Luxembourg.",
    url: "https://pta-training.lu/kontakt",
    siteName: "PTA Training",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://pta-training.lu/images/pta-entrance.jpg",
        width: 1200,
        height: 630,
        alt: "PTA Kontakt - Personal Training Academy Luxembourg",
      },
    ],
  },
};

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Lass uns sprechen"}
        page={"Kontakt"}
        backgroundImage="/images/pta-entrance.jpg"
      />
      <section className="pt-16 pb_120 bg-common_bg">
        <div className="container">
          <div className="grid lg:grid-cols-[66.66%_auto] grid-cols-1 gap-6">
            <div
             
             
            >
              <div>
                <MultiStepForm />
              </div>
            </div>
            <div
              className="col-lg-4"
             
             
            >
              <div className="bg-common_bg py-[30px] px-4 sm:px-5 xl:px-[30px] xl:py-[60px]">
                <h4 className="lg:mb-[30px] mb-5xl xl:text-2xl text-xl font-medium text-white capitalize ">Wir freuen uns auf deine Nachricht</h4>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">E-Mail</span>
                  <Link href={"mailto:info@pta-training.lu"} className="text-white xl:text-xl text-base block">info@pta-training.lu</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Telefon</span>
                  <Link href={"tel:+352691789483"} className="text-white xl:text-xl text-base block">+352 691 789 483</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Adresse</span>
                  <span className="text-white xl:text-xl text-base block">1 Fuussekaul, Heiderscheid, Luxembourg</span>
                </div>
                <div className="rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Öffnungszeiten</span>
                  <span className="text-white xl:text-xl text-base block">Mo-Do: 08:00 - 21:00 Uhr</span>
                  <span className="text-white xl:text-xl text-base block">Fr: 09:00 - 19:00 Uhr</span>
                  <span className="text-white xl:text-xl text-base block">Sa: 09:00 - 12:00 Uhr</span>
                  <span className="text-white xl:text-xl text-base block">So: Geschlossen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
