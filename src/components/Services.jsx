import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import { services } from "../data/services";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex gap-2 flex-col items-center lg:flex-row justify-between">
        <div className="flex flex-col gap-3 md:w-2/3">
          <h1 className="md:text-4xl text-2xl font-semibold text-start text-brightColor">
            Our Services
          </h1>
          <p className="text-justify lg:text-start text-gray-700 max-md:text-xs">
            We provide a comprehensive range of pharmaceutical solutions, including tablet and nutraceutical manufacturing, generic medicines, suppositories, injections, advanced molecules, and premixes.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 md:pt-10 pt-6">
        {services.map((service) => (
          <ServicesCard key={service.id} image={service.image} title={service.title} description={service.description} />
        ))}
      </div>

    </div>
  );
};

export default Services;
