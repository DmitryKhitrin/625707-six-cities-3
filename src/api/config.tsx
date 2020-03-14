export const request = {
  hotels: {
    get: () => `/hotels`
  },
  nearby: {
    get: (hotelId: string) => `/hotels/${hotelId}/nearby`
  },
  login: {
    get: () => `/login`
  },
  favorites: {
    get: () => `/favorite`,
    post: (hotelId: string, status: string) => `/favorite/${hotelId}/${status}`,
  },
  comments: {
    get: (hotelId: string) => `/comments/${hotelId}`,
    post: (hotelId: string) => `/comments/${hotelId}`,
  }
};
