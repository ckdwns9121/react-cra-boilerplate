import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../../apis/index";

interface Props {
  id: string;
}
export default function TodoContainer({ id }: Props) {
  const { isLoading, data, error } = useQuery(["todo", id], () => getTodo(id));
  if (isLoading) return <div>isLoading...</div>;
  if (error) return <div>Error...</div>;
  return { data };
}
