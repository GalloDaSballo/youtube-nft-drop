import { useQuery } from "@apollo/client";
import { DropFromGraph } from "../types";
import { GET_LAST_DROPS } from "../utils/graphql";

const sortByClaims = (drops: DropFromGraph[]) => {
  const copy = [...drops];
  return copy.sort((a, b) => a.claims.length - b.claims.length);
};

const useDrops = (): DropFromGraph[] => {
  const { data } = useQuery(GET_LAST_DROPS, {
    variables: {},
    pollInterval: 10000,
    fetchPolicy: "cache-and-network",
  });

  return data?.drops ? sortByClaims(data?.drops).slice(0, 3) : [];
};

export default useDrops;
