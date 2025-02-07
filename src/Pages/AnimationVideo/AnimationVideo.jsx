import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import animationvideo from "../../img/animationVideo.png";

const AnimationVideo = () => {
  return (
    <ServiceBanner
      title="3D Animations & Video Content"
      subheading="YOU THINK, WE MAKE IT POSSIBLE"
      button="REQUEST A PROPOSAL"
      buttonpath="/contact"
      image={animationvideo}
    />
  );
};

export default AnimationVideo;
