import { useQuery } from "react-query";
interface Props {
  id: string;
}

function apitest() {}
export default function AboutContainer({ id }: Props) {
  const { isLoading, data, error } = useQuery(["id", id], () => apitest());
  return <></>;
}
