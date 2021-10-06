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
const PRICES =[5000, 7000, 8000, 10000, 15000, 16000, 17000,18000,20000];
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
const ROOMS = [1, 2, 3, 4, 5];
const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'dishwasher, parking, washer, conditioner',
  'wifi, dishwasher, elevator, conditioner',
  'wifi, dishwasher, parking, conditioner',
  'wifi, dishwasher, parking,',
  'wifi, dishwasher, washer, elevator, conditioner',
  'dishwasher, washer, elevator, conditioner',
  'wifi, washer, elevator, conditioner',
  'wifi, dishwasher, parking, washer, elevator,',
  'wifi, dishwasher, parking, conditioner',
  'wifi, dishwasher, parking, washer, elevator, conditioner',
];
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
const getRandomInteger = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomFloat = (min,max,numberAfterPoint) => {
  const numberAfterFormula = Math.random() * (max - min + 1) + min;

  return numberAfterFormula.toFixed(numberAfterPoint);
};

const getAuthor = () => (
  {
    avatar: AVATARS[getRandomInteger(AVATARS.length - 1)],
  }
);

const getLocation = () => (
  {
    lat:getRandomFloat(35.65000, 35.70000, 5),
    lng:getRandomFloat(139.70000, 139.80000, 5),
  }
);

const getOffer = () => (
  {
    title: TITLES[getRandomInteger(TITLES.length - 1)],
    address: getLocation(),
    price: PRICES[getRandomInteger(PRICES.length - 1)],
    type: TYPES[getRandomInteger(TYPES.length - 1)],
    rooms: ROOMS[getRandomInteger(ROOMS.length - 1)],
    guests: GUESTS[getRandomInteger(GUESTS.length - 1)],
    checkin: CHECKS[getRandomInteger(CHECKS.length - 1)],
    checkout: CHECKS[getRandomInteger(CHECKS.length - 1)],
    features: FEATURES[getRandomInteger(FEATURES.length - 1)],
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
