import axios from "axios";

export const apiTest = async () => {
  const url = "";
  const config = {
    headers: {},
  };
  return await axios.get(url, config);
};
