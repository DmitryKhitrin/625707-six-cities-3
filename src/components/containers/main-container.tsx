import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {useMountEffect} from "../../hooks/use-mount-effect";
import {useScrollToTop} from "../../hooks/use-scroll-to-top";
import {authSelector} from "../../redux/user/user-selectors";
import {Main} from "../main/main";
import {
  locationsSelector,
  citySelector,
  offersInCitySelector,
} from "../../redux/offers/offer-selectors";
import {
  setCity,
  loadOffers,
  setFavorite,
} from "../../redux/offers/offer-actions";
import {RootState} from "../../redux/root-reducer";
import {ParsedOfferCard, ParsedCity} from "../../utils/utils";

type Props = {
  locations: ParsedCity[];
  city: string;
  placeCardsList: ParsedOfferCard[];
  isAuthenticated: boolean;
  setCity: (city: string) => void;
  loadOffers: () => void;
  setFavorite: (hotelId: string, status: number) => void;
}

const MainContainer: FC<Props> = (props) => {
  useMountEffect(() => {
    props.loadOffers();
  });

  useScrollToTop();

  return <Main {...props} />;
};
const mapStateToProps = (state: RootState) => ({
  locations: locationsSelector(state),
  city: citySelector(state),
  placeCardsList: offersInCitySelector(state),
  isAuthenticated: authSelector(state),
});

const mapDispatchToProps = {
  setCity,
  loadOffers,
  setFavorite,
};

const WrappedMainContainer = memo(connect(mapStateToProps, mapDispatchToProps)(MainContainer));
export {WrappedMainContainer as MainContainer};
