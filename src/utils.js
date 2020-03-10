import {sortTypes} from "./sortTypes.js";

const parseRating = (rate) => (String(Math.abs(rate * 100 / 5)) + `%`);

const parseUser = ({avatar_url: hostPhoto, name: hostName, id, is_prop: isProp}) => ({
  hostPhoto,
  hostName,
  id,
  isProp,
});

export const parseOffer = ({
  preview_image: previewImage,
  images,
  title,
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
  city
}) => {
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
    host: parseUser(host),
    location: [location.latitude, location.longitude],
    description,
    id: String(id),
    city: city.name
  };
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

export const parseFavorites = (favorites) => {
  if (favorites.length === 0) {
    return {};
  }
  return favorites.reduce((acc, offer) => {
    const parsedOffer = parseOffer(offer);
    const {city} = parsedOffer;
    if (acc[city]) {
      acc[city] = [...acc[city], parsedOffer];
    } else {
      acc[city] = [parsedOffer];
    }
    return acc;
  }, {});
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

export const parseComment = ({
  comment,
  date,
  id,
  rating,
  user,
}) => ({
  comment,
  date,
  id: String(id),
  rating: parseRating(rating),
  user: parseUser(user)
});

