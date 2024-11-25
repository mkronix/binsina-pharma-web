import React from "react";
const ServicesCard = ({ title, description, image }) => {
  return (
    <div
      className=" group flex flex-col gap-3 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className="w-full h-32">
        <img src={image} alt={`${title} image`} className="w-full h-full rounded-lg object-cover" />
      </div>
      <h1 className="md:text-xl text-base font-semibold text-start text-brightColor">{title}</h1>
      <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
        {description}
      </p>
      <h3 className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
