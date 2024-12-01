import PropTypes from "prop-types";

const BorderTitle = ({ title = "About Binsina Pharma", className = "" }) => {
  return (
    <div className={`flex items-center gap-2 max-md:flex-col ${className}`}>
      <span className='w-10 h-[2px] bg-hoverColor inline-block'></span>
      <p className='text-lg font-semibold text-hoverColor uppercase'>{title}</p>
    </div>
  );
};

BorderTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default BorderTitle;
