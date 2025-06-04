import { FaMailBulk } from 'react-icons/fa'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100 bg-grid-white/[0.06] dark:bg-grid-white/[0.06]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-200">
            Projeto Dinâmico, Criado com a Magia do Next.js, Aceternity e Shadcn
            UI
          </h2>

          <TextGenerateEffect
            className="md:text-5x6 text-center text-[40px] lg:text-6xl"
            words="Transformando a Experiência do Usuário com Conceitos Modernos"
          />

          <p className="mb-4 text-center text-lg tracking-widest text-white md:text-lg md:tracking-wider lg:text-lg">
            Desenvolvedor Full Stack
          </p>

          {/* <div className="flex gap-5">
            <img src="/tail.svg" alt="" className="h-12 w-12" />
            <img src="/ts.svg" alt="" className="h-10 w-10" />
            <img src="/re.svg" alt="" className="h-10 w-10" />
            <img src="/next.svg" alt="" className="h-10 w-10" />
            <img src="/node-js.png" alt="" className="h-10 w-10" />
            <img src="bun.svg" alt="" className="h-11 w-11" />
            <img src="/dock.svg" alt="" className="h-10 w-10" />
            <img src="/postgresql.svg" alt="" className="h-10 w-10" />
            <img src="/git.svg" alt="" className="h-10 w-10" />
            <img src="/gitHub.svg" alt="" className="h-10 w-10" />
            <img src="/postman.svg" alt="" className="h-11 w-11" />
          </div> */}

          <a
            href="https://drive.google.com/file/d/1EwdAdUczqlKzA_lNizax58Dpkby_QyvG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <MagicButton
              title="Download CV"
              icon={<FaMailBulk />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
