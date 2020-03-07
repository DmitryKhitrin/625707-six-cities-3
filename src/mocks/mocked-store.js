import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
export const store = mockStore({
  offer: {
    locations: [],
    city: `Paris`,
    offers: []
  },
  user: {
    authorizationStatus: `NO_AUTH`,
    user: {
      id: null,
      email: ``,
      name: ``,
      avatar: ``,
      isPro: false
    },
    error: ``
  }
});
