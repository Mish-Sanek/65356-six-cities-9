import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../consts/auth';

export const userProcess = createSlice({
  name: 'user',
  initialState: {
    authorizationStatus: AuthorizationStatus.Unknown,
    data: {
      id: null,
      email: '',
      avatarUrl: '',
    },
  },
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
    changeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {changeAuthStatus, changeData} = userProcess.actions;
