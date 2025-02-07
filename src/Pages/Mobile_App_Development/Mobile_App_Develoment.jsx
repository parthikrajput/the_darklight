import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import mobileapp from "../../img/appDevelopmentHero.png";
import FildService from "../../components/FildService";
import mobile1 from "../../img/mobileapp1.png";
import mobile2 from "../../img/mobileapp2.png";
import mobile3 from "../../img/mobileapp3.png";
// import web1 from "../../img/webslider1.png";s

const Mobile_App_Develoment = () => {
  const imagesSet1 = [mobile1, mobile2, mobile3];
  // const imagesSet2 = [web1];
  return (
    <>
      <ServiceBanner
        title="MOBILE APP DEVELOPMENT"
        subheading="YOU THINK, WE MAKE IT POSSIBLE"
        button="REQUEST A PROPOSAL"
        buttonpath="/contact"
        image={mobileapp}
      />
      <FildService
        title="Mobile App Development"
        desc="At TheDarkLight, we specialize in mobile app development for both iOS and Android platforms. Our expert team uses the latest technologies and best practices to build high-performance, scalable, and user-friendly mobile applications. Whether you're looking to create a native app or a cross-platform solution with frameworks like React Native and Flutter, we ensure seamless functionality, responsive designs, and a smooth user experience. Our mobile apps are optimized for speed, security, and performance, helping your business connect with users and drive growth in the mobile-first world."
        images={imagesSet1}
        reverse={false}
      />
    </>
  );
};

export default Mobile_App_Develoment;
