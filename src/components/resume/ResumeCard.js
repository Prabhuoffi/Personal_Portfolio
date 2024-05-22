import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="w-full h-1/3 group flex">
      <div className="w-10 h-[6px] mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black ">
          <span className="w-3 h-3 rounded-full bg-white inline-flex group-hover:bg-purple-600 duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-white rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-bannerShadow">

        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl text-purple-600">
              {title}
            </h3>
            <p className="text-sm mt-2 text-black">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-4 py-2 text-black flex justify-center items-center text--purple-600 border-2 bg-purple-400">
              {result}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-base font-medium text-black">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
