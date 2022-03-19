import { combineReducers } from '@reduxjs/toolkit';
import { dataProcess } from './dataProcess/dataProcess';
import { tabsProcess } from './tabsProcess/tabsProcess';
import { userProcess } from './userProcess/userProcess';


export const rootReducer = combineReducers({
  user: userProcess.reducer,
  data: dataProcess.reducer,
  tabs: tabsProcess.reducer,
});
