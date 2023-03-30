import { atom } from "recoil";

const loadingState = atom<boolean>({
  key: "loading",
  default: false,
});

export default loadingState;
