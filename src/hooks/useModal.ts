import { modalOpen, modalClose } from "../store/modal";
import { useAppDispatch } from "./useStore";
import type { IModal } from "../types/modal";

type ModalPayload = Pick<IModal, "title" | "content" | "isConfirm">;

export default function useModal() {
  const dispatch = useAppDispatch();

  const handleOpen = ({ title, content, isConfirm }: ModalPayload) => {
    dispatch(modalOpen({ open: true, title, content, isConfirm }));
  };

  const handleClose = () => {
    dispatch(modalClose());
  };

  return { handleOpen, handleClose };
}
