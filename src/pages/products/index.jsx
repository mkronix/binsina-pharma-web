import { FaArrowRightLong } from "react-icons/fa6";
import Banner from "../../components/Banner";
import CardParagraph from "../../components/CardParagraph";
import CardTitle from "../../components/CardTitle";
import data from "../../data/products.json";
const index = ({ openForm }) => {
  const { products } = data.binsinaPharma;

  return (
    <main>
      <Banner
        heading={products.bannerHeading}
        title={products.bannerTitle}
        backgroundImage={products.bannerImage}
      />
      <section className='bg-gray-50 lg:px-16 px-8 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          {products.productList.map((content) => (
            <>
              <div className=' shadow-md bg-white rounded-md hover:cursor-pointer'>
                <img
                  className='w-full h-48 object-cover rounded-md mb-4'
                  src={content.image}
                  alt={content.title}
                />
                <div className='flex justify-between items-end p-4'>
                  <div className='flex flex-col w-3/4'>
                    <CardTitle
                      title={
                        content.name.length > 15
                          ? content.name.slice(0, 15) + "..."
                          : content.name
                      }
                    />
                    <CardParagraph
                      description={
                        content.description.length > 60
                          ? content.description.slice(0, 60) + "..."
                          : content.description
                      }
                    />
                  </div>
                  <button
                    onClick={() => openForm()}
                    className='hover:bg-brightColor hover:text-white w-10 h-10 flex justify-center items-center rounded-full border'
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </main>
  );
};

export default index;
