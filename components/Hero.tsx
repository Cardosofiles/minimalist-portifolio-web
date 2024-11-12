import { FaMailBulk } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full bg-black-100
      dark:bg-grid-white/[0.06] bg-grid-white/[0.06] flex items-center justify-center absolute top-0 left-0"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-200 max-w-80">
            Projeto Dinâmico, Criado com a Magia do Next.js, Aceternity e Shadcn
            UI
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5x6 lg:text-6xl"
            words="Transformando a Experiência do Usuário com Conceitos Modernos"
          />

          <p className="text-center tracking-widest md:tracking-wider mb-4 text-lg md:text-lg lg:text-lg text-white">
            Futuro Desenvolvedor Full Stack
          </p>

          <a
            href="https://drive.google.com/file/d/1aj_XbspfI5ay13GbbHyZf0wbRSQh2yeK/view?usp=sharing"
            target="_blank"
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
  );
};

export default Hero;
