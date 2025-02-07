import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import graphicdesign from "../../img/graphicDesignHero.png";

const GraphicDesign = () => {
  return (
    <ServiceBanner
      title="GRAPHIC DESIGN"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={graphicdesign}
    />
  );
};

export default GraphicDesign;
