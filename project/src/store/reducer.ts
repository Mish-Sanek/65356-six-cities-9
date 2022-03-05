import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { ICardProps, PointType } from '../types';
import { changeCity } from './action';

interface CityState {
  city: PointType,
  placeCardsData: ICardProps[],
}

const initialState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
  placeCardsData: offers,
} as CityState;

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
});

export {reducer};
