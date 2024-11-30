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
    <h2
      className={`text-3xl md:text-4xl font-bold leading-tight ${alignmentClass} ${className}`}
    >
      {title}
    </h2>
  );
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.oneOf(["start", "center", "end"]),
  className: PropTypes.string,
};

export default Heading;
