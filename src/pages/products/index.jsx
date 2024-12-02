import Banner from "../../components/Banner";
import CardParagraph from "../../components/CardParagraph";
import CardTitle from "../../components/CardTitle";
import data from "../../data/data.json";
import { FaArrowRightLong } from "react-icons/fa6";
import p1 from "/assets/img/pills.jpg";
import p2 from "/assets/img/vaccine.jpg";
import p3 from "/assets/img/homeopathy.jpg";
import p4 from "/assets/img/surgical.jpg";
import p5 from "/assets/img/ayurveda.jpg";
const index = () => {
  const { product } = data.binsinaPharma;

  return (
    <>
      <Banner
        heading={product.bannerHeading}
        title={product.bannerTitle}
        backgroundImage={product.bannerImage}
      />
      <div className='bg-gray-50 lg:px-16 px-8 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {product.productList.map((content) => (
            <>
              <div className=' shadow-md bg-white rounded-md group hover:cursor-pointer'>
                <img
                  className='w-full h-48 object-cover rounded-md mb-4'
                  src={content.image}
                  alt={content.title}
                />
                <div className='flex justify-between items-end p-4'>
                  <div className='flex flex-col w-3/4'>
                    <CardTitle
                      className='group-hover:text-black'
                      title={
                        content.name.length > 15
                          ? content.name.slice(0, 15) + "..."
                          : content.name
                      }
                    />
                    <CardParagraph
                      className={"group-hover:text-black"}
                      description={
                        content.description.length > 60
                          ? content.description.slice(0, 60) + "..."
                          : content.description
                      }
                    />
                  </div>
                  <button className='group-hover:bg-black group-hover:text-white w-10 h-10 flex justify-center items-center rounded-full border'>
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
