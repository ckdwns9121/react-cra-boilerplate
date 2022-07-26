import axios from 'axios';

export const getTodos = async () => {
  const url = '';
  const config = {
    headers: {},
  };
  return await axios.get(url, config);
};

export const getTodo = async (id: string) => {
  const url = `/${id}`;
  const config = {
    headers: {},
  };
  return await axios.get(url, config);
};

export const postTodo = async ({ id, title }: { id: string; title: string }) => {};
