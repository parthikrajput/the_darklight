import React from "react";
import baner_bg from "../img/banner.png";
import { Link } from "react-router-dom";
import banner_vec from "../img/bg-vec.png";

const Banner = () => {
  return (
    <section
      className="xl:pb-20 lg:pb-16 sm:pb-14 pb-10 pt-20 bg-cover bg-center relative after:absolute after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:bg-blue-l-950 after:opacity-60 after:z-[-1] z-[1]"
      style={{
        backgroundImage: `url(${baner_bg})`,
      }}
    >
      <div className="container">
        <div className="flex items-center gap-20 flex-wrap">
          <div className="w-full text-center xlg:text-left xlg:w-[calc(50%-40px)] space-y-7">
            <div className="space-y-3">
              <div className="tagline flex items-center gap-2 justify-center xlg:justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
                <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
                  Empowering Brands with Cutting-Edge Digital Innovation
                </p>
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
              </div>
              <h1 className="text-white">
                Transforming Ideas into Exceptional{" "}
                <span className="text-blue-l-300"> UI/UX</span>,{" "}
                <span className="text-blue-l-300"> Web</span>, and{" "}
                <span className="text-blue-l-300">Mobile</span> Experiences
              </h1>
            </div>
            <div className="text space-y-3 text-black-l-200">
              <p>
                At TheDarkLight, we specialize in modern UI/UX design,
                high-performance mobile apps, and dynamic website development to
                help businesses thrive in the digital era. Our user-focused,
                SEO-optimized, and mobile-friendly solutions ensure seamless
                experiences that boost engagement, enhance brand visibility, and
                drive conversions. Whether you're a startup or an enterprise, we
                turn bold ideas into reality with cutting-edge technology and
                creative brilliance.
              </p>
            </div>
            <div className="flex items-center gap-6 flex-wrap xlg:justify-start justify-center">
              <Link
                to="/contact"
                className="btn border-blue-l-300 text-blue-l-300 hover:bg-blue-l-300"
                aria-label=""
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-[calc(50%-40px)] hidden xlg:flex items-center justify-end">
            <img src={banner_vec} alt="banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
