import React from "react";
import { colors } from "../theme/styled-helpers";

export interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

const TwitterLogo = ({ color = colors.white, ...props }: IconProps) => (
  <svg width="33.466" height="27.191" viewBox="0 0 33.466 27.191" {...props}>
    <g>
      <g>
        <path
          fill="#fff"
          d="M33.466 51.219a14.3 14.3 0 0 1-3.953 1.081 6.822 6.822 0 0 0 3.018-3.792 13.711 13.711 0 0 1-4.351 1.661 6.86 6.86 0 0 0-11.868 4.691 7.064 7.064 0 0 0 .159 1.565A19.419 19.419 0 0 1 2.33 49.251a6.863 6.863 0 0 0 2.108 9.17 6.776 6.776 0 0 1-3.1-.845v.075a6.892 6.892 0 0 0 5.5 6.741 6.847 6.847 0 0 1-1.8.226 6.066 6.066 0 0 1-1.3-.117 6.926 6.926 0 0 0 6.411 4.779 13.785 13.785 0 0 1-8.507 2.926A12.852 12.852 0 0 1 0 72.112a19.315 19.315 0 0 0 10.525 3.079c12.625 0 19.527-10.458 19.527-19.523 0-.3-.01-.6-.025-.887a13.687 13.687 0 0 0 3.439-3.562z"
          transform="translate(0 -48) translate(0 48) translate(0 -48)"
        />
      </g>
    </g>
  </svg>
);

export default TwitterLogo;
