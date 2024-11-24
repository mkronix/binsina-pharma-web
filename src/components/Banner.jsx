import PropTypes from "prop-types";
import banner_image from "../assets/img/blog/blog1.jpg";
import { Link } from "react-router-dom";

const Banner = (props) => {
  const { heading, title } = props;

  const backgroundImageStyle = {
    backgroundImage: `url(${banner_image})`,
  };

  return (
    <>
      <section
        className="relative flex items-center justify-center p-[180px] bg-center bg-no-repeat bg-cover before:contents[''] before:absolute before:left-0 before:right-0 before:top-0 before:bg-primary before:opacity-80 before:h-full before:w-full"
        style={backgroundImageStyle}
      >
        <div className='absolute -bottom-7 w-full max-w-2xl py-0 px-4 my-0 mx-auto'>
          <div className='w-full max-w-[700px] my-0 mx-auto text-center py-12 px-0 bg-white shadow-xl z-20'>
            <h1 className='relative text-6xl capitalize md:text-5xl lg:text-6xl font-medium mb-3 text-black leading-[70px]'>
              {heading}
            </h1>

            <ul className='relative list-none m-0 p-0'>
              <li className='inline-block mr-2 pr-2'>
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
