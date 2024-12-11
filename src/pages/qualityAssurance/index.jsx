import Banner from "../../components/Banner";
import data from "../../data/qualityAssurance.json";
import BorderTitle from "../../components/BorderTitle";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const index = () => {
  const { qualityAssurance } = data.binsinaPharma;

  const checklistColors = [
    "bg-teal-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-indigo-500",
  ];

  return (
    <>
      <Banner
        heading={qualityAssurance.bannerHeading}
        title={qualityAssurance.bannerTitle}
        backgroundImage={qualityAssurance.bannerImage}
      />

      {qualityAssurance.content.map((item, index) => {
        const isImageLeft = index % 2 === 0;
        const isLastSection = index === qualityAssurance.content.length - 1;

        return (
          <section
            className={`md:px-16 px-6 ${
              isLastSection ? "md:pt-28 pt-12 mb-28" : "md:pt-28 pt-12"
            }`}
            key={index}
          >
            <div
              className={`flex flex-col ${
                isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
              } items-start gap-16`}
            >
              <div className='w-full md:w-1/2 relative flex flex-col space-y-4'>
                <img
                  src={item.image}
                  alt={`Section ${index}`}
                  className='w-[600px] max-lg:w-full h-[500px] max-lg:h-auto object-cover rounded-md shadow-lg'
                />
              </div>

              <div className='w-full md:w-1/2'>
                <div className='space-y-6'>
                  <BorderTitle title={item.title} />
                  <Heading title={item.heading} align='start' />
                  <Paragraph title={item.paragraph} />
                </div>

                <div className='mt-8'>
                  <ul className='space-y-2'>
                    {item.checklist?.map((checkItem, checkIndex) => {
                      const colorClass =
                        checklistColors[checkIndex % checklistColors.length];
                      return (
                        <li className='flex items-center' key={checkIndex}>
                          <span
                            className={`text-text-color text-base mr-2 ${colorClass} w-6 h-6 flex items-center justify-center rounded-full text-white`}
                          >
                            ✔
                          </span>
                          <span className='text-gray-800 font-semibold'>
                            {checkItem}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <Paragraph title={item.additionalParagraph} className='mt-4' />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default index;
