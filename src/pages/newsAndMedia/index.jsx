import Banner from "../../components/Banner";
import data from "../../data/data.json";
import CardTitle from "../../components/CardTitle";
import CardParagraph from "../../components/CardParagraph";
import { Link } from "react-router-dom";
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
              <>
                <Link to={`/blog/${index}`}>
                  <div
                    key={index}
                    className='bg-white shadow-md rounded-lg relative'
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className='w-full object-cover rounded-lg'
                    />
                    <div className='p-4 pt-6'>
                      <CardTitle title={article.title} />
                      <CardParagraph description={article.description} />
                    </div>
                    <div className='flex justify-end items-center'>
                      <div className='px-3 py-1 rounded-md flex items-center justify-center gap-1'>
                        <span className='text-sm text-gray-500'>
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
