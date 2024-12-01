const ServicesCard = ({ title, description, description1, description2, description3, image, reverse }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""
        } gap-5 w-full p-5  ${reverse ? "bg-white" : ""} justify-center`}
    >
      <div className="lg:w-1/2 w-full h-96">
        <img
          src={image}
          alt={`${title} image`}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="lg:w-1/2 w-full flex flex-col gap-3">
        <h1 className={`text-3xl font-semibold `}>{title}</h1>
        <p className={`text-start text-base leading-relaxed `}>{description}</p>
        <p className={`text-start text-base leading-relaxed `}>{description1}</p>
        <p className={`text-start text-base leading-relaxed  `}>{description2}</p>
        <p className={`text-start text-base leading-relaxed `}>{description3}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
