import Banner from "../../components/Banner";
import mediaBg from "/assets/img/media-bg.jpg";
const index = () => {
  return <section className='h-screen'>
    <Banner heading='Media' title='Media' backgroundImage={mediaBg} />
  </section>;
};

export default index;
