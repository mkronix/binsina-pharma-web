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
      <div className='gap-2 lg:flex-row flex flex-col lg:px-16 px-8 pt-16 pb-8'>
        <div className='flex flex-col gap-3 '>
          <Heading title={qualityAssurance.heading} align='start' />
          <div className='md:w-1/2'>
            <Paragraph title={qualityAssurance.description} />
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-5 lg:px-16 px-8 py-2'>
        {qualityAssurance.content.map((service) => (
          <ServicesCard
            key={service.id}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </>
  );
};

export default index;
