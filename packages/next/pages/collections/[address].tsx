import styled from "styled-components";
import { useRouter } from "next/dist/client/router";
import NFT from "../../components/NFT";
import { CentredDeadline } from "../all";
import { Container } from "../view/[dropId]";
import { Title } from "../redeem/[dropId]";
import useMyClaims from "../../hooks/useMyClaims";
import { Claim } from "../../types";
import { getLink } from "../../utils/text";

// If time allows
const MyCollectionPage: React.FC = () => {
  const router = useRouter();
  const { address } = router.query;

  const drops = useMyClaims(String(address));
  return (
    <Container>
      <Title>{address} Collection</Title>
      {drops?.map((claim: Claim) => (
        <NFT image={getLink(claim.drop.tokenURI)} />
      ))}
    </Container>
  );
};

export default MyCollectionPage;

const Address = styled(CentredDeadline)`
  margin: 5px;
`;
