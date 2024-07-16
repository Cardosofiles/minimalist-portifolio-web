import { workExperience } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/MovingBorders";

const Certificates = () => {
  return (
    <div className="pt-40 pb-40">
      <h1 className="heading" id="knowledge">
        Meus{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Certificados
        </span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Link
            key={card.id}
            href={card.link}
            target="_blank"
            about="certificados"
            className="lg:col-span-2"
          >
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800 h-[180px]"
            >
              <div
                className="flex max-sm:p-5 max-sm:flex-row max-md:w-full max-sm:w-auto lg:flex-row 
              lg:items-center lg:p-10 md:flex-row md:justify-center md:gap-x-4 md:p-5 md:w-full flex-col p-3 py-6 gap-2"
              >
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold ">
                    {card.desc}
                  </p>
                  <p className="flex items-center lg:text-sm md:text-xs text-xs text-purple mt-3">
                    Verifique o Link
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </p>
                </div>
              </div>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
