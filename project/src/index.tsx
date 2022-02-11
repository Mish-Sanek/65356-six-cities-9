import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { ICardProps } from './types/CardTypes';

const placeCardsData: ICardProps[] = [
  {
    id: 1,
    isPremium: true,
    imgUrl: 'img/apartment-01.jpg',
    priceValue: 120,
    priceText: 'night',
    isBookmarked: false,
    rating: 4,
    cardName: 'Beautiful & luxurious apartment at great location',
    cardType: 'Apartment',
  },
  {
    id: 2,
    isPremium: false,
    imgUrl: 'img/room.jpg',
    priceValue: 80,
    priceText: 'night',
    isBookmarked: true,
    rating: 4,
    cardName: 'Wood and stone place',
    cardType: 'Private room',
  },
  {
    id: 3,
    isPremium: false,
    imgUrl: 'img/apartment-02.jpg',
    priceValue: 132,
    priceText: 'night',
    isBookmarked: false,
    rating: 4,
    cardName: 'Canal View Prinsengracht',
    cardType: 'Apartment',
  },
  {
    id: 4,
    isPremium: true,
    imgUrl: 'img/apartment-03.jpg',
    priceValue: 180,
    priceText: 'night',
    isBookmarked: false,
    rating: 4,
    cardName: 'Nice, cozy, warm big bed apartment',
    cardType: 'Apartment',
  },
  {
    id: 5,
    isPremium: false,
    imgUrl: 'img/room.jpg',
    priceValue: 80,
    priceText: 'night',
    isBookmarked: true,
    rating: 4,
    cardName: 'Wood and stone place',
    cardType: 'Private room',
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App placeCardsData={placeCardsData} />
  </React.StrictMode>,
  document.getElementById('root'));
