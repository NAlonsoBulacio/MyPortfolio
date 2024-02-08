import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed h-full w-20 top-0 left-0 bg-gray-800 text-white flex flex-col justify-between p-4">
      <div>
        <ul>
          <li className="mt-20 mb-14 transform rotate-90">
            <a href="#about">About</a>
          </li>
          <li className="mb-14 transform rotate-90">
            <a href="#projects">Projects</a>
          </li>
          <li className="mb-14 transform rotate-90">
            <a href="#skills">Skills</a>
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