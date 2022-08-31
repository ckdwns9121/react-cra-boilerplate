import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import LoadingReducer from './loading';
import ModalReducer from './modal';
import SnackbarReducer from './snackbar';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    loading: LoadingReducer,
    modal: ModalReducer,
    snackbar: SnackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
