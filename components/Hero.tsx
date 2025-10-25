import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import avatar from "../public/avatar.jpg";

const Hero = () => {
  
  return (
    <section id="hero" className="sroll-mt-24">
    <div className="pb-20 pt-36 relative">
      {/* Spotlights */}
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

      {/* Background Grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-center">

          {/* Profile Picture */}
          <div className="mb-6">
            <Image
              src={avatar}
              alt="Vempali Hrishita"
              width={260}
              height={260}
              className="rounded-full border-4 border-purple-500 shadow-lg"
              priority
            />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-3xl font-bold mb-2">
            Hey! 
          </h1>

          {/* Subtitle */}
          <TextGenerateEffect
            words="I'm Vempali Hrishita"
            className="text-lg md:text-5xl text-blue-200 mb-6"
          />

          {/* Small About */}
          <p className="text-sm md:text-lg text-gray-300 mb-6">
             I love exploring artificial intelligence, building machine learning models, and applying data-driven solutions to real-world problems. Alongside AI, I enjoy creating responsive web applications using HTML, CSS, JavaScript, and React. I’m continuously exploring new technologies and developing projects to improve my skills.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 text-2xl text-blue-300">
            <a href="https://github.com/VHrishita" target="_blank">
              <FaGithub className="hover:text-white transition" />
            </a>
            <a href="https://www.linkedin.com/in/vempali-hrishita/" target="_blank">
              <FaLinkedin className="hover:text-white transition" />
            </a>
            <a href="mailto:vempalihrishita05@example.com">
              <FaEnvelope className="hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
