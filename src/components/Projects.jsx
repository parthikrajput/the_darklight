/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import project1 from "../img/mobileapp1.png";
import project2 from "../img/mobileapp2.png";
import project3 from "../img/mobileapp3.png";

const industriesData = [
  {
    name: "On Demand",
    description:
      "Providing real-time services tailored to the client's needs, ensuring convenience and efficiency in delivery.",
    images: [project1, project2, project3],
  },
  {
    name: "Real Estate",
    description:
      "Innovative solutions for the real estate industry to manage properties, realtors, and clients with ease.",
    images: [project1, project2, project3],
  },
  {
    name: "Pharma & Health Care",
    description:
      "Revolutionizing the healthcare industry by providing digital platforms for easy access to medical services and products.",
    images: [project1, project2, project3],
  },
  {
    name: "Fitness & Wellness",
    description:
      "Digital solutions to help fitness and wellness brands connect with their customers and promote healthy lifestyles.",
    images: [project1, project2, project3],
  },
  {
    name: "News & Entertainment",
    description:
      "Creating interactive platforms for news and entertainment, offering users engaging content and seamless experiences.",
    images: [project1, project2, project3],
  },
  {
    name: "E-Commerce",
    description:
      "Providing robust e-commerce solutions to businesses, enhancing online shopping experiences and increasing sales.",
    images: [project1, project2, project3],
  },
  {
    name: "Sports & Gamers",
    description:
      "Creating innovative platforms for the sports and gaming industries, ensuring optimal engagement and user experience.",
    images: [project1, project2, project3],
  },
  {
    name: "Banking & Finance",
    description:
      "Developing secure and efficient financial platforms, enhancing customer satisfaction, and providing data-driven insights.",
    images: [project1, project2, project3],
  },
  {
    name: "Social Networking",
    description:
      "Building dynamic and engaging social networking platforms that connect users and foster communication.",
    images: [project1, project2, project3],
  },
  {
    name: "Education",
    description:
      "Transforming the education sector by creating interactive platforms for e-learning, training, and student management.",
    images: [project1, project2, project3],
  },
  {
    name: "Manufacturing",
    description:
      "Providing digital solutions for the manufacturing industry to streamline operations, supply chains, and production.",
    images: [project1, project2, project3],
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10 bg-blue-l-900">
      <div className="container">
        <div className="flex items-stretch flex-wrap">
          <div className="flex flex-row xlg:flex-col w-full xlg:w-[25%] border-r-0 xlg:border-b-0 border-b-2 xlg:pb-0 pb-4 xlg:border-r-2 border-solid border-black-l-200 overflow-x-auto scrollbar-custom">
            {industriesData.map((industry, index) => (
              <div
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 text-p whitespace-nowrap xlg:whitespace-normal cursor-pointer ${
                  activeTab === index
                    ? "text-white font-semibold"
                    : "text-black-l-400"
                } rounded-lg`}
              >
                {industry.name}
              </div>
            ))}
          </div>

          <div className="text-left w-full xlg:w-[75%] pl-0 xlg:pt-0 pt-7 xlg:pl-7">
            <h2>{industriesData[activeTab].name}</h2>
            <p className="text-black-l-200 mb-6">
              {industriesData[activeTab].description}
            </p>

            <div className="grid grid-cols-3 grid-rows-2 gap-6">
              {industriesData[activeTab].images.map((image, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "col-span-3 sm:col-span-2 row-span-1 sm:row-span-2"
                      : index === 1
                      ? "col-span-3 sm:col-start-3 row-span-1 sm:row-start-1"
                      : "col-span-3 sm:col-start-3 row-span-1 sm:row-start-2"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Industry ${industriesData[activeTab].name} Image ${
                      index + 1
                    }`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
