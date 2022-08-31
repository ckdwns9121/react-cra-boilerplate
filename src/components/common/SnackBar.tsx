import { Snackbar as MuiSnackbar } from '@mui/material';
import Slide, { SlideProps } from '@mui/material/Slide';
import ReactDom from 'react-dom';
import { useAppSelector } from '../../hooks/useStore';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
const el = document.getElementById('modal') as HTMLElement;
export default function DirectionSnackbar() {
  const { open, message } = useAppSelector(state => state.snackbar);
  return ReactDom.createPortal(
    <MuiSnackbar
      open={open}
      TransitionComponent={TransitionUp}
      message={message}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />,
    el
  );
}
