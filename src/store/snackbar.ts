import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SnackbarState {
  open: boolean;
  message: string;
  variant?: string;
  up?: boolean;
}

const initialState: SnackbarState = {
  open: false,
  message: "",
  variant: "",
};

export const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    snackbarOpen: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.message = action.payload;
    },
    snackbarClose: state => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { snackbarOpen, snackbarClose } = snackbarSlice.actions;
export default snackbarSlice.reducer;
