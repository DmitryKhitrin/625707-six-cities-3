import {sortTypes} from "./sortTypes.js";

const parseRating = (rate) => (String(Math.abs(rate * 100 / 5)) + `%`);

export const parseOffers = (offers) => {
  return offers.map((offer) => {
    const {preview_image: previewImage,
      images, title,
      is_favorite: isFavorite,
      is_premium: isPremium,
      rating,
      type,
      bedrooms,
      max_adults: maxAdults,
      price,
      goods,
      host,
      location,
      description,
      id,
      city} = offer;
    return {
      previewImage,
      images,
      title,
      isFavorite,
      isPremium,
      rating: parseRating(rating),
      type,
      bedrooms,
      maxAdults,
      price,
      goods,
      host,
      location: [location.latitude, location.longitude],
      description,
      id: String(id),
      city: city.name,
    };
  });
};

export const parseCities = (offers) => {
  const citiesList = new Set();
  return offers.map((offer) => {
    const {city} = offer;
    const {name, location} = city;
    return {
      name,
      location: [parseFloat(location.latitude), parseFloat(location.longitude)],
    };
  }
  ).filter((city) => {
    if (!citiesList.has(city.name)) {
      citiesList.add(city.name);
      return true;
    }
    return false;
  });
};

const rateToNumber = (rate) => (Number(rate.replace(`%`, ``)));

export const sortOffers = (type, offersList) => {
  switch (type) {
    case sortTypes.LOW_TO_HIGHT:
      return [...offersList].sort((a, b) => a.price - b.price);
    case sortTypes.HIGHT_TO_LOW:
      return [...offersList].sort((a, b) => b.price - a.price);
    case sortTypes.TOP_RATED:
      return [...offersList].sort(
          (a, b) => rateToNumber(b.rating) - rateToNumber(a.rating)
      );
    default:
      return [...offersList];
  }
};
