import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../consts/auth';
import { Filter } from '../consts/filters';
import { ICardProps, PointType } from '../types';
import { changeAuthStatus, changeCity, changeFilter, changeIsLoading, changeOffers, loadCities } from './action';

interface CityState {
  city: PointType,
  placeCardsData: ICardProps[],
  activeFilter: string,
  sortedOffers: ICardProps[],
  isOffersLoading: boolean,
  authorizationStatus: AuthorizationStatus
}

const initialState = {
  city: {
    title: 'Paris',
    lat: 48.85661,
    lng: 2.351499,
  },
  placeCardsData: [],
  activeFilter: 'Popular',
  sortedOffers: [],
  isOffersLoading: true,
  authorizationStatus: AuthorizationStatus.Unknown,
} as CityState;

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadCities, (state, action) => {
    state.placeCardsData = action.payload;
  });
  builder.addCase(changeIsLoading, (state, action) => {
    state.isOffersLoading = action.payload;
  });
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(changeFilter, (state, action) => {
    state.activeFilter = action.payload;
  });
  builder.addCase(changeOffers, (state, action) => {
    if(state.activeFilter === Filter.Popular && action.payload !== undefined) {
      state.sortedOffers = action.payload;
    }
    if(state.activeFilter === Filter.ToHigh && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => a.price - b.price);
    }
    if(state.activeFilter === Filter.ToLow && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => b.price - a.price);
    }
    if(state.activeFilter === Filter.TopRated && action.payload !== undefined) {
      state.sortedOffers = action.payload.sort((a: ICardProps, b: ICardProps) => b.rating - a.rating);
    }
  });
  builder.addCase(changeAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});

export {reducer};
