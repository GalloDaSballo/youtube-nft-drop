import React from "react";
import styled from "styled-components";
import { ImageProps } from "next/image";
import { getLink } from "../utils/text";

const ImageWrapper: React.FC<{ alt?: string; src: string }> = ({
  src,
  ...props
}) => {
  const link = getLink(src);
  console.log("link", link);
  return <StyledImageWrapper src={link} alt="Image for drop" {...props} />;
};

export default ImageWrapper;

export const StyledImageWrapper = styled.img`
  margin: 20px;
  max-width: 400px;
  height: auto;
  border-radius: 25px;
  box-shadow: 0 8px 19px 0 rgba(0, 0, 0, 0.07);
  @media only screen and (max-width: 700px) {
    max-width: 80%;
  }
`;
