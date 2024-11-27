import Banner from "../../components/Banner";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { services } from "../../data/services";
import ServicesCard from "../../layouts/ServicesCard";
import certificationBg from "/assets/img/certificate-bg.jpg";
const index = () => {
  return <>
    <Banner heading='Certifications' title='Certifications' backgroundImage={certificationBg} />
    <div className='gap-2 lg:flex-row flex flex-col lg:px-16 px-8 pt-16 pb-8'>
      <div className='flex flex-col gap-3 '>
        <Heading title="Our Certifications" align="start" />
        <div className="md:w-1/2">
          <Paragraph
            title="We provide a comprehensive range of pharmaceutical solutions, including tablet and nutraceutical manufacturing, generic medicines, suppositories, injections, advanced molecules, and premixes." />
        </div>
      </div>
    </div>
    <div className='flex flex-col lg:flex-row gap-5 lg:px-16 px-8 py-2'>
      {services.map((service) => (
        <ServicesCard
          key={service.id}
          image={service.image}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  </>

};

export default index;
