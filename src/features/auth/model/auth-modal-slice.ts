import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AuthTab = "sign-in" | "sign-up";

interface AuthModalState {
  isOpen: boolean;
  activeTab: AuthTab;
}

const initialState: AuthModalState = {
  isOpen: false,
  activeTab: "sign-in",
};

export const authModalSlice = createSlice({
  name: "authModal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<AuthTab>) => {
      state.isOpen = true;
      state.activeTab = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setActiveTab: (state, action: PayloadAction<AuthTab>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { openModal, closeModal, setActiveTab } = authModalSlice.actions;
export const authModalReducer = authModalSlice.reducer;
