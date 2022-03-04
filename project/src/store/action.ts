import { createAction } from '@reduxjs/toolkit';
import { PointType } from '../types';

export const changeCity = createAction<PointType>('tabs/changeCity');
