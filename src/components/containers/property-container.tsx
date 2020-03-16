import React, {FC, useEffect} from 'react';
import {connect} from "react-redux";
import {OfferPropperty} from "../offer-property/offer-property";
import {useScrollToTop} from '../../hooks/use-scroll-to-top';
import {setFavorite} from "../../redux/offers/offer-actions";
import {authSelector} from "../../redux/user/user-selectors";
import {commentsSelector, choosedSelector, nearbySelector, errorSelector} from "../../redux/property/property-selectors";
import {
  getCommentsAsync,
  getNearbyAsync,
  getChosenOfferAsync,
} from '../../redux/property/property-actions';
import {RootState} from "../../redux/root-reducer";
import {ParsedOfferCard, ParsedComment} from "../../utils/utils";

type Match = {
  params: {
    id: string;
  };
  isExact: boolean;
  path: string;
  url: string;
};

type Props = {
  setCity: (city: string) => void;
  getChosenOfferAsync: (T: string) => void;
  isAuthenticated: boolean;
  setFavorite: (T: string, S: number) => void;
  getNearbyAsync: (T: string) => void;
  getCommentsAsync: (T: string) => void;
  reviews: ParsedComment[];
  nearby: ParsedOfferCard[];
  currentOffer: ParsedOfferCard;
  match: Match;
  formError: boolean;
}

const PropertyContainer: FC<Props> = ({
  match,
  currentOffer,
  getChosenOfferAsync: getChoosedOffer,
  getCommentsAsync: getComments,
  isAuthenticated,
  setFavorite: setFavoriteCard,
  reviews,
  nearby,
  getNearbyAsync: getNearby,
  formError,
}) => {
  const {id} = match.params;
  useScrollToTop();

  useEffect(() => {
    getChoosedOffer(id);
    getNearby(id);
    getComments(id);
  }, [getChoosedOffer, getNearby, getComments, id]);

  return (
    <OfferPropperty
      {...currentOffer}
      isAuthenticated={isAuthenticated}
      setFavorite={setFavoriteCard}
      reviews={reviews}
      offersList={nearby}
      formError={formError}
    />
  );
};
const mapStateToProps = (state: RootState) => ({
  currentOffer: choosedSelector(state),
  isAuthenticated: authSelector(state),
  reviews: commentsSelector(state),
  nearby: nearbySelector(state),
  formError: errorSelector(state),
});

const mapDispatchToProps = {
  getChosenOfferAsync,
  setFavorite,
  getCommentsAsync,
  getNearbyAsync,
};

const WrappedPropertyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyContainer);
export {WrappedPropertyContainer as PropertyContainer};
