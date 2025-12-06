import React from "react";
import Link from "next/link";
import { Calendar3, Clock, ArrowRight } from "react-bootstrap-icons";

const EventBanner = () => {
  return (
    <section className="bg-clr_base py-4">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
          <div className="flex items-center gap-2">
            <Calendar3 className="text-clr_title text-lg" />
            <span className="text-clr_title font-semibold">Grand Opening</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-clr_title" />
            <span className="text-clr_title">20. September 2025 ab 15:00 Uhr</span>
          </div>
          <span className="text-clr_title hidden md:inline">|</span>
          <span className="text-clr_title">Tag der offenen Tür mit Essen, Getränken & Tombola</span>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-clr_title text-clr_base px-4 py-2 rounded-full font-medium hover:bg-white duration-300"
          >
            <span>Mehr erfahren</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventBanner;
