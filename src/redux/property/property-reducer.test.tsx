import {propertyReducer, PropertyState} from './property-reducer';
import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING,
  SET_NEARBY,
  SET_CHOOSED,
  SET_FORM_ERROR,
  CLEAR_FORM_ERROR,
} from './types';

describe(`choosedReducer`, () => {

  it(`should SET_FORM_ERROR.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: SET_FORM_ERROR,
        },
    );
    expect(state).toEqual({formError: true});
  });

  it(`should CLEAR_FORM_ERROR.`, () => {
    const state = propertyReducer(
        {
          formError: true
        } as PropertyState,
        {
          type: CLEAR_FORM_ERROR,
        },
    );
    expect(state).toEqual({formError: false});
  });

  it(`should SET_COMMENTS.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: SET_COMMENTS,
          payload: {
            comments: [{
              comment: ``,
              date: 2,
              id: ``,
              rating: ``,
              user: {
                personPhoto: ``,
                personName: ``,
                id: 1,
                isPro: false,
              },
            }],
          },
        },
    );
    expect(state).toEqual({comments: [{
      comment: ``,
      date: 2,
      id: ``,
      rating: ``,
      user: {
        personPhoto: ``,
        personName: ``,
        id: 1,
        isPro: false,
      },
    }]});
  });

  it(`should START_REVIEW_SENDING.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: START_REVIEW_SENDING,
        },
    );
    expect(state).toEqual({isFormSending: true});
  });

  it(`should FINISH_REVIEW_SENDING.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: FINISH_REVIEW_SENDING,
        },
    );
    expect(state).toEqual({isFormSending: false});
  });

  it(`should SET_NEARBY.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: SET_NEARBY,
          payload: {
            nearby: [{
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
          },
        },
    );
    expect(state).toEqual({nearby: [{
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

  it(`should SET_CHOOSED.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: SET_CHOOSED,
          payload: {
            choosed: {
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
            },
          },
        },
    );
    expect(state).toEqual({choosed: {
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
    }});
  });
});
