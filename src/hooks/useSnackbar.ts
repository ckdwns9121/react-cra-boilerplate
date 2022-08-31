import { snackbarOpen, snackbarClose } from '../store/snackbar';
import { useAppDispatch } from '../hooks/useStore';
let timer: NodeJS.Timeout | null;

export default function useSnackbar() {
  const dispatch = useAppDispatch();

  const handleOpen = (message: string) => {
    dispatch(snackbarOpen(message));

    if (!timer) {
      timer = setTimeout(() => {
        handleClose();
        timer = null;
      }, 800);
    }
  };
  const handleClose = () => {
    dispatch(snackbarClose());
  };

  return { handleOpen, handleClose };
}
