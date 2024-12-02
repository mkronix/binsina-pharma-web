import PropTypes from "prop-types";

const CardTitle = ({ title, isDefaultGradient = false, className = "", margin = "" }) => {
  return (
    <h3
      className={`text-xl font-semibold ${margin ? margin : "mb-3"} ${className} ${isDefaultGradient ? "text-white" : "group-hover:text-white"
        }`}
    >
      {title}
    </h3>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isDefaultGradient: PropTypes.bool,
  className: PropTypes.string,
  margin: PropTypes.string,
};

export default CardTitle;
