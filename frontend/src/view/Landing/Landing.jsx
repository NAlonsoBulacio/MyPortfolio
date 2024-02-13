import React from "react";
import Sidebar from "../../componentes/Sidebar/Sidebar";
import Topbar from "../../componentes/Sidebar/Topbar/Topbar";
import About from "../../componentes/About/About";
import Welcome from "../../componentes/Welcome/Welcome";
import Projects from "../../componentes/Projects/Projects";
import LetsContact from "../../componentes/LetsContact/LetsContact";
import "./Landing.css"
const Landing = () => {
  return (
    <div className="">
      <Topbar />
      <Sidebar />
      <div className="max-w-screen-lg mx-auto p-4 pb-14 space-y-20 bg-gray-800">
        <Welcome />
        <About />
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
