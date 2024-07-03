import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import prof from "../assets/images/profile1.jpg";
import cover from "../assets/images/cover.png";
import { Button1 } from "./button/Button1";

export const Social = [
  {
    id: 1,
    icon: FaGithub,
    name: "Github",
    linkTo: "https://github.com/pWar07",
  },
  {
    id: 2,
    icon: FaLinkedin,
    name: "LinkedIn",
    linkTo: "https://www.linkedin.com/in/pwar07/",
  },
];

const Trial = () => {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] pt-1">
      <div className="textStr pt-24 lg:pt-40 px-10 lg:px-[200px] block lg:flex">
        <div className="text-content lg:mr-32 relative z-10 mb-7">
          {["Pranav Pawar", "I am a", "Web Developer"].map((v, i) => {
            return (
              <div className="masker font-['founder'] overflow-hidden" key={i}>
                <div className="w-fit flex">
                  {i === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100px" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="h-[46px] mr-4 rounded-md relative bg-cover bg-center lg:h-[6vw] lg:w-[8vw]"
                      style={{ backgroundImage: `url(${cover})` }}
                    ></motion.div>
                  )}
                  <h1 className="capitalize leading-[38px] mb-[13px] tracking-tight text-[73px] lg:text-[9.5vw] lg:mb-7 lg:leading-[5vw]">
                    {v}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="profile-image flex items-center justify-center lg:justify-between lg:block lg:w-1/3">
          <img
            src={prof}
            alt="Profile"
            className="w-[250px] h-[250px] object-cover rounded-full lg:w-[300px] lg:h-[320px]"
          />
        </div>
      </div>
      <div className="mt-10 lg:mt-20 flex gap-4 lg:gap-10 lg:py-5 lg:px-[200px] justify-center items-center lg:justify-start">
        {Social.map((v) => {
          const Icon = v.icon;
          return (
            <a
              key={v.id}
              href={v.linkTo}
              className="flex items-center space-x-1 lg:space-x-2 font-['neue'] justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon />
              <span>{v.name}</span>
            </a>
          );
        })}
        <div className="start flex items-center gap-2">
          <Button1 className="btn1" value="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Trial;
