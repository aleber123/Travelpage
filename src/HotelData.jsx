import React from 'react';
import StarRating from './Components/Buttons/Star';

// Funktion för att hämta hotelldata med stjärnbetyg (rating)
export const getHotelData = () => {
  return HotelData.map(hotel => ({
    ...hotel,
    stars: <StarRating rating={parseFloat(hotel.rating)} />,
  }));
};

// Funktion för att hämta information om ett specifikt hotell baserat på hotelID
export const getHotel = (hotelID) => {
  return HotelData.find(hotel=> hotel.hotelID == hotelID);
}


// Array med hotell data
const HotelData = [
  {
    hotelID: 1,
    name: 'Corona Blanca',
    countery: 'Spain',
    adress: 'Avenida de Tenerife 11, 35100',
    desc: 'Alltid på Corona blanca Kids club Bekväma sviter och rum Restaurang med möjlighet att boka hel eller halv pension eller enbart frukost Flygtransfer service Pool för vuxna och barn',
    image:
      'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?w=1800&t=st=1696410164~exp=1696410764~hmac=dbfdbc7f8c999248ff52019c90050d25ab4435cb7a1e8f9d62b020f72a7435ff',
    imageMore: 'David Benyon',
    rating: 2,
    isKidsClub: true,
    isResturant: true,
    isTransfer: true,
    category: 'hotell',
    pricePerNight: 1200, 
  },
  {
    hotelID: 2,
    name: 'Acro Iris',
    countery: 'Portugal',
    adress: 'Avenida de Tenneriffe 11, 35100',
    desc: 'Alltid på Arco Iris, Kids club, Bekväma sviter och rum, Restaurang med möjlighet att boka bord via deras webbplats Flygtransfer service Pool för vuxna och barn',
    image:
      'https://img.freepik.com/free-photo/nature-holiday-travel-relaxation-resort_1203-5032.jpg?w=1800&t=st=1696405183~exp=1696405783~hmac=0c354d8bb8da2dd507e4fa5c4b9c82e16632f3841cbc5e60bb19b58b33eed385',
    imageMore: 'David Benyon',
    rating: 1,
    isKidsClub: true,
    isResturant: false,
    isTransfer: true,
    category: 'hotell',
    pricePerNight: 1500, 
  },
  {
    hotelID: 3,
    name: 'Abora Buenaventura',
    countery: 'Italy',
    adress: 'Gánigo ,6 35100 ',
    desc: 'Alltid på Corona blanca Kids club Bekväma sviter och rum Restaurang med möjlighet att boka hel eller halv pension eller enbart frukost Flygtransfer service Pool för vuxna och barn',
    image:
      'https://img.freepik.com/free-photo/umbrella-with-chair-hotel-pool-resort_74190-4001.jpg?w=1800&t=st=1696410358~exp=1696410958~hmac=59a577989c7959511048995604f04fecaecfa3449e85db22e78dae35b422951a',
    imageMore: 'David Benyon',
    rating: 4,
    isKidsClub: true,
    isResturant: true,
    isTransfer: false,
    category: 'hotellTransfer',
    pricePerNight: 1100, 
  },
  {
    hotelID: 4,
    name: 'Abora Catarina',
    countery: 'Spain',
    adress: 'Tirajana 1, 35100',
    desc: 'Alltid på Abora Catarina Kids club Bekväma sviter och rum Restaurang med möjlighet att boka hel eller halv pension eller enbart frukost Flygtransfer service Pool för vuxna och barn',
    image:
      'https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?w=1800&t=st=1696410258~exp=1696410858~hmac=4aae4ca94c51674b6a7315a297b97708e4d11b327e1b0bc6f6b32c17ec8cd03e',
    imageMore: 'David Benyon',
    rating: 4,
    isKidsClub: true,
    isResturant: false,
    isTransfer: true,
    category: 'hotellTransfer',
    pricePerNight: 1600, 
  },
  {
    hotelID: 5,
    name: 'Baobab Resort',
    countery: 'Portugal',
    adress: 'Mar Adriatico 1, 35100',
    desc: 'Alltid på Baobab Resort Kids club Bekväma sviter och rum Restaurang med möjlighet att boka bord via deras webbplats Flygtransfer service Pool för vuxna och barn',
    image:
      'https://img.freepik.com/free-photo/swimming-pool_74190-1977.jpg?w=1800&t=st=1696410067~exp=1696410667~hmac=98ce6d417363acd9892f00e3458f8ded93b975a80ebd723086b83258ced35f05',
    imageMore: 'David Benyon',
    rating: 2,
    isKidsClub: true,
    isResturant: true,
    isTransfer: true,
    category: 'hotellTransfer',
    pricePerNight: 1100, 
  },
];
