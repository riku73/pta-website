'use client'
import Link from "next/link";
import React from "react";
import { ArrowUpShort, Facebook, Instagram, Linkedin, Youtube, GeoAlt, Telephone, Envelope, Clock } from "react-bootstrap-icons";

const navigation = [
  { id: 1, name: "Startseite", path: "/" },
  { id: 2, name: "Über Uns", path: "/about-us" },
  { id: 3, name: "Leistungen", path: "/services" },
  { id: 4, name: "Blog", path: "/blog" },
  { id: 5, name: "Kontakt", path: "/contact" },
];

const services = [
  { id: 1, name: "Personal Training", path: "/services/personal-training" },
  { id: 2, name: "Ernährungsberatung", path: "/services/ernaehrungsberatung" },
  { id: 3, name: "Gruppentraining", path: "/services/gruppentraining" },
  { id: 4, name: "Fitness Bootcamp", path: "/services/fitness-bootcamp" },
  { id: 5, name: "Rehabilitation", path: "/services/rehabilitation" },
  { id: 6, name: "Sportmannschaften", path: "/services/sportmannschaften" },
];

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#0a0a0a]">
        <div className="container">
          <div className="pt-16 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {/* Column 1: Brand */}
              <div>
                <Link href="/" className="block mb-6">
                  <span className="text-3xl font-bold text-clr_base">PTA</span>
                </Link>
                <p className="text-clr_pra mb-6 leading-relaxed">
                  Für jeden Körper. Für jedes Ziel.
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.facebook.com/PTAlTraining/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-clr_base hover:text-clr_title duration-300"
                  >
                    <Facebook className="text-lg" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/pta.training"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#2a2a2a] flex items-center justify-center text-white hover:bg-clr_base hover:text-clr_title duration-300"
                  >
                    <Instagram className="text-lg" />
                  </Link>
                </div>
              </div>

              {/* Column 2: Navigation */}
              <div>
                <h4 className="text-white text-xl font-semibold mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {navigation.map(({ id, name, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
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
                <h4 className="text-white text-xl font-semibold mb-6">Leistungen</h4>
                <ul className="space-y-3">
                  {services.map(({ id, name, path }) => (
                    <li key={id}>
                      <Link
                        href={path}
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
                <h4 className="text-white text-xl font-semibold mb-6">Kontakt</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <GeoAlt className="text-clr_base text-lg mt-1 flex-shrink-0" />
                    <span className="text-clr_pra">1 Fuussekaul, Heiderscheid, Luxembourg</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Telephone className="text-clr_base text-lg flex-shrink-0" />
                    <Link href="tel:+352123456" className="text-clr_pra hover:text-clr_base duration-300">
                      +352 123 456
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <Envelope className="text-clr_base text-lg flex-shrink-0" />
                    <Link href="mailto:info@pta-training.lu" className="text-clr_pra hover:text-clr_base duration-300">
                      info@pta-training.lu
                    </Link>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="text-clr_base text-lg mt-1 flex-shrink-0" />
                    <div className="text-clr_pra">
                      <span className="block">Mo-Fr: 06:00 - 22:00</span>
                      <span className="block">Sa-So: 08:00 - 20:00</span>
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
              <Link href="/" className="text-clr_base hover:text-white duration-300">
                PTA
              </Link>
              . Alle Rechte vorbehalten.
            </p>
            <ul className="flex gap-6">
              <li>
                <Link href="#" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-clr_pra hover:text-clr_base duration-300">
                  Impressum
                </Link>
              </li>
            </ul>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 bg-clr_base rounded flex justify-center items-center hover:bg-[#aad302] duration-300"
            >
              <ArrowUpShort className="text-xl text-clr_title" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
