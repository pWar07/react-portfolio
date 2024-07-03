import React from "react";
import { motion } from "framer-motion";
import prof from "../assets/images/profile1.jpg";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";

export const skills = [
  {
    id: 1,
    icon: FaReact,
    name: "React",
  },
  {
    id: 2,
    icon: IoLogoJavascript,
    name: "Javascript",
  },
  {
    id: 3,
    icon: FaHtml5,
    name: "HTML",
  },
  {
    id: 4,
    icon: FaCss3Alt,
    name: "CSS",
  },
  {
    id: 5,
    icon: RiTailwindCssFill,
    name: "Tailwind",
  },
  {
    id: 6,
    icon: FaBootstrap,
    name: "Bootstrap",
  },
];

export const About = () => {
  const image = {
    src: prof,
    initialRotation: "0deg",
  };

  return (
    // bg-[#95D2B3]
    <div className="w-full py-20 rounded-3xl">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-10 border-zinc-500 font-['neue']">
        <h1 className="px-[200px] text-6xl tracking-tight">About Me</h1>
      </div>
      <div className="">
        <div className="container flex w-full mt-10 px-60">
          <div className="left w-1/2 h-full relative">
            <motion.img
              src={image.src}
              alt="Image"
              className="right-20 top-10 w-[20em] h-[20em] object-cover rounded-full"
            />
          </div>
          <div className="right w-1/2 flex flex-col items-center font-['neue'] text-inherit justify-center">
            <p className="text-xl font-['neue'] mb-10">
              Hello! I'm Pranav Pawar, a passionate web developer with a love
              for creating elegant and efficient solutions. My journey in this
              field began 2 years ago, and since then, I've had the privilege of
              working on a variety of exciting projects that have helped me grow
              and refine my skills. <br /> <br /> I specialize in front-end
              development, user experience design, and I'm always eager to learn
              new technologies and improve my craft. My approach to work is
              rooted in a strong belief in the importance of clean, maintainable
              code and a keen eye for design.
            </p>
          </div>
        </div>
        <div className="skills flex-col w-full mt-20 flex justify-center items-center">
          <h1 className="text-4xl mb-10 font-['neue']">Technologies</h1>
          <div className="skillCont min-h-[110px] flex justify-center items-center gap-10">
            {skills.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.id}
                  className="flex border-[1px] border-gray-900 p-3 rounded-xl flex-col items-center min-w-[110px] min-h-[100px] font-['neue'] text-lg cursor-pointer justify-center transition-all ease-linear duration-1000 group"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-4xl" />
                  <span className="hidden group-hover:block">{v.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
