import baner_bg from "../img/banner.png";
import React from "react";

const SubBanner = ({ subHeading, title, description, image }) => {
  return (
    <section
      className="xl:pb-20 lg:pb-16 sm:pb-14 pb-10 pt-20 xmd:mb-40 bg-cover bg-center relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-l-950 after:opacity-60 after:z-[-1] z-[1]"
      style={{
        backgroundImage: `url(${baner_bg})`,
      }}
    >
      <div className="container">
        <div className="flex items-center">
          <div className="w-full xlg:text-left text-center xlg:w-1/2 space-y-5">
            <div className="space-y-3">
              <div className="tagline flex items-center gap-2 justify-center xlg:justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
                <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
                  {subHeading}
                </p>
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
              </div>
              <h1 className="text-white">{title}</h1>
            </div>
            <div className="text space-y-3 text-black-l-200">
              <p>{description}</p>
            </div>
          </div>
          <div className="hidden xlg:block absolute w-[350px] h-[350px] overflow-hidden border-[40px] border-solid border-blue-l-950 top-1/2 right-[10%] ">
            <img
              src={image}
              alt="about"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;
