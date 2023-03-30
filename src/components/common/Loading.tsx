import ReactDom from "react-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRecoilState } from "recoil";
import loadingState from "../../recoil/loding";

const el = document.getElementById("loading") as HTMLElement;
export default function SimpleBackdrop() {
  const [loading, setLoading] = useRecoilState(loadingState);

  const handleClose = () => {
    setLoading(false);
  };
  return ReactDom.createPortal(
    <Backdrop sx={{ color: "#fff", zIndex: theme => theme.zIndex.drawer + 1 }} open={loading} onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>,
    el
  );
}
