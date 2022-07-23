import { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
// import { addTodo } from 'src/api/todos';
// import { TodoType } from 'src/types/todoType';

export default function useAddTodoMutation<T, D>(): UseMutationResult<T, AxiosError, D> {
  return useMutation(addTodo, {
    onSuccess: data => {
      console.log(data); // mutation 이 성공하면 response를 받을 수 있다.
    },
    onError: error => {
      // mutation 이 에러가 났을 경우 error를 받을 수 있다.
      console.error(error);
    },
  });
}
