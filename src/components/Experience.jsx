import skytech from "../assets/images/skytech.jpeg";
import waytoweb from "../assets/images/waytoweb.png";
import { CiCalendar } from "react-icons/ci";

const Data = [
  {
    id: 1,
    img: skytech,
    title: "Skytech",
    duration: "January'24 - Present",
    cal: CiCalendar,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe alias numquam esse deserunt quo quas dolor quos vero error?",
  },
  {
    id: 2,
    img: waytoweb,
    title: "Way to Web",
    duration: "November'23 - January'24",
    cal: CiCalendar,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe alias numquam esse deserunt quo quas dolor quos vero error?",
  },
];

export const Experience = () => {
  return (
    <div className="w-full py-10 lg:pt-20 rounded-3xl">
      <div className="w-full flex justify-center capitalize border-b-[1px] pb-5 lg:pb-10 border-zinc-500 font-['neue']">
        <h1 className="px-10 lg:px-[200px] text-3xl lg:text-6xl tracking-tight">
          Experience
        </h1>
      </div>
      <div className="timeline relative max-w-[1200px] my-[50px] lg:my-[100px] mx-auto lg:px-0">
        {Data.map((v, i) => {
          let Calend = v.cal;
          return (
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
                <small className="flex lg:mt-0 gap-1 items-center lg:mb-1 text-xs lg:text-sm text-zinc-700"><Calend/>{v.duration}</small>
                <p className="lg:mb-1 leading-6 lg:leading-7">{v.description}</p>
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
