import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({ title, className = "" }) => {
  return (
    <p
      className={` text-gray-500 text-base leading-relaxed line-clamp-6 ${className} overflow-hidden`}
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
