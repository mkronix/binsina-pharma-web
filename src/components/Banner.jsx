import PropTypes from "prop-types";
import banner_image from "../assets/img/blog/blog1.jpg";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { heading, title, backgroundImage } = props;

  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage || banner_image})`,
  };

  return (
    <>
      <section
        className="relative flex items-center justify-center md:p-[180px] p-[100px] bg-center bg-no-repeat bg-cover before:contents[''] before:absolute before:left-0 before:right-0 before:top-0 before:bg-primary before:opacity-80 before:h-full before:w-full"
        style={backgroundImageStyle}
      >
        <div className='absolute -bottom-7 w-full max-w-2xl py-0 px-4 mx-auto'>
          <div className='w-full md:max-w-[450px] max-w-[260px] mx-auto text-center md:py-6 py-2 px-0 bg-white rounded-md shadow-xl z-20'>
            <h1 className='relative text-xl capitalize md:text-3xl lg:text-4xl font-medium text-black leading-[40px]'>
              {heading}
            </h1>

            <ul className='relative list-none'>
              <li className='inline-block mr-2'>
                <Link
                  to='Home'
                  className="relative inline-block text-sm text-lightgray hover:text-primary uppercase before:block before:content-['/'] before:absolute before:-left-0 before:-right-12"
                >
                  Home
                </Link>
              </li>

              <li className='inline-block text-sm text-lightgray uppercase'>
                {title}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

Banner.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
