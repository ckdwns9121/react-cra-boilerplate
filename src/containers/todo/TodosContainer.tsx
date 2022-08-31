import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { getTodos, postTodo } from '../../api';

export default function TodosContainer() {
  const { isLoading, data, error } = useQuery(['todos'], () => getTodos());
  const queryClient = useQueryClient();

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['todos']);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;
  return (
    <>
      {data}

      <button
        onClick={() => {
          mutation.mutate({
            id: '1',
            title: 'title test',
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}
