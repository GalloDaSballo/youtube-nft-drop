import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";
import React from "react";
import { Drop } from "../types";
import { API_URL, PROOF_OF_SUM_CONTRACT } from "../utils/constants";
import { formatDate } from "../utils/date";
import ImageWrapper from "../components/ImageWrapper";
import { Container } from "./view/[dropId]";
import { Title, TitleUnderLineRed } from "./redeem/[dropId]";
import { typo } from "../lib/theme/styled-helpers";
import { ChannelAvatar } from "./new";
import { getLink } from "../utils/text";

export const fetcher = (url) => fetch(url).then((res) => res.json());
// If time allows
const AllDropsPage: React.FC = () => {
  const { data, error } = useSWR(`${API_URL}/drops`, fetcher);
  console.log("data", data);
  return (
    <Container>
      <h2>All Drops</h2>
      {/* <h3> */}
      <PolygonLink
        target="_blank"
        rel="nofollower noreferrer"
        href={`https://explorer-mainnet.maticvigil.com/address/${PROOF_OF_SUM_CONTRACT}`}
      >
        Check out the genesis contract on Polygon
      </PolygonLink>
      {/* </h3> */}

      {data?.map((drop: Drop) => (
        <Link href={`/redeem/${drop.id}`}>
          <a>
            <div>
              <CellRow>
                <CellColumn>
                  <ChannelAvatar src={getLink(drop.channelThumb)} />
                </CellColumn>
                <CellColumn>
                  <Title>{drop.channelName}</Title>
                  <CentredDeadline>YouTube NFT #{drop.id}</CentredDeadline>
                  <CentredDeadline>
                    Subscribe By: {formatDate(drop.endDate)}
                  </CentredDeadline>
                </CellColumn>
              </CellRow>

              <ImageWrapper src={drop.imageURI} />
            </div>
          </a>
        </Link>
      ))}
    </Container>
  );
};

export default AllDropsPage;

export const CentredDeadline = styled.div`
  ${typo.smallLabel};
  text-align: center;
`;
const PolygonLink = styled.a`
  ${typo.title};
  color: #fc2e34;
  text-align: center;
  margin-bottom: 20px;
  :hover {
    cursor: pointer;
  }
`;
const CellRow = styled.div`
  display: flex;
  padding: 0 0 0 28px;
  width: 90%;
  justify-content: space-between;
  align-items: center;
`;
const CellColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
