import { createSlice } from '@reduxjs/toolkit';

export const tabsProcess = createSlice({
  name: 'tabs',
  initialState: {
    city: {
      title: 'Paris',
      lat: 48.85661,
      lng: 2.351499,
    },
  },
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const {changeCity} = tabsProcess.actions;
