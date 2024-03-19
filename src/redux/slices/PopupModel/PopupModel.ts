import { createAppSlice } from "@/redux/createAppSlice";

type TInitialStatePopup = {
  isPopupOpen: boolean,
  isType: string
}
export const InitialStatePopup: TInitialStatePopup = {
  isPopupOpen: false,
  isType: 'callback'
}

export const popupModelSlice = createAppSlice({
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
} = popupModelSlice.actions;