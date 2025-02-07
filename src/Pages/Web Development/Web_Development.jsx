import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import webdesigner from "../../img/webDevelopHero.png"

const Web_Development = () => {
  return (
    <ServiceBanner
      title="WEB DEVELOPMENT"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={webdesigner}
    />
  );
};

export default Web_Development;
