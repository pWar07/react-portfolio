import React from "react";
import sncs from "../assets/images/sncs.png";
import git from "../assets/images/git.jpg";
import { CiCalendar } from "react-icons/ci";

const Edu = [
  {
    id: 1,
    img: git,
    title: "Gandhinagar Institute of Technology, Gandhinagar",
    stream: "Information Technology",
    duration: "August 2020 - May 2024",
    cal: CiCalendar,
    cgpa: "8.50",
  },
  {
    id: 2,
    img: sncs,
    title: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(XII), Science with Computer",
    duration: "May 2019 - May 2020",
    cal: CiCalendar,
    cgpa: "8.00",
  },
  {
    id: 3,
    img: sncs,
    title: "Shree Narayana Central School, Ahmedabad",
    stream: "CBSE(X), Science with Computer",
    duration: "May 2017 - May 2018",
    cal: CiCalendar,
    cgpa: "9.21",
  },
];

export const Education = () => {
  return (
    <div className="w-full py-10 lg:py-20 lg:pb-0 rounded-tl-3xl rounded-tr-3xl bg-[#F1F1F1]">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-5 lg:pb-10 border-zinc-500 font-['neue']">
        <h1 className="px-10 lg:px-[200px] text-3xl lg:text-6xl tracking-tight">
          Education
        </h1>
      </div>
      <div className="timeline relative max-w-[1200px] my-[50px] lg:my-[100px] mx-auto lg:px-0">
        {Edu.map((v, i) => {
          let Calend = v.cal;
          return (
            // ${i % 2 === 0 ? "hover:-ml-[200px]" : "hover:-mr-[200px]"}
            <div
              className={`contain px-[50px] py-[10px] relative w-1/2 ${i % 2 === 0 ? "lg:left-0" : "lg:left-1/2"}`}
            >
              <img
                className={`absolute h-[30px] w-[30px] lg:h-[55px] lg:w-[55px] object-scale-down lg:top-[32px] top-[44px] rounded-xl z-10 ${i % 2 === 0 ? "-right-[28px]" : "-left-[28px]"}`}
                src={v.img}
                alt=""
              />
              <div className="textBox mr-7 bg-[#E6E3E6] relative lg:px-[30px] px-[15px] py-[10px] lg:py-[20px] rounded-xl text-lg">
                <h2 className="text-lg mb-1 lg:text-xl leading-6 font-['neue']">{v.title}</h2>
                <h2 className="lg:text-sm text-zinc-700">{v.stream}</h2>
                <small className="flex -mt-1 lg:mt-0 gap-1 items-center text-xs lg:text-sm text-zinc-700"><Calend/>{v.duration}</small>
                <p className="lg:mb-1 -mb-2 ">{v.description}</p>
                <small className="lg:text-base text-[13px]">CGPA: {v.cgpa}</small>
                <span
                  className={`${i % 2 === 0 ? "leftArrow" : "rightArrow"}`}
                ></span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
