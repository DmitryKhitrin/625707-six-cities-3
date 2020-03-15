import React, {FC, useCallback, memo} from "react";

type Props = {
  cityName: string;
  setCity: (cityName: string) => void;
  isActive: boolean;
}

const CityTab: FC<Props> = ({cityName, setCity, isActive}) => {
  const handleClick = useCallback(() => {
    setCity(cityName);
  }, [cityName, setCity]);
  return (
    <li className="locations__item" onClick={handleClick}>
      <a
        className={`locations__item-link tabs__item ${
          isActive ? `tabs__item--active` : ``
        }`}
        href="#"
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
};

const MemoizedCityTab = memo(CityTab);
export {MemoizedCityTab as CityTab};
