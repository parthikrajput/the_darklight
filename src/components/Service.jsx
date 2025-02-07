import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "We specialize in creating intuitive, engaging, and user-centered designs. Our approach ensures seamless experiences across websites and mobile apps, focusing on the needs of the users while amplifying your brand’s identity. Optimized for conversion, our designs boost engagement, improve usability, and elevate your business.",
    path: "ui_ux_design",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "Unlock the full potential of your business with our mobile app development services. We build high-performance, scalable apps for iOS and Android, tailored to your business needs. Whether you're looking to create a native app or a cross-platform solution, we ensure an excellent user experience, seamless navigation, and cutting-edge technology.",
    path: "mobile_app_development",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "We create powerful, SEO-optimized websites that not only perform well but also deliver an exceptional user experience. Whether it’s an e-commerce website, a corporate site, or a custom web solution, we focus on building responsive, fast-loading, and secure platforms to help your business grow online.",
    path: "web_development",
  },
  {
    id: 4,
    title: "CMS (Content Management System)",
    description:
      "We offer custom-built CMS solutions that enable businesses to manage their website content easily and efficiently. Our systems allow you to edit and update content without technical expertise, giving you complete control over your digital presence.",
    path: "cms",
  },
  {
    id: 5,
    title: "Graphic Design",
    description:
      "Stand out with custom graphic design services. From logos and branding materials to marketing assets, we help you communicate your brand’s message visually. Our designs ensure your brand resonates with your audience and leaves a lasting impression.",
    path: "graphic_design",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Maximize your online presence with our digital marketing strategies. From SEO to PPC, social media marketing, and email campaigns, we drive traffic, increase brand awareness, and convert leads into loyal customers. Our tailored approach ensures results and ROI.",
    path: "digital_marketing",
  },
  {
    id: 7,
    title: "Testing & QA (Quality Assurance)",
    description:
      "We ensure that your website or app performs flawlessly by conducting thorough testing and quality assurance. Our team rigorously tests for performance, security, and usability to deliver a smooth and bug-free user experience every time.",
    path: "testing_qa",
  },
  {
    id: 8,
    title: "3D Animations & Video Content",
    description:
      "Bring your ideas to life with 3D animations and video content that engage and captivate your audience. Our custom animations and videos communicate your message creatively, whether it's for product showcases, explainer videos, or interactive web elements.",
    path: "3d_animations_video_content",
  },
  {
    id: 9,
    title: "Branding & Identity",
    description:
      "Create a powerful and memorable brand identity. From logo design to brand strategy, we help businesses build strong brands that connect with customers and stand out in the market. Our branding services are designed to communicate your values and vision effectively.",
    path: "branding_identity",
  },
];

const Service = ({
  tagline = "Default Tagline",
  tag_layout = "left",
  title = "Default Title",
  description = "Default description.",
  buttonText = "See All Services",
  buttonLink = "/service",
  layout = "full",
  limit,
  showFullDescription = false,
}) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10">
      <div className="container">
        <div className="space-y-4">
          <div
            className={`tagline flex items-center gap-2 ${
              tag_layout === "center" ? "justify-center" : "justify-start"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
            <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
              {tagline}
            </p>
            <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
          </div>

          <div
            className={`flex items-start gap-6 xl:gap-5 flex-wrap ${
              layout === "center" ? "justify-center" : ""
            }`}
          >
            <div
              className={`${
                layout === "full"
                  ? "w-full"
                  : layout === "center"
                  ? "text-center w-full"
                  : "w-full xl:w-[calc(70%-10px)]"
              } space-y-5`}
            >
              <h2>{title}</h2>
              <div className="text space-y-3 text-black-l-200">
                <p>{description}</p>
              </div>
            </div>

            {layout !== "center" && (
              <div
                className={`${
                  layout === "full" ? "hidden" : "w-full xl:w-[calc(30%-10px)]"
                } flex items-center justify-start xl:justify-end`}
              >
                <Link
                  to={buttonLink}
                  target="_self"
                  className="btn border-blue-l-300 text-blue-l-300 hover:bg-blue-l-300"
                >
                  {buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-3 gap-6 mt-10">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="px-5 py-7 flex flex-col gap-6 border-2 border-solid border-blue-l-600 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-black-l-200 flex-1">
                {" "}
                {showFullDescription
                  ? service.description
                  : `${service.description.substring(0, 100)}...`}
              </p>
              <Link
                to={`/service/${service.path}`}
                className="text-blue-l-200 mt-2 inline-block"
              >
                Read More...
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
