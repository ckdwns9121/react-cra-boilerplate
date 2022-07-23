import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface LoadingState {
  open: boolean;
}
const initialState: LoadingState = {
  open: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loadingOpen: state => {
      state.open = true;
    },
    loadingClose: state => {
      state.open = false;
    },
  },
});

export const { loadingOpen, loadingClose } = loadingSlice.actions;
export default loadingSlice.reducer;
