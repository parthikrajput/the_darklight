import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

import client1 from "../img/client1.jpg";
import client2 from "../img/client2.jpg";
import client3 from "../img/client3.jpg";
import client4 from "../img/client4.jpg";
import client5 from "../img/client5.jpg";

const logos = [
  { id: 1, src: client1, alt: "Client 1" },
  { id: 2, src: client2, alt: "Client 2" },
  { id: 3, src: client3, alt: "Client 3" },
  { id: 4, src: client4, alt: "Client 4" },
  { id: 5, src: client5, alt: "Client 5" },
];

const BrandLogo = () => {
  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10 bg-white">
      <div className="container">
        <div className="clients-img">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              450: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-[200px] mx-auto grayscale-[0.9] transition-all duration-350 hover:grayscale-0 hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BrandLogo;
