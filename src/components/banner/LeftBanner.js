import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-black">
          Hi, I'm <span className="text-purple-600 capitalize">Prabhu</span>
        </h1>
        <h2 className="text-4xl font-bold text-yellow-400">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="text-yellow-400"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        As a full-stack web developer, I sculpt digital landscapes with code, weaving creativity into every line to craft immersive online experiences.
         I'm not just a builder; I'm an architect of virtual realms, 
         where innovation dances with functionality to create digital symphonies.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner