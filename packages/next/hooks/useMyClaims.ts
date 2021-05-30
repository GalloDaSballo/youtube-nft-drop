import { useQuery } from "@apollo/client";
import { Claim } from "../types";
import { GET_MY_CLAIMS } from "../utils/graphql";

const useMyClaims = (address: string): Claim[] | null => {
  const { data } = useQuery(GET_MY_CLAIMS, {
    variables: { address },
    pollInterval: 10000,
    fetchPolicy: "cache-and-network",
  });

  return data?.claims || null;
};

export default useMyClaims;
