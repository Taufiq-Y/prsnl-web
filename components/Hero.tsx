import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
import { FlipWords } from "./ui/FlipWords";
import { AnimatedModalDemo } from "./ui/AnimatedModaldata";
import profileImg from "../public/profie.png"
import {Image} from "@nextui-org/image";
import image from "next/image";

const Hero = () => {
  const words = ["Full Stack Developer", "AWS Architect", "Trainer", "Software Engineer"];
  
  return (
    <div className="pb-20 pt-36">
      {/* UI: Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* UI: grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Taufiq,<FlipWords words={words} duration={3000}/> based in Chennai.
          </p>
          {/* <div className="flex-shrink-0 pl-300px"> */}
          <Image
      isZoomed
      width={240}
      src={profileImg.src}
      alt="NextUI Album Cover"
    />

    {/* </div> */}
          {/* Flex container for buttons with 2-inch gap */}
          <div className="flex items-center gap-8">
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                className="flex-shrink-0"
              />
            </a>
            <span className="flex-shrink-0">
              <AnimatedModalDemo />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;