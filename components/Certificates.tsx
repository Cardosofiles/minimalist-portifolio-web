import { workExperience } from "@/data";
import Link from "next/link";
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
            href={card.link}
            target="_blank"
            about="certificados"
            className="lg:col-span-2"
          >
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000 + 10000)}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-800 h-[180px] "
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5 ">
                  <h1 className="text-start text-xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold ">
                    {card.desc}
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
