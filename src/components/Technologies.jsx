import React, { useState } from "react";
import js from "../img/javascript.png";
import react from "../img/react.png";
const tabs = [
  {
    id: "front-end",
    title: "Front-End Development",
    items: [
      { name: "JavaScript", img: js },
      { name: "React.JS", img: react },
      { name: "Next.JS", img: "../img/nextjs.png" },
      { name: "Jquery", img: "../img/jquery.png" },
      { name: "Bootstrap", img: "../img/bootstrap.png" },
      { name: "WebFlow", img: "../img/webflow.png" },
      { name: "Angular.JS", img: "../img/angular.png" },
      { name: "PWA", img: "../img/pwa.png" },
      { name: "CMS", img: "../img/cms.png" },
      { name: "Scss", img: "../img/scss.png" },
      { name: "Html", img: "../img/html.png" },
      { name: "Tailwind Css", img: "../img/tailwind.png" },
      { name: "Material UI", img: "../img/materialui.png" },
      { name: "Css3", img: "../img/css3.png" },
    ],
  },
  {
    id: "back-end",
    title: "Back-End Solutions",
    items: [
      { name: "JavaScript", img: js },
      { name: "Node.js", img: "../img/nodejs.png" },
      { name: "MongoDB", img: "../img/mongodb.png" },
      { name: "Firebase", img: "../img/firebase.png" },
      { name: "Express", img: "../img/express.png" },
      { name: "MySQL", img: "../img/mysql.png" },
      { name: "NestJS", img: "../img/nestjs.png" },
      { name: "Postman", img: "../img/postman.png" },
    ],
  },
  {
    id: "ios",
    title: "IOS Development",
    items: [
      { name: "XCode", img: "../img/xcode.png" },
      { name: "Swift", img: "../img/swift.png" },
      { name: "Objective-C", img: "../img/objectivec.png" },
      { name: "Visual Studio", img: "../img/visualstudio.png" },
      { name: "React Native", img: "../img/reactnative.png" },
      { name: "Xamarin", img: "../img/xamarin.png" },
      { name: "Flutter", img: "../img/flutter.png" },
      { name: "UI Kit", img: "../img/uikit.png" },
      { name: "Shift UI", img: "../img/shiftui.png" },
    ],
  },
  {
    id: "android",
    title: "Android Development",
    items: [
      { name: "Native Android", img: "../img/android.png" },
      { name: "React Native", img: "../img/reactnative.png" },
      { name: "Xamarin", img: "../img/xamarin.png" },
      { name: "Java", img: "../img/java.png" },
      { name: "Flutter", img: "../img/flutter.png" },
      { name: "Kotlin", img: "../img/kotlin.png" },
      { name: "C++", img: "../img/cplusplus.png" },
      { name: "C#", img: "../img/csharp.png" },
    ],
  },
  {
    id: "cms",
    title: "CMS",
    items: [
      { name: "WordPress", img: "../img/wordpress.png" },
      { name: "Codeigniter", img: "../img/codeigniter.png" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    items: [
      { name: "Terraform", img: "../img/terraform.png" },
      { name: "CI-CD", img: "../img/cicd.png" },
      { name: "AWS", img: "../img/aws.png" },
      { name: "Jenkins", img: "../img/jenkins.png" },
      { name: "Kubernetes", img: "../img/kubernetes.png" },
      { name: "Docker", img: "../img/docker.png" },
    ],
  },
  {
    id: "project-management",
    title: "Project Management",
    items: [
      { name: "Microsoft Team", img: "../img/microsoftteam.png" },
      { name: "Jira", img: "../img/jira.png" },
      { name: "Asana", img: "../img/asana.png" },
      { name: "Slack", img: "../img/slack.png" },
      { name: "ClickUp", img: "../img/clickup.png" },
      { name: "Trello", img: "../img/trello.png" },
      { name: "Monday.com", img: "../img/monday.png" },
      { name: "Pivotal", img: "../img/pivotal.png" },
    ],
  },
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <section className="xl:py-20 lg:py-16 sm:py-14 py-10 bg-blue-l-900">
        <div className="container">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="tagline flex items-center gap-2 justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
                <p className="text-a uppercase font-medium tracking-wide text-blue-l-200">
                  Harnessing the Best Tools and Platforms to Drive Innovation
                </p>
                <span className="w-2 h-2 rounded-full bg-blue-l-300 flex-none"></span>
              </div>
              <div className="flex items-start gap-6 xl:gap-5 flex-wrap">
                <div className="space-y-5">
                  <h2>
                    Empowering Your Business with Cutting-Edge Technologies
                  </h2>
                  <div className="text space-y-3 text-black-l-200">
                    <p>
                      At TheDarkLight, we leverage the latest technologies and
                      platforms to create high-performance, scalable, and secure
                      digital solutions. Our expertise spans across various
                      industries, providing businesses with robust tools that
                      drive efficiency and growth. From front-end development to
                      back-end solutions, mobile applications, cloud computing,
                      and project management, we combine the best of technology
                      and creativity to bring your vision to life.
                    </p>
                    <p>
                      Explore the technologies and platforms we specialize in:
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="flex gap-4 overflow-auto pb-4 border-b scrollbar-custom border-gray-300">
                {tabs.map((tab) => (
                  <div
                    key={tab.id}
                    className={`px-3 py-2 tracking-wider rounded-lg text-p font-semibold flex items-center gap-2 transition-colors duration-300 cursor-pointer whitespace-nowrap  ${
                      activeTab === tab.id ? " text-white" : " text-black-l-400"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.title}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <ul
                        key={tab.id}
                        className="grid grid-cols-1 xxsm:grid-cols-2 sm:grid-cols-3 xmd:grid-cols-4 xl:grid-cols-5 gap-6"
                      >
                        {tab.items.map((item, index) => (
                          <li
                            key={index}
                            className="text-p text-black-l-200 flex-col flex items-center gap-3 text-center"
                          >
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-12 h-12"
                            />{" "}
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
