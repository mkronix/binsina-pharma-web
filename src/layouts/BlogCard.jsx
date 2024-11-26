import PropTypes from "prop-types";

const BlogCard = ({ img, headlines, description }) => {

  return (
    <div className='max-w-[400px] p-4 shadow-lg space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      <img
        className='h-40 md:h-96 lg:h-40 w-full rounded-lg'
        src={img}
        alt='img'
      />
      <h2 className='md:text-xl text-base font-semibold text-start text-brightColor'>
        {headlines.length > 25 ? headlines.substring(0, 25) + "..." : headlines}
      </h2>
      <p className='text-justify lg:text-start text-gray-700 max-md:text-xs'>
        {description.length > 70
          ? description.substring(0, 70) + "..."
          : description}
      </p>
    </div>
  );
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  headlines: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogCard;
