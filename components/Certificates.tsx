import { workExperience } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { Button } from "./ui/MovingBorders";

const Certificates = () => {
  return (
    <div className="pt-40 pb-40 w-full">
      <h1 className="heading" id="knowledge">
        Meus{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple bg-clip-text text-transparent">
          Certificados
        </span>
      </h1>

      <div className="mt-12 gap-10 grid grid-cols-1 lg:grid-cols-4 max-md:grid-cols-1">
        {workExperience.map((card) => (
          <Link
            key={card.id}
            href={card.link}
            target="_blank"
            about="certificados"
            className="grid lg:col-span-2 w-full"
          >
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              borderRadius="1.75rem"
              className="text-white border-neutral-200 dark:border-slate-800 h-[180px] p-5"
            >
              <div className="flex items-center justify-center gap-4 max-sm:gap-5">
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
