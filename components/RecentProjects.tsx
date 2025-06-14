/* eslint-disable @next/next/no-img-element */

import { FaLocationArrow } from 'react-icons/fa'

import { projectsBackEnd, projectsFrontEnd } from '@/data'
import { PinContainer } from './ui/3d-pin'

export const RecentProjects = () => {
  return (
    <div className="pb-40 pt-40" id="projects">
      <h1 className="heading">
        <span className="text-white">Galeria dos</span>{' '}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Projetos Recentes
        </span>
      </h1>

      <div className="mt-10 flex flex-col items-center justify-center">
        <h3 className="heading text-center text-xs tracking-widest text-blue-200">
          Front-end
        </h3>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4 lg:gap-y-20">
          {projectsFrontEnd.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="sm-[41rem] flex h-[32rem] w-[80vw] items-center justify-center sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] lg:h-[32vh]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <img src={'/web-portifolio.png'} alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10 h-full w-full object-cover"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold text-white md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light text-neutral-400 lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="mr-2 flex flex-row items-center justify-center">
                    <p className="flex text-sm text-purple md:text-xs lg:text-xl">
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

      <div className="mt-16 flex flex-col items-center justify-center">
        <h2 className="heading text-center text-xl tracking-widest text-blue-200 lg:max-w-[45vw]">
          Back-end
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
          {projectsBackEnd.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="sm-[41rem] flex h-[32rem] w-[80vw] items-center justify-center sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative mb-10 flex h-[30vh] w-[80vw] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[570px] lg:h-[32vh]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <img src={'/web-portifolio.png'} alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="absolute bottom-0 z-10 h-full w-full object-cover"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold text-white md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light text-neutral-400 lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        key={index}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="mr-2 flex flex-row items-center justify-center">
                    <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                      Link do Repositório
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
