import { css } from "styled-components";

import { desktop, mobile, tabletLandscape, tabletPortrait } from "./queries";
import fonts from "./fonts";
import spa from "./spacing";
import col from "./colors";
import sha from "./shadows";

export const spacing = spa;
export const colors = col;
export const shadows = sha;

export const grids = {
  mobile: css`
    display: grid;
    margin: 0;
    padding: 0 ${mobile.gutter}px;
    grid-gap: ${mobile.gutter}px;
    grid-template-columns: repeat(
      ${mobile.columns},
      [col-start] minmax(0, 1fr)
    );
  `,

  tabletPortrait: css`
    display: grid;
    margin: 0;
    padding: 0 ${tabletPortrait.gutter}px;
    grid-gap: ${tabletPortrait.gutter}px;
    grid-template-columns: repeat(
      ${tabletPortrait.columns},
      [col-start] minmax(0, 1fr)
    );
  `,

  tabletLandscape: css`
    display: grid;
    margin: 0;
    padding: 0 ${tabletLandscape.gutter}px;
    grid-gap: ${tabletLandscape.gutter}px;
    grid-template-columns: repeat(
      ${tabletLandscape.columns},
      [col-start] minmax(0, 1fr)
    );
  `,

  desktop: css`
    display: grid;
    margin: 0;
    padding: 0 ${desktop.gutter}px;
    grid-gap: ${desktop.gutter}px;
    grid-template-columns: repeat(
      ${desktop.columns},
      [col-start] minmax(0, 1fr)
    );
  `,
};

export const media = {
  mobile: `(max-width: ${tabletPortrait.viewport - 0.02}px)`,
  tabletPortrait: `(min-width: ${tabletPortrait.viewport}px) and (max-width: ${
    tabletLandscape.viewport - 0.02
  }px)`,
  tabletLandscape: `(min-width: ${
    tabletLandscape.viewport
  }px) and (max-width: ${desktop.viewport - 0.02}px)`,
  desktop: `(min-width: ${desktop.viewport}px)`,

  // other helpers
  minTablet: `(min-width: ${tabletPortrait.viewport}px)`,
  minTabletLandscape: `(min-width: ${tabletLandscape.viewport}px)`,
  minDesktop: `(min-width: ${desktop.viewport}px)`,
  maxTablet: `(max-width: ${tabletPortrait.breakpoint}px)`,
  maxTabletLandscape: `(max-width: ${tabletLandscape.breakpoint}px)`,
};

export const gutters = {
  zero: css`
    padding-left: 0;
    padding-right: 0;
  `,

  md: css`
    padding-left: ${spacing.md}px;
    padding-right: ${spacing.md}px;
  `,

  lg: css`
    padding-left: ${spacing.lg}px;
    padding-right: ${spacing.lg}px;
  `,
  xxl: css`
    padding-left: ${spacing.xxl}px;
    padding-right: ${spacing.xxl}px;
  `,
};

export const vertgutters = {
  md: css`
    padding-top: ${spacing.md}px;
    padding-bottom: ${spacing.md}px;
  `,

  lg: css`
    padding-top: ${spacing.lg}px;
    padding-bottom: ${spacing.lg}px;
  `,

  xl: css`
    padding-top: ${spacing.xl}px;
    padding-bottom: ${spacing.xl}px;
  `,
};

export const typo = {
  h1: css`
    font-size: ${fonts.h1.fontSize};
    font-family: ${fonts.h1.fontFamily};
    font-weight: ${fonts.h1.fontWeight};
    font-stretch: ${fonts.h1.fontStretch};
    font-style: ${fonts.h1.fontStyle};
    line-height: ${fonts.h1.lineHeight};
    letter-spacing: ${fonts.h1.letterSpacing};
    color: ${fonts.h1.color};
  `,

  h2: css`
    font-size: ${fonts.h2.fontSize};
    font-family: ${fonts.h2.fontFamily};
    font-weight: ${fonts.h2.fontWeight};
    font-stretch: ${fonts.h2.fontStretch};
    font-style: ${fonts.h2.fontStyle};
    line-height: ${fonts.h2.lineHeight};
    letter-spacing: ${fonts.h2.letterSpacing};
    color: ${fonts.h2.color};
  `,

  h3: css`
    font-size: ${fonts.h3.fontSize};
    font-family: ${fonts.h3.fontFamily};
    font-weight: ${fonts.h3.fontWeight};
    font-stretch: ${fonts.h3.fontStretch};
    font-style: ${fonts.h3.fontStyle};
    line-height: ${fonts.h3.lineHeight};
    letter-spacing: ${fonts.h3.letterSpacing};
    color: ${fonts.h3.color};
  `,
  title: css`
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.65;
    letter-spacing: normal;
    text-align: center;
    color: #3d3d3d;
  `,
  buttonText: css`
    font-size: 18px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #ffffff;
  `,
  subtitle: css`
    font-size: ${fonts.subtitle.fontSize};
    font-family: ${fonts.subtitle.fontFamily};
    font-weight: ${fonts.subtitle.fontWeight};
    font-stretch: ${fonts.subtitle.fontStretch};
    font-style: ${fonts.subtitle.fontStyle};
    line-height: ${fonts.subtitle.lineHeight};
    letter-spacing: ${fonts.subtitle.letterSpacing};
    color: ${fonts.subtitle.color};
  `,
  smallLabel: css`
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #414141;
  `,
  smallHeader: css`
    font-size: ${fonts.smallHeader.fontSize};
    font-family: ${fonts.smallHeader.fontFamily};
    font-weight: ${fonts.smallHeader.fontWeight};
    font-stretch: ${fonts.smallHeader.fontStretch};
    font-style: ${fonts.smallHeader.fontStyle};
    line-height: ${fonts.smallHeader.lineHeight};
    letter-spacing: ${fonts.smallHeader.letterSpacing};
    color: ${fonts.smallHeader.color};
  `,
  smallParagraph: css`
    font-size: ${fonts.smallParagraph.fontSize};
    font-family: ${fonts.smallParagraph.fontFamily};
    font-weight: ${fonts.smallParagraph.fontWeight};
    font-stretch: ${fonts.smallParagraph.fontStretch};
    font-style: ${fonts.smallParagraph.fontStyle};
    line-height: ${fonts.smallParagraph.lineHeight};
    letter-spacing: ${fonts.smallParagraph.letterSpacing};
    color: ${fonts.smallParagraph.color};
  `,
};

export const withGrids = css`
  ${grids.mobile};

  @media ${media.minTablet} {
    ${grids.tabletPortrait};
  }

  @media ${media.minTabletLandscape} {
    ${grids.tabletLandscape};
  }

  @media ${media.desktop} {
    ${grids.desktop};
  }
`;

export const stretch = css`
  grid-column: 1 / span 4;

  @media ${media.minTablet} {
    grid-column: 1 / span 8;
  }

  @media ${media.minTabletLandscape} {
    grid-column: 1 / span 12;
  }
`;

export const textFieldMargin = css`
  margin: 12px 0;
`;
export const textFieldPadding = css`
  padding: 0 12px;
`;
export const textFieldBorderStyling = css`
  border: 2px solid ${colors.purple5};
  border-radius: 8px;
`;
export const textFieldHeight = css`
  min-height: 46px;
`;
export const textFieldBg = css`
  background-color: ${colors.white};
`;
export const preWrap = css`
  white-space: pre-wrap; /* CSS3 */
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: -pre-wrap; /* Opera <7 */
  white-space: -o-pre-wrap; /* Opera 7 */
  word-wrap: break-word;
`;
