import React from "react";

const Introduction = ({ image, subHeading, title, description, reverse }) => {
  return (
    <section
      className={`xl:py-20 lg:py-16 sm:py-14 py-10 ${
        reverse ? "bg-blue-l-900" : ""
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center flex-wrap gap-20 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-full xmd:w-[calc(50%-40px)] animate-flot">
            <img src={image} alt={title} />
          </div>
          <div className="w-full xmd:w-[calc(50%-40px)]">
            <div className="space-y-4">
              <div className="tagline flex items-center gap-2 justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-300 flex-none"></span>
                <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
                  {subHeading}
                </p>
                <span className="w-2 h-2 rounded-full bg-blue-300 flex-none"></span>
              </div>
              <div className="flex items-start gap-6 xl:gap-5 flex-wrap">
                <div className="space-y-5">
                  <h2>{title}</h2>
                  <div className="text space-y-3 text-black-l-200">
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
