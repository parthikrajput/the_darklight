import React from "react";
import reviewBG from "../img/testimonial-bg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import review_1 from "../img/team1.jpg";
import review_2 from "../img/team2.jpg";

const reviews = [
  {
    image: review_1,
    desc: "The service was fantastic! Highly recommend.",
    name: "John Doe",
    position: "Senior Web Developer",
  },
  {
    image: review_2,
    desc: "Amazing experience, very professional team.",
    name: "Jane Smith",
    position: "Lead UI/UX Designer",
  },
  {
    image: review_1,
    desc: "The best development team I've worked with!",
    name: "Michael Brown",
    position: "Mobile App Developer",
  },
  {
    image: review_2,
    desc: "Great communication and excellent results!",
    name: "Sarah Lee",
    position: "Project Manager",
  },
];

const Review = () => {
  return (
    <section
      className="xl:py-20 lg:py-16 sm:py-14 py-10 bg-fixed bg-center bg-cover relative after:content-['']
      after:absolute after:bg-[rgba(6,9,34,0.5)] after:backdrop-blur-[5px] after:z-[-1] z-[1] after:w-full after:h-full after:top-0 after:left-0"
      style={{ backgroundImage: `url(${reviewBG})` }}
    >
      <div className="container space-y-10">
        <div className="space-y-4 text-center">
          <div className="tagline flex items-center gap-2 justify-center">
            <span className="w-2 h-2 rounded-full bg-blue-l-700 flex-none"></span>
            <p className="text-a uppercase font-medium tracking-wide text-blue-l-700">
              What Our Clients Are Saying
            </p>
            <span className="w-2 h-2 rounded-full bg-blue-l-700 flex-none"></span>
          </div>
          <div className="flex items-start justify-center text-center gap-6 xl:gap-5 flex-wrap">
            <div className="space-y-5">
              <h2>Customer Testimonials – Real Experiences, Real Results</h2>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] mx-auto text-center review-slider">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="py-6"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-card text-white py-6 text-center max-w-[600px] mx-auto">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <p className="text-black-l-100 italic mt-10">
                    "{review.desc}"
                  </p>
                  <div className="space-y-1 pt-5">
                    <h3 className="text-h5 text-white">{review.name}</h3>
                    <p className="text-black-l-200">{review.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;
