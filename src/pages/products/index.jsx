import Banner from "../../components/Banner";
import productBg from "/assets/img/products-bg.jpg";
const index = () => {
  return <section className='h-screen'>
    <Banner heading='Products' title='Products' backgroundImage={productBg} />
  </section>;
};

export default index;
