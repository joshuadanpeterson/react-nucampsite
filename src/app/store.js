import { campsitesReducer } from '../features/campsites/campsitesSlice.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
},
});