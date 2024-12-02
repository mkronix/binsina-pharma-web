import Banner from "../../components/Banner";
import BlogCard from "../../layouts/BlogCard";
import data from "../../data/data.json";
import CardTitle from "../../components/CardTitle";
import CardParagraph from "../../components/CardParagraph";
const index = () => {
  const { newsAndMedia } = data.binsinaPharma;

  const articles = [
    {
      image: "/assets/img/blog/blog1.png", // Replace with actual image URLs
      date: "18 APRIL 2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "/assets/img/blog/blog2.png",
      date: "18 APRIL 2020",
      title: "Social Media Risks To Mental Health",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
    {
      image: "/assets/img/blog/blog4.png",
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
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {articles.map((article, index) => (
              <div
                key={index}
                className='bg-white shadow-md rounded-lg relative'
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className='w-full object-cover rounded-lg'
                />
                <div className='flex justify-center items-center absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <div className='px-3 py-1 bg-black rounded-md flex items-center justify-center'>
                    <span className='text-lg font-bold text-brightColor'>
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
                <div className='p-4 pt-6'>
                  <CardTitle title={article.title} />
                  <CardParagraph description={article.description} />
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
