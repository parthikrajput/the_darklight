import React from "react";
import { Link } from "react-router-dom";
import getintouchBG from "../img/getInTouch.png";

const GetInTouch = () => {
  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10">
      <div className="container">
        <div
          className="bg-cover bg-center rounded-xl py-10 px-10 flex items-center gap-7 md:gap-5 justify-between flex-wrap"
          style={{
            backgroundImage: `linear-gradient(45deg,hsla(0,0%,100%,.149),hsla(0,0%,100%,.149)),url(${getintouchBG})`,
          }}
        >
          <div className="w-full md:w-[calc(70%-10px)]">
            <div className="space-y-4">
              <div className="flex items-start gap-6 xl:gap-5 flex-wrap">
                <div className="space-y-5">
                  <h2>
                    Let’s Work Together – Start Your Digital Journey with Us
                  </h2>
                  <div className="text space-y-3 text-black-l-200">
                    <p>
                      Ready to transform your business? Our team is here to help
                      you every step of the way. Contact us today to discuss
                      your project and learn how TheDarkLight can deliver
                      results that matter.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(30%-10px)] flex md:justify-end">
            <Link
              to="/contact"
              className="btn border-blue-l-300 text-blue-l-300 hover:bg-blue-l-300"
              aria-label=""
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
