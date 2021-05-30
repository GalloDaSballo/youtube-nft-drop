import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const SUBGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/gallodasballo/proof-of-sub";

export const client = new ApolloClient({
  uri: SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

/**
 * Retrieve Reserve Data
 */
export const GET_MY_CLAIMS = gql`
  query getClaims($address: String!) {
    claims(where: { subscriber: $address }) {
      id
      subscriber
      drop {
        id
        channelId
        tokenURI
      }
      tokenId
    }
  }
`;

export const GET_PROTOCOL_DATA = gql`
  query getProtocol($version: String!) {
    protocol(id: $version) {
      lifetimeUsers
      lifetimeTreasury
      lifetimeDeposited
      lifetimeHarvested
    }
  }
`;

export const GET_LAST_DROPS = gql`
  query getDrops {
    drops(first: 20) {
      id
      channelId
      tokenURI
      claims {
        id
      }
    }
  }
`;
