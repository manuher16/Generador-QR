import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import sessionReducer from './modules/session';
import snackbar from './modules/Snackbar'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
    snackbar: snackbar
  },
});
