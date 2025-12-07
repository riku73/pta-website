import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import Link from "next/link";


const awardList = [
  {
    id: 1,
    awardName: "Beste Personal Training Academy",
    contest: "Luxembourg Fitness Awards",
    year: "2023",
  },
  {
    id: 2,
    awardName: "Top Ernährungsberatung",
    contest: "Gesundheit & Wellness",
    year: "2022",
  },
  {
    id: 3,
    awardName: "Innovation im Training",
    contest: "Digitaler Fitness Preis",
    year: "2021",
  },
  {
    id: 4,
    awardName: "Kundenzufriedenheit",
    contest: "98% Weiterempfehlung",
    year: "2024",
  },
];
const Awards = () => {

  return (
    <div className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden xxl:py-[120px] xl:py-[100px] py-[60px] ">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <table className="w-full">
            <tbody>
              <tr>
                <td className="bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                  <span className="md:text-[42px] sm:text-[28px] text-lg">Unsere Auszeichnungen</span>
                </td>
                <td className="bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]"></td>
                <td className="text-end bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                  <Link href={"/about-us"}
                    className="md:text-lg sm:text-base text-sm  flex justify-end items-center text-clr_base gap-2"
                  >
                    <span className="whitespace-nowrap">Mehr erfahren</span>
                    <i>
                      <ArrowRight />
                    </i>
                  </Link>
                </td>
              </tr>
              {awardList.map(({ contest, id, year, awardName }) => {
                return (
                  <tr key={id}>
                    <td className="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">{awardName}</td>
                    <td className="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">{contest}</td>
                    <td className="text-end bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">{year}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Awards;
