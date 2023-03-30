import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import type { IModal } from "../@types/modal";
const initialState: IModal = {
  open: false,
  title: "",
  content: "",
  isConfirm: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state, action: PayloadAction<IModal>) => {
      const { title, content, isConfirm = false } = action.payload;
      state.open = true;
      state.title = title;
      state.content = content;
      state.isConfirm = isConfirm;
    },
    modalClose: state => {
      state = initialState;
    },
  },
});

export const { modalOpen, modalClose } = modalSlice.actions;
export default modalSlice.reducer;
