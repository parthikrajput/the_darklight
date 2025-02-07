import React from "react";
import Service from "../../components/Service";
import SubBanner from "../../components/SubBanner";
import servicebg from "../../img/services.jpg";
import Technologies from "../../components/Technologies";
import GetInTouch from "../../components/GetInTouch";
import Review from "../../components/Review";
import BrandLogo from "../../components/BrandLogo";
import CaseStudies from "../../components/CaseStudies";

const ServicePage = () => {
  return (
    <>
      <SubBanner
        subHeading="Get in Touch with Us"
        title="Request a Free Consultation – Let’s Build Something Amazing Together"
        description="Ready to take your digital project to the next level? At TheDarkLight, we offer personalized consultations to understand your business needs and deliver tailored solutions. Fill out the form below, and our team will get in touch with you to discuss how we can help you achieve your goals."
        image={servicebg}
      />
      <Service
        tagline="Total IT Solution Here"
        tag_layout="center"
        title="Provide Exclusive Services"
        description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        layout="center"
      />
      <Technologies />
      <CaseStudies />
      <Review />
      <GetInTouch />
      <BrandLogo />
    </>
  );
};

export default ServicePage;
