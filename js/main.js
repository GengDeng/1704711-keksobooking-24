import {getRandomInteger, getRandomFloat} from './util.js';

import {AVATARS, TITLES, TYPES, FEATURES, DESCRIPTIONS, PHOTOS, CHECKS} from './mock.js';

import {Price, Room, Guest, locationRange} from './data.js';

const MAX_COUNT = 10;

const getFeatures = (features) => features.slice(0, getRandomInteger(features.length));

const getAuthor = () => (
  {
    avatar: AVATARS[getRandomInteger(AVATARS.length - 1)],
  }
);

const getLocation = () => (
  {
    lat:getRandomFloat(locationRange.latMin, locationRange.latMax, locationRange.float),
    lng:getRandomFloat(locationRange.lngMin, locationRange.lngMax, locationRange.float),
  }
);

const getOffer = () => (
  {
    title: TITLES[getRandomInteger(TITLES.length - 1)],
    address: getLocation(),
    price: getRandomInteger(Price.MIN,Price.MAX),
    type: TYPES[getRandomInteger(TYPES.length - 1)],
    rooms: getRandomInteger(Room.MIN,Room.MAX),
    guests: getRandomInteger(Guest.MIN,Guest.MAX),
    checkin: CHECKS[getRandomInteger(CHECKS.length - 1)],
    checkout: CHECKS[getRandomInteger(CHECKS.length - 1)],
    features: getFeatures(FEATURES),
    description: DESCRIPTIONS[getRandomInteger(DESCRIPTIONS.length - 1)],
    photos: PHOTOS[getRandomInteger(PHOTOS.length - 1)],
  }
);

const offers = new Array(MAX_COUNT).fill('').map(() => (
  {
    author: getAuthor(),
    offer: getOffer(),
    location: getLocation(),
  }
));

offers;
console.log(offers);
