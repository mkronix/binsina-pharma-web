import Banner from "../../components/Banner";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ServicesCard from "../../layouts/ServicesCard";
import data from "../../data/data.json";

const index = () => {
  const { qualityAssurance } = data.binsinaPharma;

  return (
    <>
      <Banner
        heading={qualityAssurance.bannerHeading}
        title={qualityAssurance.bannerTitle}
        backgroundImage={qualityAssurance.bannerImage}
      />
      <div className="bg-gray-50 flex flex-col gap-10 py-16">
        {qualityAssurance.content.map((service, index) => (
          <ServicesCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
            description1={service.description1}
            description2={service.description2}
            description3={service.description3}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default index;
