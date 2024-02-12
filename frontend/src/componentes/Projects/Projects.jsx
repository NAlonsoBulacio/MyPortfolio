import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../utils/projects";
const Projects = () => {
  return (
    <div className="flex flex-wrap py-8">
      <div className="w-full flex justify-center items-center">
        <h1 className="text-4xl text-left text-white font-poppins-400">
          Projects <span className="text-cyan-400">.</span>
        </h1>
      </div>
      <div className="w-full flex flex-wrap justify-center px-4 space-x-10 my-8">
        {projects?.map((project) => (
          <div className="w-1/4 h-[420px] rounded-lg bg-gray-800 overflow-hidden mb-10">
            <div className="w-full h-1/2 border-b-2 border-b-cyan-400 overflow-hidden">
              <img
                class="w-full h-full object-cover"
                src={project.thumbrlImg}
                alt="nico"
              />
            </div>
            <div className="w-full h-1/2 px-4 py-4">
              <div className="w-full">
                <h1 className="text-cyan-400 text-2xl font-poppins-600 text-left">
                  {project.name}
                </h1>
              </div>
              <div className="h-24 flex justify-start items-start">
                <h1 className="text-white font-poppins-200 text-left text-md">
                  {project.description}
                </h1>
              </div>
              <div className="flex justify-start space-x-4">
                <button className="border-2 border-cyan-400 text-cyan-400 rounded-sm px-2 flex items-center hover:bg-cyan-400 hover:text-white transition duration-400">
                  Deploy
                  <FaExternalLinkAlt className="ml-1" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 rounded-sm px-2 flex items-center hover:bg-cyan-400 hover:text-white transition duration-400">
                  Github
                  <FaGithub className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
