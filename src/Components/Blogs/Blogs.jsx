import React from "react";
import Blog from "./Blog";
import { blogsList } from "../../Utlits/blogList";
import TitleSecond from "../Shared/TitleSecond";
import CircleBox from "../Shared/CircleBox";

const Blogs = () => {
  return (
    <section className="bg-common_bg pt-16 pb_120" id="blog">
      <div className="container">
        <div className="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">
          <div>
            <TitleSecond mainTitle={"Aktuelle Artikel"} sortTitle={"Unser Blog"} />
            <CircleBox />
          </div>
          <div>
            <div>
              <div>
                {blogsList
                  .slice(0, 3)
                  .map(({ id, slug, date, image, heading }, index) => (
                    <Blog
                      key={id}
                      slug={slug}
                      date={date}
                      image={image}
                      heading={heading}
                      index={index}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
