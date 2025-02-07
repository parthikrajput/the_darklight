import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import servicebg from "../../img/uiUxHeroImg.png";
import FildService from "../../components/FildService";
import mobile1 from "../../img/mobileapp1.png";
import mobile2 from "../../img/mobileapp2.png";
import mobile3 from "../../img/mobileapp3.png";
import web1 from "../../img/webslider1.png";
import ToolUse from "../../components/ToolUse";
import photoshop from "../../img/toolsPhotoshop.png";
import illustrator from "../../img/toolsIllustrator.png";
import figma from "../../img/toolsFigma.png";
import xd from "../../img/toolsXd.png";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";

const UI_UX_Designer = () => {
  const imagesSet1 = [mobile1, mobile2, mobile3];
  const imagesSet2 = [web1];
  const uiuxTools = [
    { name: "Photoshop", icon: photoshop },
    { name: "Illustrator", icon: illustrator },
    { name: "Figma", icon: figma },
    { name: "Adobe XD", icon: xd },
  ];

  return (
    <>
      <ServiceBanner
        title="UI/UX DESIGN"
        subheading="YOU THINK, WE MAKE IT POSSIBLE"
        button="REQUEST A PROPOSAL"
        buttonpath="/contact"
        image={servicebg}
      />
      <FildService
        title="Mobile App Development"
        desc="At TheDarkLight, we specialize in mobile app development for both iOS and Android platforms. Our expert team uses the latest technologies and best practices to build high-performance, scalable, and user-friendly mobile applications. Whether you're looking to create a native app or a cross-platform solution with frameworks like React Native and Flutter, we ensure seamless functionality, responsive designs, and a smooth user experience. Our mobile apps are optimized for speed, security, and performance, helping your business connect with users and drive growth in the mobile-first world."
        images={imagesSet1}
        reverse={false}
      />
      <FildService
        title="Web Development"
        desc="At TheDarkLight, we provide expert web development services tailored to your business needs. From responsive websites to e-commerce platforms, we build fast, secure, and SEO-optimized websites that deliver exceptional user experiences. Our team uses the latest technologies like HTML5, CSS3, JavaScript, React.js, and Node.js to create scalable, high-performance websites that are mobile-friendly and easily discoverable on search engines. Whether you need a simple website or a complex web application, we focus on creating solutions that not only look great but also perform flawlessly, ensuring your business stays ahead in the digital world."
        images={imagesSet2}
        reverse={true}
      />
      <ToolUse
        title="Tools We Use for UI/UX Design"
        desc="At TheDarkLight, we use advanced design tools to create stunning user experiences."
        tools={uiuxTools}
      />
      <Projects />
      <Contact />
    </>
  );
};

export default UI_UX_Designer;
