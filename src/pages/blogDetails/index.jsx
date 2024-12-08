import { useParams } from "react-router-dom";

// Mock Blog Data
const blogData = [
  {
    id: "1",
    title: "The Future of Pharmaceutical Exports in a Globalized World",
    author: "John Doe",
    date: "Dec 4, 2024",
    coverImage:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "paragraph",
        text: "In today's interconnected world, the pharmaceutical industry is witnessing unprecedented changes driven by globalization.",
      },
      {
        type: "heading",
        text: "Key Challenges",
      },
      {
        type: "list",
        items: [
          "Stringent regulations in different countries.",
          "Maintaining the quality of drugs during transit.",
          "Supply chain disruptions caused by geopolitical events.",
        ],
      },
    ],
    additionalContent: [
      "Collaboration between countries to harmonize pharmaceutical standards.",
      "Increased adoption of technology to monitor and streamline the supply chain.",
      "Focus on sustainability in pharmaceutical packaging and transport.",
    ],
  },
  {
    id: "2",
    title: "Pharmaceutical Innovations in 2024",
    author: "Jane Smith",
    date: "Nov 20, 2024",
    coverImage:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "paragraph",
        text: "Pharmaceutical innovations have reshaped how diseases are treated and prevented.",
      },
      {
        type: "heading",
        text: "Emerging Trends",
      },
      {
        type: "list",
        items: [
          "AI in drug discovery",
          "Gene editing technologies",
          "Advanced vaccine delivery systems",
        ],
      },
    ],
    additionalContent: [
      "Investment in research and development.",
      "Collaboration between biotech companies and pharmaceutical giants.",
      "Enhanced focus on patient-centric care.",
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find((item) => item.id === id);

  if (!blog) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-gray-800'>Blog not found</h1>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 max-w-5xl h-screen mx-auto px-6 lg:px-12 pt-48 max-md:pt-24 ' >
      {/* Main Content Section */}
      < div className='grid grid-cols-1 lg:grid-cols-2 gap-8' >
        {/* Image */}
        < img
          src={blog.coverImage}
          alt='Blog Cover'
          className='w-full h-auto rounded-lg shadow-md object-cover'
        />

        {/* Content */}
        < div className='text-gray-800 leading-relaxed space-y-4' >
          <div className='text-gray-500 text-sm'>
            <span>By {blog.author}</span> |{" "}
            <span>Published on {blog.date}</span>
          </div>
          {
            blog.content.map((item, index) => {
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
            })
          }
        </div>
      </div >

      {/* Additional Content */}
      < div className='bg-white p-6 rounded-lg shadow-md' >
        <h3 className='text-xl font-bold text-gray-800 mb-4'>
          Future Opportunities
        </h3>
        <ul className='list-disc list-inside space-y-2 pl-4 text-gray-700'>
          {blog.additionalContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div >
    </div>

  );
};

export default BlogDetails;
