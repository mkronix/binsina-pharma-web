import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title, align = "center", className = "" }) => {
  const alignmentClass =
    align === "start"
      ? "text-start"
      : align === "end"
      ? "text-end"
      : "text-center";

  return (
    <h1
      className={`md:text-4xl text-2xl font-semibold ${alignmentClass} text-brightColor ${className}`}
    >
      {title}
    </h1>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["start", "center", "end"]),
  className: PropTypes.string,
};

export default Heading;
