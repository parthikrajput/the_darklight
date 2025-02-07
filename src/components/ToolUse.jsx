import React from "react";

const ToolUse = ({ title, desc, tools }) => {
  return (
    <section className="xl:py-20 lg:py-16 sm:py-14 py-10">
      <div className="container">
        <div className="flex items-stretch gap-10 flex-wrap">
          <div className="w-full xlg:w-[calc(45%-20px)] space-y-5">
            <h2>{title}</h2>
            <p className="text-black-l-200">{desc}</p>
          </div>
          <div className="flex flex-wrap xlg:justify-end border-l-0 xlg:border-t-0 border-t-2 xlg:pt-0 pt-5 xlg:border-l-2 border-black-l-200 border-solid gap-14 w-full xlg:w-[calc(55%-20px)]">
            {tools.map((tool, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-lg font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolUse;
