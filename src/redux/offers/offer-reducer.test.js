import {offersReducer} from "./offer-reducer.js";
import {SET_CITY} from "./types.js";

// const mocData = {
//   city: `Hamburg`,
//   location: [],
//   offers: [
//     {
//       id: `1`,
//       price: 170,
//       previewImage: `img/apartment-01.jpg`,
//       rating: `93%`,
//       type: `Apartment`,
//       isPremium: true,
//       title: `Beautiful & luxurious apartment at great location`,
//       location: [52.3909553943508, 4.85309666406198]
//     },
//     {
//       id: `2`,
//       price: 130,
//       previewImage: `img/room.jpg`,
//       rating: `80%`,
//       type: `Private room`,
//       isPremium: false,
//       title: `Wood and stone place`,
//       location: [52.369553943508, 4.85309666406198]
//     }
//   ]
// };

// const locations = [
//   {
//     id: `1`,
//     cityName: `Paris`,
//     location: [48.864716, 2.349014]
//   },
//   {
//     id: `2`,
//     cityName: `Dusseldorf`,
//     location: [51.22172, 6.77616]
//   }
// ];

describe(`offerReducer`, () => {
  it(`should set city.`, () => {
    const state = offersReducer({}, {type: SET_CITY, payload: `Moscow`});
    expect(state).toEqual({city: `Moscow`});
  });
});