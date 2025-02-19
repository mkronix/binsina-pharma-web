import PropTypes from "prop-types";
import CardTitle from "../components/CardTitle";
import CardParagraph from "../components/CardParagraph";

const BlogCard = ({ img, headlines, description }) => {

  return (
    <div className='max-w-[400px] p-4 shadow-lg space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out'>
      <img
        className='h-40 md:h-96 lg:h-40 w-full rounded-lg'
        src={img}
        alt='img'
      />
      <CardTitle title={headlines.length > 25 ? headlines.slice(0, 25) + "..." : headlines} />
      <CardParagraph description={description} />
    </div>
  );
};

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  headlines: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogCard;
