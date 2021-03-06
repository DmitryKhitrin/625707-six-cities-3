import React, {FC} from "react";

type Props = {
  property: string;
}

export const PropertyInside: FC<Props> = ({
  property = ``,
}) => {
  return (
    <li className="property__inside-item">{property}</li>
  );
};
