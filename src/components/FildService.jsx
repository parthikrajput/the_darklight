import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FildService = ({ title, desc, images, reverse }) => {
  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10 odd:bg-blue-l-900 even:bg-transparent">
      <div className="container">
        <div
          className={`flex items-center gap-10 xmd:gap-20 flex-wrap ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <div className="w-full xmd:w-[calc(50%-40px)] space-y-5">
            <h2>{title}</h2>
            <div className="text-p text-black-l-200 space-y-4">
              <p>{desc}</p>
            </div>
          </div>
          <div className="w-full xmd:w-[calc(50%-40px)]">
            {images.length === 1 ? (
              <img src={images[0]} alt="Static" className="w-full rounded-lg" />
            ) : (
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      className="w-full rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FildService;
