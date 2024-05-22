import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-xl uppercase font-medium text-purple-600  tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-black font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title