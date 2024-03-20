import { createAppSlice } from "@/redux/createAppSlice";

type TInitialStatePopup = {
  isPopupOpen: boolean,
  isType: "add" | "search" | "callback" | ''
}
export const InitialStatePopup: TInitialStatePopup = {
  isPopupOpen: false,
  isType: ''
}

export const popupModelSlice = createAppSlice({
  name: 'create-request',
  initialState: InitialStatePopup,
  reducers: {
    openPopup(state, action) {
      state.isPopupOpen = true;
      state.isType = action.payload
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