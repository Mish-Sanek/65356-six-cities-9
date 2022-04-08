import { createSlice } from '@reduxjs/toolkit';
import { Filter } from '../../consts/filters';
import { ICardProps } from '../../types';

interface IData {
  placeCardsData: ICardProps[],
  activeFilter: string,
  sortedOffers: ICardProps[],
  isOffersLoading: boolean,
  favorites: ICardProps[],
}

export const dataProcess = createSlice({
  name: 'data',
  initialState: {
    placeCardsData: [],
    activeFilter: 'Popular',
    sortedOffers: [],
    isOffersLoading: true,
    favorites: [],
  } as IData,
  reducers: {
    loadCities: (state, action) => {
      state.placeCardsData = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isOffersLoading = action.payload;
    },
    changeOffers: (state, action) => {
      const offers = action.payload.slice();
      if(offers === undefined) {
        return state;
      }
      if(state.activeFilter === Filter.Popular) {
        state.sortedOffers = offers;
      }
      if(state.activeFilter === Filter.ToHigh) {
        state.sortedOffers = offers.sort((a: ICardProps, b: ICardProps) => a.price - b.price);
      }
      if(state.activeFilter === Filter.ToLow) {
        state.sortedOffers = offers.sort((a: ICardProps, b: ICardProps) => b.price - a.price);
      }
      if(state.activeFilter === Filter.TopRated) {
        state.sortedOffers = offers.sort((a: ICardProps, b: ICardProps) => b.rating - a.rating);
      }
    },
    changeFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    changeFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const {loadCities, changeIsLoading, changeOffers, changeFilter, changeFavorites} = dataProcess.actions;
