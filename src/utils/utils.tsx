/* eslint-disable camelcase */
import {SortTypes} from "./sort-types";

export type Location = {
  latitude: number;
  longitude: number;
}

export type City = {
name: string;
location: Location;
}

export type ParsedCity = {
  name: string;
  location: [number, number]
}

const parseCity = ({name, location}: City): ParsedCity => ({
  name,
  location: [location.latitude, location.longitude],
});

const parseRating = (rate: number): string => (String(Math.abs(rate * 100 / 5)) + `%`);

export type User = {
  avatar_url: string;
  name: string;
  id: number;
  is_pro: boolean;
}

export type ParsedUser = {
  personPhoto: string;
  personName: string;
  id: number;
  isPro: boolean;
}

const parseUser = ({avatar_url: personPhoto, name: personName, id, is_pro: isPro}: User): ParsedUser => ({
  personPhoto,
  personName,
  id,
  isPro,
});

export type OfferCard = {
  preview_image: string;
  images: string[];
  title: string;
  is_favorite: boolean;
  is_premium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  max_adults: number;
  price: number;
  goods: string[];
  host: User;
  location: Location;
  description: string;
  id: number;
  city: City;
}

export type ParsedOfferCard = {
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: string;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: ParsedUser;
  location: [number, number]
  description: string;
  id: string;
  city: ParsedCity;
}

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
}: OfferCard): ParsedOfferCard => {
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
    city: parseCity(city)
  };
};

export const parseCities = (offers: OfferCard[]): ParsedCity[] => {
  const citiesList = new Set();
  return offers.map((offer) => {
    const {city} = offer;
    return parseCity(city);
  }
  ).filter((city) => {
    if (!citiesList.has(city.name)) {
      citiesList.add(city.name);
      return true;
    }
    return false;
  });
};


export type FavoriteMap = Record<string, ParsedOfferCard[]>;

export const parseFavorites = (favorites: OfferCard[]): FavoriteMap => {
  if (favorites.length === 0) {
    return {};
  }
  return favorites.reduce((acc, offer) => {
    const parsedOffer = parseOffer(offer);
    const {city: {
      name,
    }} = parsedOffer;
    if (acc[name]) {
      acc[name] = [...acc[name], parsedOffer];
    } else {
      acc[name] = [parsedOffer];
    }
    return acc;
  }, {} as FavoriteMap);
};

const rateToNumber = (rate: string): number => (Number(rate.replace(`%`, ``)));

export const sortOffers = (type: string, offersList: ParsedOfferCard[]): ParsedOfferCard[] => {
  switch (type) {
    case SortTypes.LOW_TO_HIGHT:
      return [...offersList].sort((a, b) => a.price - b.price);
    case SortTypes.HIGHT_TO_LOW:
      return [...offersList].sort((a, b) => b.price - a.price);
    case SortTypes.TOP_RATED:
      return [...offersList].sort(
          (a, b) => rateToNumber(b.rating) - rateToNumber(a.rating)
      );
    default:
      return [...offersList];
  }
};

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type ParsedComment = {
  comment: string;
  date: string;
  id: string;
  rating: string;
  user: ParsedUser;
}

export const parseComment = ({
  comment,
  date,
  id,
  rating,
  user,
}: Comment): ParsedComment => ({
  comment,
  date,
  id: String(id),
  rating: parseRating(rating),
  user: parseUser(user)
});

