import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoIosDocument } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import nico from '../../multimedia/nico-photo.png';
const Welcome = () => {
  return (
    <div className="mx-auto max-w-[1323px] h-full flex items-start">
      <div className="w-2/3 text-white flex flex-wrap space-y-2">
        <div className="w-full">
          <h1 className="font-poppins-900 text-7xl text-left">
            Hola, Soy Nico<span className="text-cyan-400">.</span>
          </h1>
        </div>
        <div className="w-full">
          <h3 className="text-left text-2xl flex justify-start items-center space-x-2 font-poppins-200">
            <FaCode className="text-cyan-400" />
            <span className="text-cyan-400">Front End Developer</span>
          </h3>
        </div>
        <div className="w-full">
          <p className="font-poppins-200 text-left text-lg ">
            I've spent the last 5 years building and scaling software for some
            pretty cool companies.
          </p>
        </div>
        <div className="flex flex-wrap w-full space-x-2">
          <div>
            <button className="border-2 border-cyan-400 text-cyan-400 rounded-sm px-2 flex items-center hover:bg-cyan-400 hover:text-white transition duration-400">
              Let's connect!
              <FaLink className="ml-1" />
            </button>
          </div>
          <div>
            <button className="border-2 border-cyan-400 text-cyan-400 rounded-sm px-2 flex items-center hover:bg-cyan-400 hover:text-white transition duration-400">
              Resume
              <IoIosDocument className="ml-1" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-white w-1/3 flex justify-center items-centern h-[250px] px-10">
        <div class="overflow-hidden border-2 border-cyan-400 rounded-lg h-full">
          <img
            class="w-full object-cover"
            src={nico}
            alt="nico"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
