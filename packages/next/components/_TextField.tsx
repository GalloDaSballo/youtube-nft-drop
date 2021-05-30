import React from "react";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";
import styled from "styled-components";
import {
  textFieldBg,
  textFieldBorderStyling,
  textFieldHeight,
  textFieldMargin,
  textFieldPadding,
} from "../lib/theme/styled-helpers";

export default styled(MuiTextField).attrs((props) => ({
  InputProps: { disableUnderline: true },
  ...props,
}))`
  .MuiInputBase-input {
    padding: 13px 0;
    width: 100%;
    border-radius: 8px;
    //border: solid 1px #a4b2bc;
    background-color: #ffffff;
    color: #bbbbbb;
  }

  && {
    ${textFieldHeight};
    ${textFieldBg};
    ${textFieldMargin};
    ${textFieldBorderStyling};
    ${textFieldPadding};
  }
`;
