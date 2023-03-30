import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import SnackbarReducer from "./snackbar";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    snackbar: SnackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
