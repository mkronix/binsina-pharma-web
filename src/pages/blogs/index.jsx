import img1 from "../../assets/img/blog/blog1.jpg";
import img2 from "../../assets/img/blog/blog2.jpg";
import img3 from "../../assets/img/blog/blog3.jpg";
import img4 from "../../assets/img/blog/blog4.jpg";
import img5 from "../../assets/img/blog/blog5.jpg";
import img6 from "../../assets/img/blog/blog6.jpg";
import Banner from "../../components/Banner";
import BlogCard from "../../layouts/BlogCard";

const index = () => {
  const blogData = [
    {
      img: img1,
      headlines: 'Unraveling the Mysteries of Sleep',
      description:
        "Discover why sleep is crucial for your physical and mental well-being. Learn tips to improve sleep quality and understand the science behind a good night's rest.",
    },
    {
      img: img2,
      headlines: 'The Heart-Healthy Diet',
      description:
        'Explore the best dietary practices to keep your heart healthy. From nutrient-packed foods to heart-friendly recipes, start your journey to better heart health today.',
    },
    {
      img: img3,
      headlines: 'Understanding Pediatric Vaccinations',
      description:
        'Vaccinations are key to protecting children from preventable diseases. Learn about the importance of immunization schedules and how they safeguard future generations.',
    },
    {
      img: img4,
      headlines: 'Navigating Mental Health',
      description:
        'Mental health matters. Discover practical advice, coping mechanisms, and resources to support emotional well-being in challenging times.',
    },
    {
      img: img5,
      headlines: 'The Importance of Regular Exercise',
      description:
        'Regular physical activity benefits your body and mind. Find out how to incorporate exercise into your daily routine and reap long-term rewards.',
    },
    {
      img: img6,
      headlines: 'Skin Health 101',
      description:
        'Your skin reflects your health. Learn skincare essentials, tips to combat common skin issues, and routines to keep your skin glowing and healthy.',
    },
    {
      img: img2,
      headlines: 'The Importance of Regular Exercise',
      description:
        'Regular physical activity benefits your body and mind. Find out how to incorporate exercise into your daily routine and reap long-term rewards.',
    },
    {
      img: img3,
      headlines: 'Skin Health 101',
      description:
        'Your skin reflects your health. Learn skincare essentials, tips to combat common skin issues, and routines to keep your skin glowing and healthy.',
    },
  ];

  return (
    <>
      <Banner heading='Blogs' title='Blog' />
      <div className='flex flex-col justify-center lg:px-16 px-8 py-8'>
        <div className='my-8'>
          <div className='grid grid-cols-1 sm:grid-cols-4 place-items-center gap-6'>
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                img={blog.img}
                headlines={blog.headlines}
                description={blog.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
