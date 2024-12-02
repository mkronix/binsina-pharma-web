import Banner from "../../components/Banner";
import BlogCard from "../../layouts/BlogCard";
import data from "../../data/data.json";

const index = () => {
  const { newsAndMedia } = data.binsinaPharma;

  const articles = [
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_1.jpg", // Replace with actual image URLs
      date: "18 APRIL 2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_1.jpg",
      date: "18 APRIL 2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "https://preview.colorlib.com/theme/counselor/images/image_1.jpg",
      date: "18 APRIL 2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <>
      <Banner
        heading={newsAndMedia.bannerHeading}
        title={newsAndMedia.bannerTitle}
      />

      <div className='md:px-16 px-6 md:py-28 py-12'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {articles.map((article, index) => (
              <div
                key={index}
                className='bg-white shadow-md rounded-lg relative'
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full h-48 object-cover'
                />
                <div className='flex justify-center items-center mb-3 absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-16 h-16 bg-gray-100 rounded-full flex flex-col items-center justify-center'>
                    <span className='text-lg font-bold text-green-500'>
                      {article.date.split(" ")[0]}
                    </span>
                    <span className='text-xs uppercase text-gray-500'>
                      {article.date.split(" ")[1]}
                    </span>
                    <span className='text-xs uppercase text-gray-500'>
                      {article.date.split(" ")[2]}
                    </span>
                  </div>
                </div>
                <div className='text-center p-4 pt-12'>
                  <h3 className='text-lg font-bold mb-2'>{article.title}</h3>
                  <p className='text-sm text-gray-500 mb-5'>
                    {article.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
