import React from "react";
const BlogCard = ({ img, headlines, description }) => {
  return (
    <div
      className=" w-full lg:w-1/4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <img
        className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"
        src={img}
        alt="img"
      />
      <h2 className="md:text-xl text-base font-semibold text-start text-brightColor">{headlines.length > 25 ? headlines.substring(0, 25) + "..." : headlines}</h2>
      <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
        {description.length > 70 ? description.substring(0, 70) + "..." : description}
      </p>
    </div>
  );
};

export default BlogCard;
