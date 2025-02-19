import { useParams } from "react-router-dom";
import data from "../../data/newsAndMedia.json";
const BlogDetails = () => {
  const { id } = useParams();
  const { newsAndMedia } = data.binsinaPharma;

  const blog = newsAndMedia.articleDetails.find((item) => item.id === id);

  if (!blog) {
    return (
      <main className='min-h-screen flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-gray-800'>Blog not found</h1>
      </main>
    );
  }

  return (
    <section className=' max-w-5xl mx-auto px-6 lg:px-12 py-48 '>
      {/* Main Content Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Image */}
        <img
          src={blog.coverImage}
          alt='Blog Cover'
          className='w-full h-auto rounded-lg shadow-md object-cover'
        />

        {/* Content */}
        <div className='text-gray-800 leading-relaxed space-y-4'>
          <div className='text-gray-500 text-sm'>
            <span>By {blog.author}</span> |{" "}
            <span>Published on {blog.date}</span>
          </div>
          {blog.content.map((item, index) => {
            if (item.type === "paragraph") {
              return <p key={index}>{item.text}</p>;
            } else if (item.type === "heading") {
              return (
                <h2 key={index} className='text-2xl font-bold mt-6'>
                  {item.text}
                </h2>
              );
            } else if (item.type === "list") {
              return (
                <ul
                  key={index}
                  className='list-disc list-inside space-y-2 pl-4'
                >
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Additional Content */}
      <div className='p-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>
          Future Opportunities
        </h3>
        <ul className='list-disc list-inside space-y-2 pl-4 text-gray-700'>
          {blog.additionalContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogDetails;
