import { Link } from "react-router-dom";
import BorderTitle from "../../components/BorderTitle";
import CardParagraph from "../../components/CardParagraph";
import CardTitle from "../../components/CardTitle";
import FAQSection from "../../components/FAQSection";
import FeatureSection from "../../components/FeatureSection";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Slider from "../../components/Slider";
import Testimonials from "../../components/Testimonals";
import WhyChooseUs from "../../components/WhyChooseUs";
import data from "../../data/home.json";
import MapComponent from "../../components/MapComponent";

const index = () => {
  const { home } = data.binsinaPharma;

  const checklistColors = [
    "bg-teal-500",
    "bg-pink-500",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-indigo-500",
  ];

  return (
    <main>
      {/* Slider */}
      <section className='pt-[9rem]'>
        <Slider />
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Our Speciality Section */}
      <section className='lg:px-16 px-6 lg:pt-28 pt-12'>
        <div className='flex flex-col lg:flex-row items-start md:gap-16 gap-8'>
          {/* Left Section: Image */}
          <div className='w-full lg:w-1/2 relative flex flex-col space-y-4'>
            <img
              src={home.ourSpecialityCollection?.image}
              alt='Speciality Section'
              className='object-cover rounded-md shadow-lg h-[26rem]'
            />
          </div>

          <div className='w-full lg:w-1/2'>
            <div className='space-y-6'>
              <BorderTitle title={home.ourSpecialityCollection?.title} />
              <Heading
                title={home.ourSpecialityCollection?.heading}
                align='start'
              />
              <Paragraph title={home.ourSpecialityCollection.description} />
            </div>
            <div className='grid grid-cols-2 gap-6 my-5'>
              {home.ourSpecialityCollection.content.map((feature) => (
                <div
                  key={feature.id}
                  className='flex flex-col items-start gap-3'
                >
                  <div className='flex gap-3 items-center'>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className='w-8 h-8'
                    />
                    <div className='flex flex-col'>
                      <CardTitle title={feature.title} margin='mb-0' />
                    </div>
                  </div>
                  <CardParagraph description={feature.description} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='lg:px-16 px-6 lg:pt-28 pt-12'>
        <MapComponent />
      </section>

      {/* Our values */}
      <section className='lg:px-16 px-6 lg:pt-28 py-12'>
        <div className='flex flex-col lg:flex-row-reverse items-start md:gap-16 gap-8'>
          {/* Left Image Section */}
          <div className='w-full lg:w-1/2 relative flex flex-col space-y-4'>
            <img
              src={home.ourValuesCollection.image}
              alt='Values Section'
              className='object-fill rounded-md h-[28rem] shadow-lg'
            />
          </div>

          {/* Right Info Section */}
          <div className='w-full lg:w-1/2'>
            <div className='space-y-3'>
              <BorderTitle title={home.ourValuesCollection.title} />
              <Heading title={home.ourValuesCollection.heading} align='start' />
              <Paragraph title={home.ourValuesCollection.paragraph} />
            </div>
            <div className='mt-8 flex gap-10'>
              <ul className='space-y-2'>
                {home.ourValuesCollection.checklist?.map(
                  (checkItem, checkIndex) => {
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
                          {checkItem.content}
                        </span>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className='bg-gray-50 px-6 lg:px-16 py-16'>
        {/* Main Heading */}
        <BorderTitle title={home.whoWeWreCollection.title} className='mb-2' />
        <div className='text-center mb-12'>
          <Heading title={home.whoWeWreCollection.heading1} align='start' />
        </div>

        {/* Content Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start'>
          {home.whoWeWreCollection.content?.map((content) => (
            <div
              key={content.id}
              className='flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'
            >
              {/* Image Section */}
              <div className='w-max h-28 overflow-hidden'>
                <img
                  src={content.image}
                  alt={`Content ${content.id}`}
                  className='w-full h-full object-cover'
                />
              </div>

              <Paragraph title={content.description} />
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* Categories Section */}
      <section className='bg-blue-50 lg:px-16 px-6 lg:py-28 py-12'>
        <h2 className='text-3xl lg:text-4xl font-bold leading-tight mb-10 text-center'>
          {home.bestCategoriesCollection.heading}
        </h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Left card */}
          <div className='relative group overflow-hidden rounded-lg'>
            <img
              src={home.bestCategoriesCollection.content[0].image}
              alt={home.bestCategoriesCollection.content[0].title}
              className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
              <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>
                  {home.bestCategoriesCollection.content[0].title}
                </h3>
                <Link to={home.bestCategoriesCollection.content[0].link}>
                  <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {home.bestCategoriesCollection.content[0].buttonText}
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Middle cards */}
          <div className='relative flex flex-col space-y-8'>
            {/* Top 2 cards */}
            <div className='grid grid-cols-2 gap-8'>
              {home.bestCategoriesCollection.content
                .slice(1, 3)
                .map((category) => (
                  <div
                    key={category.id}
                    className='relative group overflow-hidden rounded-lg'
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
                    />
                    <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                      <div className='text-center text-white'>
                        <h3 className='text-2xl font-semibold'>
                          {category.title}
                        </h3>
                        <Link to={category.link}>
                          <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            {category.buttonText}
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom card */}
            <div className='relative group overflow-hidden rounded-lg'>
              <img
                src={home.bestCategoriesCollection.content[3].image}
                alt={home.bestCategoriesCollection.content[3].title}
                className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
                <div className='text-center text-white'>
                  <h3 className='text-2xl font-semibold'>
                    {home.bestCategoriesCollection.content[3].title}
                  </h3>
                  <Link to={home.bestCategoriesCollection.content[3].link}>
                    <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                      {home.bestCategoriesCollection.content[3].buttonText}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className='relative group overflow-hidden rounded-lg'>
            <img
              src={home.bestCategoriesCollection.content[4].image}
              alt={home.bestCategoriesCollection.content[4].title}
              className='w-full h-full object-cover rounded-lg transition-transform duration-300 transform group-hover:scale-105 opacity-80 group-hover:opacity-60'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'>
              <div className='text-center text-white'>
                <h3 className='text-2xl font-semibold'>
                  {home.bestCategoriesCollection.content[4].title}
                </h3>
                <Link to={home.bestCategoriesCollection.content[4].link}>
                  <p className='text-lg mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {home.bestCategoriesCollection.content[4].buttonText}
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQSection />
    </main>
  );
};

export default index;
