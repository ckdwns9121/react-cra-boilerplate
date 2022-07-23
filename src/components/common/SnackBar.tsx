import Snackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";

import { useAppSelector } from "../../hooks/useStore";

type TransitionProps = Omit<SlideProps, "direction">;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}
//  variant 추가해야함
export default function DirectionSnackbar() {
  const { open, message } = useAppSelector(state => state.snackbar);
  return <Snackbar open={open} TransitionComponent={TransitionUp} message={message} anchorOrigin={{ vertical: "bottom", horizontal: "center" }} />;
}
