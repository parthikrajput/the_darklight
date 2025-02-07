import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import testingqa from "../../img/testingQa.png";

const TestingQa = () => {
  return (
    <ServiceBanner
      title="Testing & QA"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={testingqa}
    />
  );
};

export default TestingQa;
