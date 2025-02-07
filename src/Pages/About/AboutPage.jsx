import React from "react";
import aboutbg from "../../img/aboutus.jpg";
import SubBanner from "../../components/SubBanner";
import Introduction from "../../components/Introduction";
import banner_vec from "../../img/bg-vec.png";
import Team from "../../components/Team";
import Counter from "../../components/Counter";
import Review from "../../components/Review";
import GetInTouch from "../../components/GetInTouch";
import BrandLogo from "../../components/BrandLogo";

const AboutPage = () => {
  return (
    <>
      <SubBanner
        subHeading="Helping businesses thrive with cutting-edge digital solutions."
        title="Empowering Your Digital Future with Innovation"
        description="With over 7 years of experience, we specialize in UI/UX design,
                mobile apps, web development, and digital marketing to drive
                business growth."
        image={aboutbg}
      />
      <Introduction
        image={banner_vec}
        subHeading="Introduction"
        title="Welcome to TheDarkLight – Your Digital Transformation Partner"
        description="At TheDarkLight, we specialize in providing cutting-edge digital solutions that empower businesses to reach new heights. With over 7 years of experience, we have successfully worked with startups, small businesses, and enterprises, helping them innovate and grow in the competitive digital landscape. Our team of experts is passionate about creating user-centered digital experiences that drive results and foster long-term success."
        reverse={false}
      />
      <Introduction
        image={banner_vec}
        subHeading="Our Mission"
        title="Our Mission – Transforming Ideas into Reality"
        description="Our mission is to help businesses navigate the digital era by offering creative, high-quality, and innovative digital solutions. We focus on understanding our clients' unique needs and challenges to provide them with customized strategies that produce measurable results. Whether it’s UI/UX design, mobile app development, web development, or digital marketing, we strive to deliver solutions that enhance user experiences and maximize business growth."
        reverse={true}
      />
      <Introduction
        image={banner_vec}
        subHeading="Our Vision"
        title="Our Vision – Leading the Future of Digital Innovation"
        description="We envision a future where TheDarkLight is a global leader in digital innovation. We aim to be the go-to partner for businesses looking to create dynamic digital experiences that drive growth, engagement, and success. We are committed to pushing the boundaries of technology and creativity to help businesses transform their digital presence."
        reverse={false}
      />
      <Introduction
        image={banner_vec}
        subHeading="Our Values"
        title="Our Core Values – Guiding Every Step of Our Journey"
        description="At TheDarkLight, we are committed to delivering exceptional value to our clients by embracing innovation, fostering collaboration, and upholding integrity. We constantly evolve with new technologies to provide cutting-edge solutions while working closely with our clients to achieve their goals. Transparency and honesty are at the core of our approach, ensuring trust and reliability. Our focus on quality guarantees high-performance, scalable, and secure solutions, while our dedication to customer satisfaction ensures that our clients remain at the heart of everything we do."
        reverse={true}
      />
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
      <Counter />
      <Review />
      <GetInTouch />
      <BrandLogo />
    </>
  );
};

export default AboutPage;
