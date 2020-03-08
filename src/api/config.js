export const request = {
  hotels: {
    get: () => `/hotels`
  },
  user: {
    login: () => `/login`
  },
  favorites: {
    get: () => `/favorite`,
    post: (hotelId, status) => `/favorite/${hotelId}/${status}`,
  }
};
