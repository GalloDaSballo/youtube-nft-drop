import styled from "styled-components";
import Login from "../components/Login";
import NFT from "../components/NFT";
import { getAddressInCache } from "../utils/address";
import { Container } from "./view/[dropId]";
import { Title } from "./redeem/[dropId]";
import { CentredDeadline } from "./all";
import useMyClaims from "../hooks/useMyClaims";
import { Claim } from "../types";
import { getLink } from "../utils/text";

// If time allows
const MyCollectionPage: React.FC = () => {
  const myAddress = getAddressInCache();
  console.log("myAddress", myAddress);

  const drops = useMyClaims(myAddress);
  return (
    <Container>
      <Title>My Collection</Title>
      {!myAddress && <Login />}
      {myAddress && <Address>Your address: {myAddress}</Address>}
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
