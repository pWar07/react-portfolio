import React from "react";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./components/LandingPage";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Eyes } from "./Eyes";
import { Projects } from "./components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <LandingPage />
      {/* <Trial/> */}
      <About />
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </div>
  );
};

export default App;
