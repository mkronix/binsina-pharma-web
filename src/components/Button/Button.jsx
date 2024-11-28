import PropTypes from "prop-types";

const Button = ({ title, onClick, type }) => {
  return (
    <button
      type={type}
      className='capitalize bg-brightColor flex items-center text-white px-4 py-1 rounded-tl-lg rounded-br-lg text-base hover:bg-hoverColor transition duration-300 ease-in-out'
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
