"use client";

import { FaLocationArrow } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

export const RecentProjects = () => {
  return (
    <div className="pt-40 pb-40" id="projects">
      <h1 className="heading">
        <span className="text-white">Galeria dos</span>{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Projetos Recentes
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" sm-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center 
          justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div
                className="relative flex items-center justify-center sm:w-[570px] 
              w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] lg:h-[32vh] mb-10"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d] ">
                  <img src={"/web-portifolio.png"} alt="bg-img" />
                </div>
                <img
                  src={img}
                  alt={title}
                  className="z-10 w-full h-full object-cover absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-neutral-400">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 
                      lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-row items-center justify-center mr-2">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Verifique o Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
