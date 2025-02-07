import React from "react";
import Banner from "../../components/Banner";
import Service from "../../components/Service";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import Counter from "../../components/Counter";
import Team from "../../components/Team";
import Review from "../../components/Review";
import GetInTouch from "../../components/GetInTouch";
import BrandLogo from "../../components/BrandLogo";

const Home = () => {
  return (
    <>
      <Banner />
      <Service
        limit={6}
        tagline="Our Expert Services"
        tag_layout="left"
        title="Transform Your Digital Presence with Our Comprehensive Solutions"
        description="At TheDarkLight, we provide a wide range of digital services tailored to meet the specific needs of businesses looking to elevate their brand and thrive in the digital world. From UI/UX design to mobile app development, web development, and digital marketing, our expert team delivers solutions that drive results, foster growth, and enhance user engagement."
        buttonText="See All Services"
        buttonLink="/service"
        layout="default"
      />
      <About />
      <Technologies />
      <Counter />
      <Team
        limit={4}
        tagline="Meet Our Brilliant Team"
        tag_layout="left"
        title="The Experts Behind Your Digital Transformation"
        description="At TheDarkLight, our team of skilled professionals is dedicated to delivering innovative, high-quality digital solutions. From front-end developers to designers, project managers, and marketing experts, every team member plays a crucial role in bringing your vision to life. We foster a culture of collaboration, creativity, and continuous learning to ensure your business stays ahead of the curve."
        buttonText="See All Teams"
        buttonLink="/team"
        layout="default"
      />
      <Review />
      <GetInTouch />
      <BrandLogo />
    </>
  );
};

export default Home;
