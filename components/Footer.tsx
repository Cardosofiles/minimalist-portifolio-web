import { socialMedia } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-40  pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="footer-img"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="tracking-widest text-xl text-center text-blue-200 heading lg:max-w-[45vw] ">
          Pronto para levar seus{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
            Websites
          </span>{" "}
          ao proximo nível?
        </h1>
        <p className="text-white-100 md:mt-10 my-5 text-center">
          Entre em contato comigo, vamos trabalhar juntos para alcançar o
          sucesso.
        </p>

        <a
          className="flex items-center justify-center"
          href="mailto:contatojoaomirana@outlook.com"
        >
          <MagicButton
            title="Contact-me"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="flex items-center"
          />
        </a>
      </div>

      <div className="flex mt-16 md:mb-5 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              href={info.link}
              target="_black"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
        <p className="md:text-base text-sm md:mt-4 md:font-normal font-light">
          Copyright © 2024 João Batista
        </p>
      </div>
    </footer>
  );
};

export default Footer;
