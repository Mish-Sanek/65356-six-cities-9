import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../consts/auth';

export const userProcess = createSlice({
  name: 'user',
  initialState: {
    authorizationStatus: AuthorizationStatus.Unknown,
  },
  reducers: {
    changeAuthStatus: (state, action) => {
      state.authorizationStatus = action.payload;
    },
  },
});

export const {changeAuthStatus} = userProcess.actions;
