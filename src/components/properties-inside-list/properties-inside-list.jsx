import React from "react";
import PropTypes from "prop-types";
import {ProppertyInside} from "../property-inside/property-inside.jsx";

export const PropertiesInsideList = ({propertyInside = []}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {propertyInside.map((property, i) => {
          return <ProppertyInside key={i} property={property} />;
        })}
      </ul>
    </div>
  );
};

PropertiesInsideList.propTypes = {
  propertyInside: PropTypes.arrayOf(PropTypes.string).isRequired
};
