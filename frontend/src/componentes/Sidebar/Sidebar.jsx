import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="fixed h-full w-20 top-0 left-0 bg-transparent text-white flex flex-col justify-between p-4">
      <div className="py-20 flex flex-wrap">
        <ul className="w-full text-xl space-y-20">
          <li className="transform rotate-90">
            <a
              href="#about"
              className="transition duration-400 hover:text-cyan-400"
            >
              About
            </a>
          </li>
          <li className=" transform rotate-90">
            <a href="#projects"  className="transition duration-400 hover:text-cyan-400">Projects</a>
          </li>
          <li className="transform rotate-90">
            <a href="#contact"  className="transition duration-400 hover:text-cyan-400">Contact</a>
          </li>
        </ul>
        <ul className="w-full mt-20 text-xl space-y-8 flex justify-center flex-wrap">
          <li className="w-full flex justify-center">
            <a href="#contact" className="w-full flex justify-center">
              <FaGithub className="w-2/3 h-full transition duration-400 hover:text-cyan-400" />
            </a>
          </li>
          <li className="w-full flex justify-center">
            <a href="#contact" className="w-full flex justify-center">
              <FaLinkedin className="w-2/3 h-full transition duration-400 hover:text-cyan-400" />
            </a>
          </li>
          <li className="w-full flex justify-center">
            <a href="#contact" className="w-full flex justify-center">
              <IoMdMail className="w-2/3 h-full transition duration-400 hover:text-cyan-400" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
