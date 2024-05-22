import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[600px] h-[400px] lgl:w-[600px] lgl:h-[600px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner