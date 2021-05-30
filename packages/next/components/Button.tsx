import React from "react";
import styled, { css } from "styled-components";
import MuiButton, { ButtonProps } from "@material-ui/core/Button";
import { colors, typo } from "../lib/theme/styled-helpers";

export const Button: React.FC<
  ButtonProps & { height?: string; width?: string }
> = ({ children, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
};

const PrimaryButton = styled(MuiButton)<
  ButtonProps & { height?: string | number; color?: string }
>`
  & {
    background-color: ${(props) =>
      props.color
        ? css`
            ${props.color}
          `
        : colors.black};
    height: ${(props) => (props.height ? props.height : "59px")};
    //box-sizing: border-b/ox;
    margin: 32px 0 0;
    padding: 16px 101px 20px;
    border-radius: 32px;

    :disabled {
      opacity: 0.8;
    }

    :hover {
      opacity: 0.87;
      background-color: ${(props) =>
        props.color
          ? css`
              ${props.color}
            `
          : colors.black};
    }
  }

  .MuiButton-label {
    ${typo.buttonText};
    color: white;
    text-transform: capitalize;
    font-weight: 400;
  }
`;

export const ButtonOutlined: React.FC<
  ButtonProps & { height?: string | number }
> = ({ children, ...props }) => {
  return <SecondaryButton {...props}>{children}</SecondaryButton>;
};

const SecondaryButton = styled(PrimaryButton)`
  && {
    background-color: transparent;
    height: ${(props) => (props.height ? props.height : "52px")};
    padding: 17px 30px;
    border: solid 2px #ffffff;
    border-radius: 24px;
    box-sizing: border-box;
    color: white;
  }

  .MuiButton-label {
    ${typo.buttonText};
    color: white;
    text-transform: capitalize;
    font-weight: 400;
  }
`;

export const ButtonThird: React.FC<
  ButtonProps & { height?: string | number }
> = ({ children, ...props }) => {
  return <BlackButton {...props}>{children}</BlackButton>;
};

const BlackButton = styled(PrimaryButton)`
  && {
    background-color: ${(props) =>
      props.color
        ? css`
            ${props.color}
          `
        : css`black`};
    height: ${(props) => (props.height ? props.height : "52px")};
    padding: 16px 24px;
    border: none;
    border-radius: 32px;
    box-sizing: border-box;
    color: white;
  }

  .MuiButton-label {
    ${typo.buttonText};
    color: white;
    text-transform: capitalize;
    font-weight: 400;
  }
`;
