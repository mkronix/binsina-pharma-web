import data from "../data/data.json";
import userLogo from '/assets/img/user.png'
const Testimonals = () => {
  const { home } = data.binsinaPharma;
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-500 uppercase">{home.testimonial.heading}</h3>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Our Satisfied & Happy Customers</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {home.testimonial.content.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={userLogo}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <p className="italic text-gray-700">"{testimonial.name}"</p>
              <h4 className="my-2 text-lg font-semibold text-gray-800">{testimonial.role}</h4>
              <p className="text-gray-500 text-start text-base leading-relaxed line-clamp-3 sm:line-clamp-4">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
