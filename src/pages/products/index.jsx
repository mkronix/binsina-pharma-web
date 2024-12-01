import Banner from "../../components/Banner";
import CardParagraph from "../../components/CardParagraph";
import CardTitle from "../../components/CardTitle";
import data from "../../data/data.json";

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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {product.productList.map((content) => (
            <>
              <div className='p-4 shadow-md bg-white rounded-md'>
                <img
                  src={
                    "https://plus.unsplash.com/premium_photo-1732319199705-b2eb1f17d2d4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={content.title}
                />
                <div className='flex flex-col'>
                  <CardTitle title={content.name} />
                  <CardParagraph description={content.description} />
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
