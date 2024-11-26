import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ title, className = "" }) => {
  return (
    <p
      className={`description text-justify lg:text-start text-gray-700 ${className}`}
    >
      {title}
    </p>
  );
};

Paragraph.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Paragraph;
