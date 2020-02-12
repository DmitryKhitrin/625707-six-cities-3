import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";

export class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlaceCard: null
    };
    this._setActivePlaceCard = this._setActivePlaceCard.bind(this);
    this._removeActivePlaceCard = this._removeActivePlaceCard.bind(this);
  }

  render() {
    return (
      <div className="cities__places-list places__list tabs__content">
        {this.props.placeCardsList.map(
            ({
              id,
              priceValue,
              placeCardImage,
              cardName,
              starsRating,
              roomType,
              isPremium
            }) => {
              return (
                <div key={id}>
                  <PlaceCard
                    id={id}
                    isPremium={isPremium}
                    roomType={roomType}
                    starsRating={starsRating}
                    priceValue={priceValue}
                    placeCardImage={placeCardImage}
                    cardName={cardName}
                    onHeaderClick={this.props.onHeaderClick}
                    onMouseEnter={this._setActivePlaceCard}
                    onMouseLeave={this._removeActivePlaceCard}
                  />
                </div>
              );
            }
        )}
      </div>
    );
  }

  _setActivePlaceCard(id) {
    this.setState({
      activePlaceCard: id
    });
  }

  _removeActivePlaceCard() {
    this.setState({
      activePlaceCard: null
    });
  }
}

OffersList.propTypes = {
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired
};
