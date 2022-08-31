import { loadingOpen, loadingClose } from '../store/loading';
import { useAppDispatch } from '../hooks/useStore';

export default function useLoading() {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(loadingOpen());
  };
  const handleClose = () => {
    dispatch(loadingClose());
  };

  return { handleOpen, handleClose };
}
