import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed h-full w-20 top-0 left-0 bg-transparent text-white flex flex-col justify-between p-4">
      <div>
        <ul className="text-xl py-20 space-y-20">
          <li className="transform rotate-90">
            <a href="#about">About</a>
          </li>
          <li className=" transform rotate-90">
            <a href="#projects">Projects</a>
          </li>
          <li className="transform rotate-90">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;