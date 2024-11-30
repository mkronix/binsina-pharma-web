import Banner from "../../components/Banner";
import data from "../../data/data.json";

const index = () => {
  const { media } = data.binsinaPharma;

  return (
    <section className='h-screen'>
      <Banner
        heading={media.bannerHeading}
        title={media.bannerTitle}
        backgroundImage={media.bannerImage}
      />
    </section>
  );
};

export default index;
