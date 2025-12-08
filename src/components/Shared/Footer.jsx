'use client'
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowUpShort, Facebook, Instagram, Linkedin, Youtube, GeoAlt, Telephone, Envelope, Clock } from "react-bootstrap-icons";

const navigation = [
  { id: 1, name: "Startseite", path: "/" },
  { id: 2, name: "Über Uns", path: "/ueber-uns" },
  { id: 3, name: "Leistungen", path: "/leistungen" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Kontakt", path: "/kontakt" },
];

const services = [
  { id: 1, name: "Personal Training", path: "/leistungen/personal-training" },
  { id: 2, name: "Ernährungsberatung", path: "/leistungen/ernaehrungsberatung" },
  { id: 3, name: "Gruppentraining", path: "/leistungen/gruppentraining" },
  { id: 4, name: "Fitness Bootcamp", path: "/leistungen/fitness-bootcamp" },
  { id: 5, name: "Rehabilitation", path: "/leistungen/rehabilitation" },
  { id: 6, name: "Sportmannschaften", path: "/leistungen/sportmannschaften" },
];

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e, path) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    if (pathname === path) {
      setTimeout(() => window.scrollTo(0, 0), 0);
    } else {
      router.push(path, { scroll: false });
      setTimeout(() => window.scrollTo(0, 0), 50);
    }
  };

  return (
    <footer>
      <div className="bg-[#121212]">
        <div className="container">
          <div className="pt-16 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1: Brand */}
              <div>
                <Link href="/" scroll={false} onClick={(e) => handleNavigation(e, "/")} className="block mb-6">
                  <Image
                    src="/images/pta-logo.svg"
                    alt="PTA Training Luxembourg"
                    width={70}
                    height={70}
                    className="w-[70px] h-[70px]"
                  />
                </Link>
                <p className="text-clr_pra mb-6 leading-relaxed">
                  Für jeden Körper. Für jedes Ziel.
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.facebook.com/PTAlTraining"
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label="Besuche uns auf Facebook"
                    className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-clr_base hover:text-clr_title duration-300"
                  >
                    <Facebook className="text-lg" aria-hidden="true" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/pta.training"
                    target="_blank"
                    rel="noopener noreferrer me"
                    aria-label="Folge uns auf Instagram"
                    className="w-12 h-12 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-clr_base hover:text-clr_title duration-300"
                  >
                    <Instagram className="text-lg" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Column 2: Navigation */}
              <div>
                <h3 className="text-white text-xl font-medium mb-6">Navigation</h3>
                <ul className="space-y-3">
                  {navigation.map(({ id, name, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
                        scroll={false}
                        onClick={(e) => handleNavigation(e, path)}
                        className="text-clr_pra hover:text-clr_base duration-300"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 className="text-white text-xl font-medium mb-6">Leistungen</h3>
                <ul className="space-y-3">
                  {services.map(({ id, name, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
                        scroll={false}
                        onClick={(e) => handleNavigation(e, path)}
                        className="text-clr_pra hover:text-clr_base duration-300"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 4: Contact */}
              <div>
                <h3 className="text-white text-xl font-medium mb-6">Kontakt</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <GeoAlt className="text-clr_base text-lg mt-1 flex-shrink-0" aria-hidden="true" />
                    <span className="text-clr_pra">1 Fuussekaul, Heiderscheid, Luxembourg</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Telephone className="text-clr_base text-lg flex-shrink-0" aria-hidden="true" />
                    <Link href="tel:+352691789483" className="text-clr_pra hover:text-clr_base duration-300">
                      +352 691 789 483
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <Envelope className="text-clr_base text-lg flex-shrink-0" aria-hidden="true" />
                    <Link href="mailto:info@pta-training.lu" className="text-clr_pra hover:text-clr_base duration-300">
                      info@pta-training.lu
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="text-clr_base text-lg mt-1 flex-shrink-0" aria-hidden="true" />
                    <div className="text-clr_pra">
                      <span className="block">Mo-Do: 08:00 - 21:00</span>
                      <span className="block">Fr: 09:00 - 19:00</span>
                      <span className="block">Sa: 09:00 - 12:00</span>
                      <span className="block">So: Geschlossen</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a1a1a]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between py-6 gap-4">
            <p className="text-clr_pra text-sm">
              Copyright © 2025{" "}
              <Link href="/" scroll={false} onClick={(e) => handleNavigation(e, "/")} className="text-clr_base hover:text-white duration-300 underline underline-offset-2">
                PTA
              </Link>
              . Alle Rechte vorbehalten.
            </p>
            <ul className="flex gap-6">
              <li>
                <Link href="/agb" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  Impressum
                </Link>
              </li>
            </ul>
            <button
              onClick={() => window.scrollTo(0, 0)}
              aria-label="Nach oben scrollen"
              className="w-12 h-12 bg-clr_base rounded flex justify-center items-center hover:bg-[#aad302] duration-300"
            >
              <ArrowUpShort className="text-xl text-clr_title" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
