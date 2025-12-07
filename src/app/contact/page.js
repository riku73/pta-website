import React from "react";
import PageHeader from "../../Components/Shared/PageHeader";
import Form from "../../Components/Shared/Form";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Lass uns sprechen"}
        page={"Kontakt"}
        backgroundImage="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80"
      />
      <section className="contact__section">
        <div className="container">
          <div className="grid lg:grid-cols-[66.66%_auto] grid-cols-1 gap-6">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div>
                <Form isColTwo={false} />
              </div>
            </div>
            <div
              className="col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="bg-common_bg py-[30px] px-4 sm:px-5 xl:px-[30px] xl:py-[60px]">
                <h4 className="lg:mb-[30px] mb-5xl xl:text-2xl text-xl font-semibold text-white capitalize ">Wir freuen uns auf deine Nachricht</h4>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">E-Mail</span>
                  <Link href={"mailto:info@pta-training.lu"} className="text-white xl:text-xl text-base block">info@pta-training.lu</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Telefon</span>
                  <Link href={"tel:+352123456"} className="text-white xl:text-xl text-base block">+352 123 456</Link>
                </div>
                <div className="lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Adresse</span>
                  <span className="text-white xl:text-xl text-base block">1 Fuussekaul, Heiderscheid, Luxembourg</span>
                </div>
                <div className="rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
                  <span className="mb-[14px] block text-clr_pra capitalize">Öffnungszeiten</span>
                  <span className="text-white xl:text-xl text-base block">Mo-Fr: 06:00 - 22:00 Uhr</span>
                  <span className="text-white xl:text-xl text-base block">Sa-So: 08:00 - 20:00 Uhr</span>
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
