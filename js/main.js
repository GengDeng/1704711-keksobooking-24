const MAX_COUNT = 10;
const AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];
const TITLES = [
  'Продаётся',
  'Сдаётся на длительный срок',
  'Сдаётся на сутки',
];
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = [
  'Уютная квартира в центре города',
  'Солидное помещение',
  'Сдаётся за деньги',
  'Можно с котом',
  'До вас тут жили цыгане',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const Price =  {
  MIN: 2000,
  MAX: 20000};
const Room = {
  MIN: 1,
  MAX: 5};
const Guest = {
  MIN: 1,
  MAX: 9};
const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];
const locationRange = {
  latMin: 35.65000,
  latMax: 35.70000,
  lngMin: 139.70000,
  lngMax: 139.80000,
  float: 5,
};

const getRandomInteger = (max, min = 0) => Math.floor(Math.random() * (max - min )) + min;

const getRandomFloat = (min,max,numberAfterPoint) => {
  const numberAfterFormula = Math.random() * (max - min) + min;

  return numberAfterFormula.toFixed(numberAfterPoint);
};

function getArray(FEATURES) {
  const maxLength = FEATURES.length;
  const lengthOfArray = FEATURES.length - 1;
  const array = [];

  for(let i = 0; i < lengthOfArray; i++) {
    const indexOfEl = getRandomInteger(maxLength);
    const el = FEATURES[indexOfEl];

    if (!array.includes(el)) {
      array.push(el);
    }
  }
  return array;
}

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
    features: getArray(FEATURES),
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

console.log(getArray(FEATURES));
