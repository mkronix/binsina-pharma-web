import PropTypes from "prop-types";

const CardTitle = ({ title, isDefaultGradient = false, className = "", margin = "" }) => {
  return (
    <h2
      className={`md:text-xl text-base font-semibold ${margin ? margin : "mb-3"} ${className} ${isDefaultGradient ? "text-white" : "group-hover:text-white"
        }`}
    >
      {title}
    </h2>
  );
};

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isDefaultGradient: PropTypes.bool,
  className: PropTypes.string,
  margin: PropTypes.string,
};

export default CardTitle;
