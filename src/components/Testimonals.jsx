import data from "../data/data.json";

const Testimonals = () => {
  const { home } = data.binsinaPharma;
  return (
    <div className='container mx-auto lg:px-16 px-8 py-16'>
      <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-10 text-center'>{home.testimonial.heading}</h2>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-16'>
        {home.testimonial.content.map((testimonial, index) => (
          <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
            <div className='flex items-center mb-4'>
              <img
                src={`${testimonial.image}`}
                alt={testimonial.name}
                className='w-12 h-12 rounded-full object-cover'
              />
              <div className='ml-4'>
                <h4 className='font-semibold title'>{testimonial.name}</h4>
                <p className='text-gray-600 text-sm'>{testimonial.role}</p>
              </div>
            </div>
            <p className='text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4'>{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonals;
