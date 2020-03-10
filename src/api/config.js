export const request = {
  hotels: {
    get: () => `/hotels`
  },
  nearby: {
    get: (hotelId) => `/hotels/${hotelId}/nearby`
  },
  user: {
    login: () => `/login`
  },
  favorites: {
    get: () => `/favorite`,
    post: (hotelId, status) => `/favorite/${hotelId}/${status}`,
  },
  comments: {
    get: (hotelId) => `/comments/${hotelId}`,
    post: (hotelId) => `/comments/${hotelId}`,
  }
};
