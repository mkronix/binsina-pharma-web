import Banner from "../../components/Banner";
import BlogCard from "../../layouts/BlogCard";
import data from "../../data/data.json";

const index = () => {
  const { blog } = data.binsinaPharma;

  return (
    <>
      <Banner heading='Blogs' title='Blog' />
      <div className='flex flex-col justify-center lg:px-16 px-8 py-8'>
        <div className='my-8'>
          <div className='grid grid-cols-1 sm:grid-cols-4 place-items-center gap-6'>
            {blog.content.map((blog, index) => (
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
