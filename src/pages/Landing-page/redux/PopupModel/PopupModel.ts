import { createSlice } from "@reduxjs/toolkit";

export const InitialStatePopup = {
  isPopupOpen: false,
  isType: 'callback'
}

export const createRequestModel = createSlice({
  name: 'create-request',
  initialState: InitialStatePopup,
  reducers: {
    openPopup(state) {
      state.isPopupOpen = true;
    },
    closePopup(state) {
      state.isPopupOpen = false;
    }
  }
})

export const {
  openPopup,
  closePopup,
} = createRequestModel.actions;