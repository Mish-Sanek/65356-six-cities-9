import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { ICardProps } from '../types';
import { changeIsLoading, loadCities } from './action';

export const fetchHotelsData = createAsyncThunk(
  'data/loadCities',
  async () => {
    try {
      const {data, request} = await api.get<ICardProps[]>('/hotels');
      store.dispatch(loadCities(data));

      if(request.readyState === 4) {
        store.dispatch(changeIsLoading(false));
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);
