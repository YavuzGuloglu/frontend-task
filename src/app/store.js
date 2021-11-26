import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/slices/slice';

export const store = configureStore({
  reducer: {
    selection: reducer,
  },
});
