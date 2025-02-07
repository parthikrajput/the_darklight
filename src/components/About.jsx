import React from "react";
import banner_vec from "../img/bg-vec.png";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <section
        className={`${
          isHomePage
            ? "xl:pb-20 lg:pb-16 sm:pb-14 py-10"
            : "xl:py-20 lg:py-16 sm:py-14 py-10"
        } `}
      >
        <div className="container">
          <div className="flex items-center flex-wrap gap-20">
            <div className="w-full xmd:w-[calc(50%-40px)] animate-flot">
              <img src={banner_vec} alt="" />
            </div>
            <div className="w-full xmd:w-[calc(50%-40px)]">
              <div className="space-y-4">
                <div className="tagline flex items-center gap-2 justify-start">
                  <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
                  <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
                    Our About
                  </p>
                  <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
                </div>
                <div className="flex items-start gap-6 xl:gap-5 flex-wrap">
                  <div className="space-y-5">
                    <h2>
                      Your Trusted Partner in Digital Transformation for Over a
                      Decade
                    </h2>
                    <div className="text space-y-3 text-black-l-200">
                      <p>
                        At TheDarkLight, we specialize in providing cutting-edge
                        digital solutions that empower businesses to reach new
                        heights. With over 7 years of experience, we have
                        successfully worked with startups, small businesses, and
                        enterprises, helping them innovate and grow in the
                        competitive digital landscape. Our team of experts is
                        passionate about creating user-centered digital
                        experiences that drive results and foster long-term
                        success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
