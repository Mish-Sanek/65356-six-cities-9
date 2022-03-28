import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '.';
import { APIRoute } from '../consts/apiRoutes';
import { AuthorizationStatus } from '../consts/auth';
import { deleteToken, saveToken } from '../services/token';
import { IAuth, ICardProps, IUser } from '../types';
import { changeIsLoading, loadCities } from './dataProcess/dataProcess';
import { changeAuthStatus } from './userProcess/userProcess';


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

export const addToFavoritesAction = createAsyncThunk(
  'data/addToFavorite',
  async ({id, token}: any) => {
    try {
      await api.post(
        `${APIRoute.Favorite}/${id}/1`, {
          headers: {'X-Token': token},
        });
      store.dispatch(fetchHotelsData());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

export const removeFromFavoritesAction = createAsyncThunk(
  'data/removeFromFavorites',
  async ({id, token}: any) => {
    try {
      await api.post(
        `${APIRoute.Favorite}/${id}/0`, {
          headers: {'X-Token': token},
        });
      store.dispatch(fetchHotelsData());
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

export const checkAuthStatus = createAsyncThunk(
  'user/checkAuthStatus',
  async () => {
    try {
      await api.get(APIRoute.Login);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));

    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({email, password}: IAuth) => {
    try {
      const {data: {token}} = await api.post<IUser>(APIRoute.Login, {email, password});
      saveToken(token);
      store.dispatch(changeAuthStatus(AuthorizationStatus.Auth));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    try {
      await api.delete(APIRoute.LogOut);
      deleteToken();
      store.dispatch(changeAuthStatus(AuthorizationStatus.NoAuth));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
);

