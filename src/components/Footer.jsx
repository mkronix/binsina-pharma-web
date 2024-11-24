const Footer = () => {
  return (
    <div className='bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-2'>
      {/* Contact Us Section */}
      <div className='flex max-md:flex-col max-md:gap-8 items-center justify-center bg-gray-50 lg:px-16 px-8 py-16'>
        {/* Contact Info */}
        <div className='w-full md:w-2/6 px-6'>
          <h2 className='md:text-3xl text-xl font-bold text-brightColor uppercase'>
            Contact Us
          </h2>
          <h1 className='text-3xl font-bold text-brightColor mt-2'>
            Have Questions? <br />
          </h1>
          <p className='text-gray-600 mt-4'>
            We’re here to help with any inquiries you have. Whether you need
            support, have feedback, or simply want to know more about our
            services, our team is ready to assist.
          </p>
          <button className='mt-6 px-6 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600'>
            Get In Touch
          </button>
        </div>
        {/* Contact Details */}
        <div className='w-full md:w-2/6 px-6'>
          <div className='space-y-4'>
            {[
              {
                icon: "📞",
                text: "+91 98921 46706",
                link: "tel:+919892146706",
              },
              {
                icon: "⏰",
                text: `Mon-Fri: 9 AM – 6 PM
                Saturday: 9 AM – 4 PM
                Sunday: Closed`,
              },
              {
                icon: "📧",
                text: "info@binsinapharma.com",
                link: "mailto:info@binsinapharma.com",
              },
            ].map((item, index) => (
              <div className='flex items-center' key={index}>
                <span className='text-brightColor text-xl mr-4'>
                  {item.icon}
                </span>
                {item.link ? (
                  <a href={item.link} className='text-gray-600'>
                    {item.text}
                  </a>
                ) : (
                  <p className='text-gray-600'>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className='w-full md:w-2/6 px-6'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7920002620153!2d72.8369304!3d19.16058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b500000000%3A0x476c5d925ddafdb6!2sBinsina%20Pharma%20HQ!5e0!3m2!1sen!2sin!4v1667274849607!5m2!1sen!2sin'
            className='w-full h-72 border-none rounded-lg'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <div className='bg-gray-900 text-gray-500'>
        <p className='text-center py-4'>
          Developed by
          <a
            href='https://www.mkronix.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-hoverColor mx-2'
          >
            MKronix
          </a>
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
