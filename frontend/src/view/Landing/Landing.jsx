import React from "react";
import Sidebar from "../../componentes/Sidebar/Sidebar";
import Topbar from "../../componentes/Sidebar/Topbar/Topbar";
import About from "../../componentes/About/About";
import Welcome from "../../componentes/Welcome/Welcome";
import Projects from "../../componentes/Projects/Projects";
import LetsContact from "../../componentes/LetsContact/LetsContact";
import nico from "../../multimedia/nico-photo.png";
import "./Landing.css";
const Landing = () => {
  return (
    <div className="">
      <Topbar />
      <Sidebar />
      <div className="max-w-screen-lg flex mx-auto p-4 pb-14 bg-gray-800">
        <div className="w-3/4 space-y-16">
          <Welcome />
          <About />
        </div>
        <div>
          <div className="text-white w-full ml-14 flex justify-center items-center h-[390px]">
            <div class="overflow-hidden w-full border-2 border-cyan-400 rounded-3xl h-full">
              <img class="w-full object-cover" src={nico} alt="nico" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="max-w-screen-xl mx-auto p-4 space-y-20 ">
          <Projects />
        </div>
      </div>
      <div className="w-full bg-black">
        <div className="max-w-screen-lg mx-auto p-4 space-y-20 ">
          <LetsContact />
        </div>
      </div>
    </div>
  );
};

export default Landing;
