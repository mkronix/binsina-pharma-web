import PropTypes from "prop-types";

const CardParagraph = ({ description, isDefaultGradient, className }) => {
  return (
    <p
      className={`text-sm ${
        isDefaultGradient
          ? "text-blue-50"
          : "text-gray-500 group-hover:text-white"
      } ${className}`}
    >
      {description}
    </p>
  );
};

CardParagraph.propTypes = {
  description: PropTypes.string.isRequired,
  isDefaultGradient: PropTypes.bool,
  className: PropTypes.string,
};

CardParagraph.defaultProps = {
  isDefaultGradient: false,
  className: "",
};

export default CardParagraph;
