import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import React from "react";
import NFT from "../../components/NFT";
import { CentredDeadline } from "../all";
import { Container } from "../view/[dropId]";
import { Title } from "../redeem/[dropId]";
import useMyClaims from "../../hooks/useMyClaims";
import { Claim } from "../../types";
import { getLink } from "../../utils/text";
import { StyledImageWrapper } from "../../components/ImageWrapper";
import VSpacer from "../../components/VSpacer";

// If time allows
const MyCollectionPage: React.FC = () => {
  const router = useRouter();
  const { address } = router.query;

  const drops = useMyClaims(String(address));
  return (
    <Container>
      <Title>{address} Collection</Title>
      <VSpacer height={24} />
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
