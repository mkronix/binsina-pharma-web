import Banner from "../../components/Banner";
import data from "../../data/data.json";

const index = () => {
  const { product } = data.binsinaPharma;

  return (
    <section className='h-screen'>
      <Banner
        heading={product.bannerHeading}
        title={product.bannerTitle}
        backgroundImage={product.bannerImage}
      />
    </section>
  );
};

export default index;
