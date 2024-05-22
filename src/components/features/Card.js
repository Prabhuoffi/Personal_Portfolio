import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="w-full px-10 h-85 py-10 rounded-lg shadow-bannerShadow  flex items-center bg-gradient-to-r from-bodyColor to-[#ffffff] group hover:bg-gradient-to-b hover:from-purple-100 hover:to-[ #e0b3ff] transition-colors duration-100 group">
      <div className="h-85 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
            {icon ? (
              <span className="text-5xl text-purple-600 ">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-purple-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-purple-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-purple-600 inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-purple-600 inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-purple-600">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card