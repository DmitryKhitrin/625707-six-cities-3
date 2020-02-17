import React from "react";
import PropTypes from "prop-types";

export const ProppertyInside = ({
  property = ``,
}) => {
  return (
    <li className="property__inside-item">{property}</li>
  );
};

ProppertyInside.propTypes = {
  property: PropTypes.string.isRequired
};
