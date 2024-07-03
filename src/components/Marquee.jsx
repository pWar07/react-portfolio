import { motion } from "framer-motion";
import React from "react";

export const Marquee = () => {
  return (
    <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]">
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className='text-[10vw] leading-none pr-20 font-["founder"] font-semibold uppercase text-zinc-50 -mt-[2vw]'
        >
          ReactJS • HTML • CSS • JavaScript • Bootstrap • TailwindCSS
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className='text-[10vw] leading-none pr-20 font-["founder"] font-semibold uppercase text-zinc-50 -mt-[2vw]'
        >
          ReactJS • HTML • CSS • JavaScript • Bootstrap • TailwindCSS
        </motion.h1>
      </div>
    </div>
  );
};
