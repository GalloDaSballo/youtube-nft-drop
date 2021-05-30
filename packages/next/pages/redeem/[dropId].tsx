import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import Login from "../../components/Login";
import { useUser } from "../../context/UserContext";
import { API_URL } from "../../utils/constants";
import { ButtonThird } from "../../components/Button";
import { typo } from "../../lib/theme/styled-helpers";
import { fetcher } from "../all";
import ImageWrapper from "../../components/ImageWrapper";

const RedeemSingleTokenPage: React.FC = () => {
  const router = useRouter();

  const [address, setAddress] = useState<string | null>(null);
  const [cannotRedeem, setCannotRedeem] = useState(false);
  const user = useUser();
  const { dropId } = router.query;
  const { data: drop, error } = useSWR(`${API_URL}/drops/${dropId}`, fetcher);

  console.log("drop", drop);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios({
        method: "post",
        url: `${API_URL}/claim`,
        data: {
          drop: dropId,
          address: address || user.magic.userMetadata.publicAddress,
          accessToken: user.oauth.accessToken,
        },
      });
      console.log("res", res);
      if (res.status === 200) {
        console.log("Redeemable!");
        router.push({
          pathname: "/view/[dropId]",
          query: {
            dropId,
          },
        });
      }
    } catch (e) {
      setCannotRedeem(true);
    }
  };

  if (!drop) return null;

  return (
    <Container>
      {user && (
        <>
          <Title>Redeem your Drop by</Title>
          <TitleUnderLineRed>{drop[0]?.channelName}</TitleUnderLineRed>

          <ImageWrapper src={drop[0].imageURI} />
        </>
      )}
      {!cannotRedeem ? (
        <>
          {!user && (
            <div>
              <h3>Step 1: Log in to your YouTube Account</h3>
            </div>
          )}
          {user && (
            <>
              <h3>Step 2: Claim your NFT!</h3>
              <form onSubmit={handleSubmit}>
                <ButtonThird type="submit">Verify Subscription</ButtonThird>
              </form>
            </>
          )}
        </>
      ) : (
        <h3>Unfortunately you do not meet the conditions to claim this NFT.</h3>
      )}
    </Container>
  );
};

export default RedeemSingleTokenPage;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const Title = styled.div`
  ${typo.title};
`;

export const TitleUnderLineRed = styled.div`
  ${typo.title};
  color: #fc2e34;
  //text-decoration: underline;
  //text-decoration-color: #fc2e34;
`;
