"use client";

import animationData from "@/data/confetti.json";
import { cn } from "@/utils/cn";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import GridGlobe from "./GridGlobe";
import MagicButton from "./MagicButton";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

interface BentoGridItemsProps {
  id?: number;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  title?: string | React.ReactNode;
  titleClassName?: string;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem: React.FC<BentoGridItemsProps> = ({
  id,
  description,
  className,
  img,
  imgClassName,
  spareImg,
  title,
  titleClassName,
}) => {
  const [copied, setCopied] = useState(false);

  const leftList = ["TypeScript", "React.JS", "Next.js"];
  const rightList = ["Python", "MongoDB", "VS Code"];

  const handleCopy = () => {
    const text = "cardosofiles@outlook.com";
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={cn(
        className,
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl",
        "transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 50%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div
              className="absolute z-50 inset-0 flex items-center justify-center text-white
                font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"
            ></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full",
            "min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className="font-sans font-extralight md:max-w-32 md:text-xs lg:max-w-40 
            lg:text-base text-sm text-[#C1C2D3] z-10"
          >
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 ">
              <div className="flex flex-col gap-3 lg:gap-8">
                {leftList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132e] " />
              </div>

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightList.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"} `}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Copiado!" : "Copiar E-mail"}
                icon={<IoCopyOutline />}
                position="left"
                handleclick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
