import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getTodo } from "../../apis/";
interface Props {
  id: string;
}

export default function AboutContainer({ id }: Props) {
  const { isLoading, data, error } = useQuery(["id", id], () => getTodo(id));
  return <></>;
}
