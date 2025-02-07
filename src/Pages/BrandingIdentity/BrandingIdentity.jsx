import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import BrandingBg from "../../img/branding.png";

const BrandingIdentity = () => {
  return (
    <ServiceBanner
      title="Branding & Identity"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={BrandingBg}
    />
  );
};

export default BrandingIdentity;
