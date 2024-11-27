import Button from "./Button/Button";
import data from "../data/data.json";

const Footer = () => {
  const { footer } = data.binsinaPharma;

  return (
    <div className='bg-backgroundColor text-white rounded-t-3xl md:mt-2'>
      {/* Contact Us Section */}
      <div className='flex max-md:flex-col max-md:gap-8 items-center justify-center bg-gray-50 lg:px-16 px-8 py-16'>
        {/* Contact Info */}
        <div className='w-full md:w-2/6 px-6'>
          <h2 className='heading uppercase'>{footer.heading1}</h2>
          <h1 className='title text-brightColor mt-2'>
            {footer.heading2} <br />
          </h1>
          <p className='text-gray-600 my-4 description'>{footer.description}</p>
          <Button title={footer.buttonText} />
        </div>
        {/* Contact Details */}
        <div className='w-full md:w-2/6 px-6'>
          <div className='space-y-4'>
            {footer.contactDetails.map((item, index) => (
              <div className='flex items-center' key={index}>
                <span className='title mr-4'>{item.icon}</span>
                {item.link ? (
                  <a href={item.link} className='description text-gray-600'>
                    {item.text}
                  </a>
                ) : (
                  <p className='text-gray-600 description'>{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Map */}
        <div className='w-full md:w-2/6 px-6'>
          <iframe
            src={footer.locationUrl}
            className='w-full h-72 border-none rounded-lg'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>

      <div className='bg-gray-900 text-gray-500'>
        <p className='text-center py-4'>
          {footer.copyRight.text1}
          <a
            href={footer.copyRight.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-hoverColor mx-2'
          >
            {footer.copyRight.text2}
          </a>
          {footer.copyRight.text3}
        </p>
      </div>
    </div>
  );
};

export default Footer;
