import React from "react";
import { frontTechSkills, backTechSkills, tools } from "../../utils/techSkills";
const About = () => {
  return (
    <div className="flex flex-wrap space-y-3">
      <div className="w-full flex justify-start items-center">
        <h1 className="text-3xl text-left text-white font-poppins-400">
          About <span className="text-cyan-400">.</span>
        </h1>
      </div>
      <div className="flex flex-wrap space-y-3">
        <div className="w-full flex justify-start items-center">
          <h1 className="w-2/3 text-white font-poppins-200 text-md text-left">
            Disfruto mucho el trabajo creativo, aprender con mis compañeros e
            innovar. Desde mis inicios en el desarrollo de aplicaciones web
            quedé fascinado con la tecnologia, el diseño web y la experiencia de
            usuario.
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-wrap space-y-8">
        <div className="w-full flex flex-wrap space-y-4">
          <div className="w-full flex justify-start items-center">
            <h1 className="text-white text-xl font-poppins-400">
              Front Stack<span className="text-cyan-400">:</span>
            </h1>
          </div>
          <div className="flex justify-start items-center space-x-6">
            {frontTechSkills?.map((tech) => (
              <div className="flex flex-wrap justify-center items-center w-12 space-y-2">
                <div className="w-full h-12">
                  <img src={tech.img} alt={tech.name} />
                </div>
                <div>
                  <h1 className="text-white text-sm font-poppins-200">
                    {tech.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-wrap space-y-4">
          <div className="w-full flex justify-start items-center">
            <h1 className="text-white text-xl font-poppins-400">
              Back Stack<span className="text-cyan-400">:</span>
            </h1>
          </div>
          <div className="flex justify-start items-center space-x-6">
            {backTechSkills?.map((tech) => (
              <div className="flex flex-wrap justify-center items-center w-12 space-y-2">
                <div className="w-full h-12">
                  <img src={tech.img} alt={tech.name} />
                </div>
                <div>
                  <h1 className="text-white text-sm font-poppins-200">
                    {tech.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-wrap space-y-4">
          <div className="w-full flex justify-start items-center">
            <h1 className="text-white text-xl font-poppins-400">
              Other Tools<span className="text-cyan-400">:</span>
            </h1>
          </div>
          <div className="flex justify-start items-center space-x-6">
            {tools?.map((tech) => (
              <div className="flex flex-wrap justify-center items-center w-12 space-y-2">
                <div className="w-full h-12">
                  <img src={tech.img} alt={tech.name} />
                </div>
                <div>
                  <h1 className="text-white text-sm font-poppins-200">
                    {tech.name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
