import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Social } from "../components/LandingPage";
import { Eyes } from "../Eyes";

export const Footer = () => {
  return (
    <div className="w-full px-10 lg:px-[200px] py-10 border-t-[1px] lg:border-t-0 lg:border-zinc-500">
      <div className="lg:block hidden lg:mb-7">
        <Eyes />
      </div>
      <div className="cont flex justify-between items-center font-['neue']">
        <div className="text">Copyright © Pranav Pawar</div>
        <div className="social flex text-lg gap-8 items-center">
          {Social.map((v, i) => {
            const Icon = v.icon;
            return (
              <a href={v.linkTo} target="_blank" className="cursor-pointer">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
