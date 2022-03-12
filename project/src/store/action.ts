import { createAction } from '@reduxjs/toolkit';
import { ICardProps, PointType } from '../types';

export const loadCities = createAction<ICardProps[]>('data/loadCities');

export const changeIsLoading = createAction<boolean>('data/changeIsLoading');

export const changeCity = createAction<PointType>('tabs/changeCity');

export const addCities = createAction<ICardProps[]>('main/addCities');

export const changeFilter = createAction<string>('sort/changeFilter');

export const changeOffers = createAction<ICardProps[]>('sort/changeOffers');
