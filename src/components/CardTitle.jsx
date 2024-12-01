import PropTypes from "prop-types";

const CardTitle = ({ title, isDefaultGradient = false }) => {
  return (
    <h3
      className={`text-xl font-semibold mb-3 ${
        isDefaultGradient ? "text-white" : "group-hover:text-white"
      }`}
    >
      {title}
    </h3>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isDefaultGradient: PropTypes.bool,
};

export default CardTitle;
