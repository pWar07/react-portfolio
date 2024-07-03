import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export const Github = ({ value }) => {
  return (
    <a target="_blank" href={value} className="cursor-pointer button2 relative overflow-hidden px-[9px] border-[1px] border-zinc-700 lg:px-4 py-[5px] lg:py-2 border-1 border-zin bg-transparent text-zinc-900 rounded-full font-light text-xs uppercase tracking-widest">
      <div className="text-base">
        <FaGithub />
      </div>
    </a>
  );
};
