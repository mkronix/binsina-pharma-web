import PropTypes from "prop-types";

const Button = ({ title, onClick, type }) => {
  return (
    <button
      type={type}
      className='capitalize bg-gradient-to-r from-brightColor to-[#1a1b26] flex items-center text-white px-6 py-3 rounded-md transition-all hover:bg-hoverColor transition duration-300 ease-in-out'
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

Button.defaultProps = {
  onClick: () => {},
  type: "button",
};

export default Button;
