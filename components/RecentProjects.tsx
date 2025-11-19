"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section className="py-20 w-full" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">My Projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.site || item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-semibold lg:text-xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base md:text-sm text-xs font-light line-clamp-2"
                style={{ color: "#BEC1DD", margin: "0.6vh 0" }}
              >
                {item.des}
              </p>

              <p className="text-[12px] md:text-sm text-gray-400 italic mb-1">
                {item.year} • {item.organization}
              </p>
              <p className="text-[12px] md:text-sm text-gray-300 mb-2">
                Role: <span className="text-purple">{item.role}</span>
              </p>

              <div className="flex items-center justify-between mt-6 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-8 lg:h-8 w-7 h-7 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-1.5" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1 text-right">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-end lg:text-base md:text-sm text-xs text-purple hover:underline"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    GitHub <FaLocationArrow className="ms-2" color="#CBACF9" size={14} />
                  </a>

                  {item.site && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-end lg:text-base md:text-sm text-xs text-green-400 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Site <FaLocationArrow className="ms-2" color="#86efac" size={14} />
                    </a>
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
