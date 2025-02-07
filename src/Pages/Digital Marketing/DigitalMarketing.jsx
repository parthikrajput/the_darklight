import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import digitalmarketing from "../../img/digitalMarketing.png";

const DigitalMarketing = () => {
  return (
    <ServiceBanner
      title="Boost Your Brand with Data-Driven Digital Marketing"
      subheading="At TheDarkLight, we craft result-oriented digital marketing strategies to increase your brand visibility, engagement, and conversions. From SEO and social media marketing to PPC and content marketing, we help businesses grow in the ever-evolving digital landscape. Let’s take your brand to the next level with powerful marketing solutions!"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={digitalmarketing}
    />
  );
};

export default DigitalMarketing;
