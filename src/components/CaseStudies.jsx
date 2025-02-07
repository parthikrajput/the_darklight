import React, { useState } from "react";
import real_estate from "../img/real estate.png";
import medial_health from "../img/Medical & Health Care.png";
import fitness from "../img/fitness.png";
import media_entertainment from "../img/Media & Entertainment.png";
import e_commerce from "../img/E-Commerce.png";
import sports_gamers from "../img/Sports & Gamers.png";
import banking_finance from "../img/Banking & Finance.png";
import social_networking from "../img/Social Networking.png";
const tabs = [
  {
    id: 1,
    title: "Real Estate",
    image: real_estate,
    content:
      "We provide digital solutions for real estate businesses, helping them grow online.",
    contact: [
      "Property Listing Platform",
      "Virtual Tour Integration",
      "Real Estate CRM Solutions",
      "Lead Management Systems",
    ],
  },
  {
    id: 2,
    title: "Medical & Health Care",
    image: medial_health,
    content:
      "Innovative healthcare solutions for patient management, telemedicine, and more.",
    contact: [
      "Telemedicine Apps",
      "Patient Record Management",
      "Doctor Appointment Systems",
      "Healthcare CRM Solutions",
    ],
  },
  {
    id: 3,
    title: "Fitness & Wellness",
    image: fitness,
    content:
      "Helping fitness businesses connect with their customers through digital platforms.",
    contact: [
      "Workout & Training Apps",
      "Nutrition & Diet Planning",
      "Gym Management Software",
      "Fitness Wearable Integration",
    ],
  },
  {
    id: 4,
    title: "Media & Entertainment",
    image: media_entertainment,
    content:
      "Creating engaging digital experiences for media, movies, and entertainment industries.",
    contact: [
      "Video Streaming Platforms",
      "Podcast & Audio Streaming",
      "Live Event Streaming",
      "Content Management Systems",
    ],
  },
  {
    id: 5,
    title: "E-Commerce",
    image: e_commerce,
    content:
      "Building scalable and secure e-commerce solutions to boost online sales.",
    contact: [
      "Custom E-Commerce Platforms",
      "Payment Gateway Integration",
      "Multi-Vendor Marketplaces",
      "Inventory & Order Management",
    ],
  },
  {
    id: 6,
    title: "Sports & Gamers",
    image: sports_gamers,
    content:
      "Providing interactive platforms and digital tools for sports and gaming enthusiasts.",
    contact: [
      "Sports Streaming Apps",
      "Fantasy Sports Platforms",
      "eSports Tournament Management",
      "Game Development Solutions",
    ],
  },
  {
    id: 7,
    title: "Banking & Finance",
    image: banking_finance,
    content:
      "Secure financial technology solutions for banking, lending, and payments.",
    contact: [
      "Mobile Banking Apps",
      "FinTech Solutions",
      "Loan & Credit Management",
      "Cryptocurrency Platforms",
    ],
  },
  {
    id: 8,
    title: "Social Networking",
    image: social_networking,
    content:
      "Developing platforms that connect people and enhance social interactions online.",
    contact: [
      "Social Media Apps",
      "Dating Platforms",
      "Community & Forum Apps",
      "Photo & Video Sharing Apps",
    ],
  },
];

const CaseStudies = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10 relative">
      <div className="container">
        <div className="md:w-[calc(60%-20px)]">
          <h2 className="mb-6 text-white">Our Case studies</h2>

          <div className="flex flex-nowrap overflow-x-auto md:flex-wrap gap-4 mb-6 scrollbar-custom">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-p whitespace-nowrap px-4 py-2 cursor-pointer rounded-lg border-2 border-solid transition-all md:mb-0 mb-3 duration-300 ${
                  activeTab === tab.id
                    ? "text-white border-blue-l-900 bg-blue-l-900"
                    : "text-black-l-300 border-black-l-300"
                }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
        </div>

        <div className=" text-p flex flex-wrap md:flex-row flex-col-reverse items-stretch gap-5 md:gap-10 bg-blue-l-900 py-6 px-10 rounded-lg relative md:mt-20">
          <div className="space-y-4 w-full md:w-[calc(60%-20px)]">
            <p className="text-lg mb-4">
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </p>

            <ul className="list-disc text-left pl-6 space-y-2">
              {tabs
                .find((tab) => tab.id === activeTab)
                ?.contact.map((item, index) => (
                  <li key={index} className="text-lg font-medium">
                    {item}
                  </li>
                ))}
            </ul>
          </div>
          <div className="w-full md:w-[calc(40%-20px)] md:absolute right-0 bottom-0">
            <img
              src={tabs.find((tab) => tab.id === activeTab)?.image}
              alt={tabs.find((tab) => tab.id === activeTab)?.title}
              className="w-full sm:h-[550px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
