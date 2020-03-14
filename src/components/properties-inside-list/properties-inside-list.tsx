import React, {FC, memo} from "react";
import {ProppertyInside} from "../property-inside/property-inside";

type Props = {
  propertyInside: string[];
}

const PropertiesInsideList: FC<Props> = ({propertyInside = []}) => {
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

const MemoizedPropertiesInsideList = memo(PropertiesInsideList);
export {MemoizedPropertiesInsideList as PropertiesInsideList};
