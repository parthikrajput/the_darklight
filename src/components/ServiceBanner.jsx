import React from "react";
import { Link } from "react-router-dom";

const ServiceBanner = ({ title, subheading, button, buttonpath, image }) => {
  return (
    <section className="xl:pb-20 lg:pb-16 sm:pb-14 pb-10 pt-20">
      <div className="container text-center">
        <div className="space-y-6">
          <div className="space-y-6">
            <div className="space-y-3 text-center">
              <h1 className="uppercase">{title}</h1>
              <p className="text-black-l-200 uppercase">{subheading}</p>
            </div>
            <Link
              to={buttonpath}
              aria-label=""
              className="btn mx-auto border-blue-l-300 text-blue-l-300 hover:bg-blue-l-300"
            >
              {button}
            </Link>
          </div>
          <img src={image} alt={title} className="mx-auto max-w-[800px] pt-6" />
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
