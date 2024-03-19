import { configureStore } from '@reduxjs/toolkit';
import { popupModelSlice } from './slices/PopupModel/PopupModel';
export const store = configureStore({
  reducer: {
    PopupModel: popupModelSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;