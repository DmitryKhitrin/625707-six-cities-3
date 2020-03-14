import {offersReducer, OfferState} from "./offer-reducer";
import {SET_CITY, UPDATE_OFFERS_INFO, SET_FAVORITE, SET_OFFERS} from "./types";

describe(`offerReducer`, () => {
  it(`should SET_CITY.`, () => {
    const state = offersReducer({} as OfferState, {type: SET_CITY, payload: `Moscow`});
    expect(state).toEqual({city: `Moscow`});
  });

  it(`should UPDATE_OFFERS_INFO.`, () => {
    const state = offersReducer(
        {} as OfferState,
        {type: UPDATE_OFFERS_INFO, payload: {
          offers: [{
            previewImage: ``,
            images: [``],
            title: ``,
            isFavorite: false,
            isPremium: false,
            rating: ``,
            type: ``,
            bedrooms: 1,
            maxAdults: 1,
            price: 1,
            goods: [``],
            host: {
              personPhoto: ``,
              personName: ``,
              id: 1,
              isPro: false,
            },
            location: [1, 2],
            description: ``,
            id: ``,
            city: {name: `Moscow`, location: [1, 2]},
          }],
        }}
    );
    expect(state).toEqual({offers: [{
      previewImage: ``,
      images: [``],
      title: ``,
      isFavorite: false,
      isPremium: false,
      rating: ``,
      type: ``,
      bedrooms: 1,
      maxAdults: 1,
      price: 1,
      goods: [``],
      host: {
        personPhoto: ``,
        personName: ``,
        id: 1,
        isPro: false,
      },
      location: [1, 2],
      description: ``,
      id: ``,
      city: {name: `Moscow`, location: [1, 2]},
    }]});
  });

  it(`should SET_FAVORITE.`, () => {
    const state = offersReducer(
        {} as OfferState,
        {
          type: SET_FAVORITE,
          payload: {
            favorites: {
              Moscow: [{
                previewImage: ``,
                images: [``],
                title: ``,
                isFavorite: false,
                isPremium: false,
                rating: ``,
                type: ``,
                bedrooms: 1,
                maxAdults: 1,
                price: 1,
                goods: [``],
                host: {
                  personPhoto: ``,
                  personName: ``,
                  id: 1,
                  isPro: false,
                },
                location: [1, 2],
                description: ``,
                id: ``,
                city: {name: `Moscow`, location: [1, 2]},
              }]},
          }
        }
    );
    expect(state).toEqual({favorites: {
      Moscow: [{
        previewImage: ``,
        images: [``],
        title: ``,
        isFavorite: false,
        isPremium: false,
        rating: ``,
        type: ``,
        bedrooms: 1,
        maxAdults: 1,
        price: 1,
        goods: [``],
        host: {
          personPhoto: ``,
          personName: ``,
          id: 1,
          isPro: false,
        },
        location: [1, 2],
        description: ``,
        id: ``,
        city: {name: `Moscow`, location: [1, 2]},
      }]}});
  });

  it(`should SET_OFFERS.`, () => {
    const state = offersReducer(
        {} as OfferState,
        {
          type: SET_OFFERS,
          payload: {
            locations: [{name: `Moscow`, location: [1, 2]}],
            offers: [{
              previewImage: ``,
              images: [``],
              title: ``,
              isFavorite: false,
              isPremium: false,
              rating: ``,
              type: ``,
              bedrooms: 1,
              maxAdults: 1,
              price: 1,
              goods: [``],
              host: {
                personPhoto: ``,
                personName: ``,
                id: 1,
                isPro: false,
              },
              location: [1, 2],
              description: ``,
              id: ``,
              city: {name: `Moscow`, location: [1, 2]},
            }]
          }
        }
    );
    expect(state).toEqual({
      locations: [{name: `Moscow`, location: [1, 2]}],
      offers: [{
        previewImage: ``,
        images: [``],
        title: ``,
        isFavorite: false,
        isPremium: false,
        rating: ``,
        type: ``,
        bedrooms: 1,
        maxAdults: 1,
        price: 1,
        goods: [``],
        host: {
          personPhoto: ``,
          personName: ``,
          id: 1,
          isPro: false,
        },
        location: [1, 2],
        description: ``,
        id: ``,
        city: {name: `Moscow`, location: [1, 2]},
      }]
    });
  });
});
