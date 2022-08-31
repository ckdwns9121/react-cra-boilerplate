import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '../../hooks/useStore';
import useLoading from '../../hooks/useLoading';
import ReactDom from 'react-dom';

const el = document.getElementById('loading') as HTMLElement;
export default function SimpleBackdrop() {
  const { open } = useAppSelector(state => state.loading);
  const { handleClose } = useLoading();
  return ReactDom.createPortal(
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>,
    el
  );
}
