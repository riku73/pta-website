'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "react-bootstrap-icons";

const Blog = ({ date, heading, image, slug }) => {
  return (
    <div
      className="flex sm:flex-row flex-col justify-between items-center gap-4 lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base first:border-t first:border-t-[rgb(38_37_37)]"
    >
      <div className="shrink basis-4/5 flex md:flex-row flex-col justify-between md:items-center sm:items-start items-center gap-4">
        <div className="shrink basis-1/2">
          <div>
            <span className="text-clr_pra text-base border border-clr_cusborder rounded-[100px] py-[7px] px-[15px] sm:mb-6 mb-[18px] inline-block">
              {date}
            </span>
            <h3 className="xl:text-3xl sm:text-[22px] text-xl text-white sm:leading-[44px] leading-8 font-medium">
              <Link
                href={`/blog/${slug}`}
                className="text-white duration-500 group-hover:text-clr_base"
              >
                {heading}
              </Link>
            </h3>
          </div>
        </div>
        <div className="duration-500 opacity-100">
          <Link href={`/blog/${slug}`}>
            <Image
              src={image}
              alt={heading}
              width={290}
              height={157}
              className="max-w-[290px] h-[157px] object-cover rounded-lg"
            />
          </Link>
        </div>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="w-[60px] h-[60px] flex justify-center items-center bg-none rounded-full border border-white duration-500 group-hover:border-clr_base group-hover:bg-clr_base"
      >
        <ArrowRight className="text-white duration-500 group-hover:text-clr_title" />
      </Link>
    </div>
  );
};

export default Blog;
