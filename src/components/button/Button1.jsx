import "./button1.css";
import { GoArrowUpRight } from "react-icons/go";

export const Button1 = ({ value }) => {
  return (
    <div className="button1 relative overflow-hidden px-5 py-2 border border-zinc-500 rounded-full font-light text-md uppercase cursor-pointer tracking-widest">
      <h4 className="flex items-center gap-2">
        {value} <GoArrowUpRight className="rotate" />
      </h4>
    </div>
  );
};