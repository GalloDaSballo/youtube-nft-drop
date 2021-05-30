import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@material-ui/core";
import useSWR from "swr";
import Login from "../../components/Login";
import { useUser } from "../../context/UserContext";
import { API_URL } from "../../utils/constants";
import { Button, ButtonThird } from "../../components/Button";
import { fetcher } from "../all";
import { Title, TitleUnderLineRed } from "../redeem/[dropId]";
import TwitterLogo from "../../lib/assets/TwitterLogo";
import HSpacer from "../../components/HSpacer";
import { encode, getLink } from "../../utils/text";
import ImageWrapper from "../../components/ImageWrapper";

const RedeemSingleTokenPage: React.FC = () => {
  const router = useRouter();

  const [address, setAddress] = useState<string | null>(null);
  const user = useUser();
  const { dropId } = router.query;
  const { data: drop, error } = useSWR(`${API_URL}/drops/${dropId}`, fetcher);

  console.log("drop", drop);

  const handleSubmit = async (e: FormEvent) => {
    router.push("twitter");
  };
  const createTweetContent = (channelName: string, imageURI: string): string =>
    `New YouTube NFT Drop by ${channelName}, I claimed mine!
    
    ${getLink(imageURI)}`;

  if (!drop) return null;

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Container>
      {user && (
        <>
          <Title>You Redeemed your Drop by</Title>
          <TitleUnderLineRed>{drop[0]?.channelName}</TitleUnderLineRed>

          <ImageWrapper src={drop[0].imageURI} />
        </>
      )}
      {!user && (
        <div>
          <h3>Step 1: Login into your Youtube Account</h3>
          <Login />
        </div>
      )}
      {user && (
        <>
          <form onSubmit={handleSubmit}>
            <TwitterButton
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("drop here", drop);
                const newWindow = window.open(
                  `https://twitter.com/intent/tweet?text=${encode(
                    createTweetContent(drop[0].channelName, drop[0].imageURI)
                  )}`,
                  "_blank",
                  "noopener,noreferrer"
                );
                if (newWindow) newWindow.opener = null;
              }}
              color="fc2e34"
              type="submit"
            >
              <TwitterLogo />
              <HSpacer />
              Share on Twitter
            </TwitterButton>
          </form>
        </>
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
`;
const TwitterButton = styled(ButtonThird)`
  background: #fc2e34;
`;
