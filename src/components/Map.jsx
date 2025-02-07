/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Map = () => {
  return (
    <section>
      <div className="container text-center mb-10">
        <h2>Our Location</h2>
        <p className="text-p text-black-l-200">Find us on Google Maps</p>
      </div>
      <div className="flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59059.6544873905!2d73.1812!3d22.3072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1738922940569!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full "
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
