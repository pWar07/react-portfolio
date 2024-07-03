import { motion, useAnimation } from "framer-motion";
import travel from "../assets/images/travel.png";
import urban from "../assets/images/urbansole.png";
import { useState } from "react";
import { Button2 } from "./button/Button2";
import { Github } from "./button/GithubBtn";

export const Projects = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (i) => {
    cards[i].start({ y: "0" });
  };

  const handleHoverEnd = (i) => {
    cards[i].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 pb-20 lg:py-20 rounded-tl-3xl rounded-tr-3xl bg-[#F1F1F1]">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-5 lg:pb-10 border-zinc-500 font-['neue']">
        <h1 className="px-10 lg:px-[200px] text-3xl lg:text-6xl tracking-tight">
          My Works
        </h1>
      </div>
      <div className="px-10 lg:px-[200px]">
        <div className="cards flex-col lg:flex-row flex gap-20 lg:gap-10 w-full mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardCont relative w-full lg:w-1/2 h-52 lg:h-[75vh]"
          >
            <h1 className="absolute lg:overflow-hidden flex lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:right-0 text-[#CDEA68] z-[9] text-6xl top-3 left-5 lg:text-8xl leading-none tracking-tight font-['founder']">
              {"TRAVELO'PEDIA".split("").map((v, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="inline-block"
                >
                  {v}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full overflow-hidden rounded-xl"
              whileHover={{ scale: 0.95 }}
            >
              <img
                className="w-full h-full object-cover"
                src={travel}
                alt="travelopedia"
              />
            </motion.div>
            <div className="techUsed font-['neue'] w-full mt-3 justify-between flex">
              <div className="flex gap-1 lg:gap-2">
                <Button2 value="html/css" />
                <Button2 value="js" />
                <Button2 value="bootstrap" />
              </div>
              <Github value="https://pwar07.github.io/travelopedia-updated/" />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardCont relative w-full lg:w-1/2 h-52 lg:h-[75vh]"
          >
            <h1 className="absolute text-6xl top-3 lg:translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 flex lg:overflow-hidden lg:right-full right-12 text-[#CDEA68] z-[9] lg:text-8xl leading-none tracking-tight font-['founder']">
              {"URBANSOLE".split("").map((v, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="inline-block"
                >
                  {v}
                </motion.span>
              ))}
            </h1>
            <motion.div
              className="card w-full h-full overflow-hidden rounded-xl"
              whileHover={{ scale: 0.95 }} // Add hover effect for the image
            >
              <img
                className="w-full h-full object-cover"
                src={urban}
                alt="urban"
              />
            </motion.div>
            <div className="techUsed font-['neue'] w-full mt-3 justify-between flex">
              <div className="flex gap-1 lg:gap-2">
                <Button2 value="react" />
                <Button2 value="gsap" />
              </div>
              <Github value="https://urban-sole.vercel.app/" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
