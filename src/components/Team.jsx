import React from "react";
import { Link } from "react-router-dom";
import team1 from "../img/team1.jpg";
import team2 from "../img/team2.jpg";
const team = [
  {
    id: 1,
    image: team1,
    name: "John Doe",
    position: "Senior Web Developer",
  },
  {
    id: 2,
    image: team2,
    name: "Jane Smith",
    position: "Lead UI/UX Designer",
  },
  {
    id: 3,
    image: team1,
    name: "Michael Brown",
    position: "Mobile App Developer",
  },
  {
    id: 4,
    image: team2,
    name: "Sarah Lee",
    position: "Project Manager",
  },
];
const Team = ({
  tagline = "Default Tagline",
  tag_layout = "left",
  title = "Default Title",
  description = "Default description.",
  buttonText = "See All Teams",
  buttonLink = "/team",
  layout = "full",
  limit,
  showFullDescription = false,
}) => {
  const displayedTeams = limit ? team.slice(0, limit) : team;

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

        <div className="grid grid-cols-1 sm:grid-cols-2 xlg:grid-cols-4 gap-6 mt-10">
          {displayedTeams.map((team) => (
            <div
              key={team.id}
              className="team-member shadow-md relative group transition-all duration-500 ease-linear overflow-hidden w-full"
            >
              <img
                src={team.image}
                alt={team.name}
                className="w-full min-h-[250px] object-cover"
              />
              <div className=" text-center space-y-2 absolute w-full py-3 px-1 bg-blue-l-300 bottom-[-100px] group-hover:bottom-0 transition-all duration-500 ease-linear">
                <h3 className="text-h6">{team.name}</h3>
                <p className="text-black-l-100 font-medium tracking-wider">
                  {team.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
