import { Link } from "react-router-dom";
import data from "../data/data.json";
import logo from "../assets/img/logo.png";
const FooterOne = () => {
  const { footer } = data.binsinaPharma;
  return (
    <footer className='bg-gradient-to-r from-brightColor to-[#1a1b26] text-white pt-4 rounded-t-xl'>
      <div className='p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8'>
        {/* About Section */}
        <div className='space-y-2'>
          <img
            src={logo}
            alt='logo'
            className='w-full bg-white p-4 rounded-md'
          />
          <p className='text-sm leading-relaxed text-white capitalize'>
            Binisana: Leading generic pharmaceutical manufacturer & exporter,
            offering high-quality medicines.
          </p>
        </div>

        {/* Quick Links */}
        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Quick Links</h2>
          <ul className='space-y-1'>
            <li>
              <Link
                to='/aboutus'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                About Us ›
              </Link>
            </li>
            <li>
              <Link
                to='/products'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Products ›
              </Link>
            </li>
            <li>
              <Link
                to='/news-and-media'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                News ›
              </Link>
            </li>
            <li>
              <Link
                to='/news-and-media'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Media ›
              </Link>
            </li>
            <li>
              <Link
                to='/quality-assurance'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Quality Assurance ›
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Services</h2>
          <ul className='space-y-1'>
            <li>
              <Link
                to='#'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Global Distribution ›
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Quality Assurance ›
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Regulatory Compliance ›
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Supply Chain Solutions ›
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Dedicated Support ›
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Legal</h2>
          <ul className='space-y-1'>
            <li>
              <Link
                to='/terms'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Terms of Use ›
              </Link>
            </li>
            <li>
              <Link
                to='/disclaimer'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Disclaimer ›
              </Link>
            </li>
            <li>
              <Link
                to='/policy'
                className='hover:text-brightColor text-white font-normal text-base'
              >
                Privacy Policy ›
              </Link>
            </li>
          </ul>
        </div>

        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Contact</h2>
          <div className='space-y-3'>
            {footer.contactDetails.map((detail) => (
              <div key={detail.id} className='flex items-center space-x-2'>
                <div className='w-6 h-6'>{detail.icon}</div>
                <p className='text-base text-white'>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='space-y-2'>
          <h2 className='text-xl font-bold'>Address</h2>
          <iframe
            src={footer.locationUrl}
            className='w-full h-32 border-none rounded-lg'
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
    </footer>
  );
};

export default FooterOne;
