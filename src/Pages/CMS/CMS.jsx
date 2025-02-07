import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import cmsbg from "../../img/cmsDevelopmentHero.png";

const CMS = () => {
  return (
    <ServiceBanner
      title="CMS DEVELOPMENT"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={cmsbg}
    />
  );
};

export default CMS;
