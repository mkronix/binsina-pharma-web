import Banner from "../../components/Banner";
import certificationBg from "/assets/img/certificate-bg.jpg";
const index = () => {
  return <section className='h-screen'>
    <Banner heading='Certifications' title='Certifications' backgroundImage={certificationBg} />
  </section>;
};

export default index;
