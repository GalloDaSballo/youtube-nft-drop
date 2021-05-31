import styled from "styled-components";
import React from "react";
import Login from "../components/Login";
import NFT from "../components/NFT";
import { getAddressInCache } from "../utils/address";
import { Container } from "./view/[dropId]";
import { Title } from "./redeem/[dropId]";
import { CentredDeadline, PolygonLink } from "./all";
import useMyClaims from "../hooks/useMyClaims";
import { Claim } from "../types";
import { getLink } from "../utils/text";
import VSpacer from "../components/VSpacer";
import { StyledImageWrapper } from "../components/ImageWrapper";

// If time allows
const MyCollectionPage: React.FC = () => {
  const myAddress = getAddressInCache();
  console.log("myAddress", myAddress);

  const drops = useMyClaims(myAddress);
  return (
    <Container>
      <Title>My Collection</Title>
      {!myAddress && <Login />}
      {myAddress && (
        <>
          <Address>Your address: {myAddress}</Address>
          <PolygonLink
            target="_blank"
            rel="nofollower noreferrer"
            href={`/collections/${myAddress}`}
          >
            Link to My Collection
          </PolygonLink>
        </>
      )}
      <VSpacer />
      {drops?.map((claim: Claim) => (
        <>
          <CentredDeadline>YouTube NFT #{claim.tokenId}</CentredDeadline>
          <StyledImageWrapper src={getLink(claim.drop.tokenURI)} />
        </>
      ))}
    </Container>
  );
};

export default MyCollectionPage;

const Address = styled(CentredDeadline)`
  margin: 5px;
`;
