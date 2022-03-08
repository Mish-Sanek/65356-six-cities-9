import { createReducer } from '@reduxjs/toolkit';
import { offers } from '../mocks/offers';
import { ICardProps, PointType } from '../types';
import { changeCity, changeFilter, changeOffers } from './action';

interface CityState {
  city: PointType,
  placeCardsData: ICardProps[],
  activeFilter: string,
  sortedOffers: ICardProps[],
}

const initialState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
  placeCardsData: offers,
  activeFilter: 'Popular',
  sortedOffers: [],
} as CityState;

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(changeFilter, (state, action) => {
    state.activeFilter = action.payload;
  });
  builder.addCase(changeOffers, (state, action) => {
    if(state.activeFilter === 'Popular' && action.payload !== undefined) {
      state.sortedOffers = action.payload;
    }
    if(state.activeFilter === 'Price: low to high' && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => a.price - b.price);
    }
    if(state.activeFilter === 'Price: high to low' && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => b.price - a.price);
    }
    if(state.activeFilter === 'Top rated first' && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => b.rating - a.rating);
    }
  });
});

export {reducer};
