import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, deploymentLink }) => {
  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-banner shadow-md flex flex-col bg-gradient-to-r from-bodyColor to-[#ffffff] group hover:bg-gradient-to-b hover:from-purple-500 hover:to-[ #e0b3ff] transition-colors duration-1000 group">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col  gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-purple-600 font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-purple-600 duration-300 cursor-pointer">
                <BsGithub />
              </a>
              <a href={deploymentLink} target="_blank" rel="noopener noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-white hover:text-purple-600 duration-300 cursor-pointer">
                <FaGlobe />
              </a>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 text-black duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;