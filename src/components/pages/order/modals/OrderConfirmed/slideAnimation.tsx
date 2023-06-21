import { keyframes } from "styled-components";

export const slideInOut = keyframes`
  0% {
    transform: translateX(-120%);
  }
  8% {
    transform: translateX(0%);
  }
  92% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(180%);
  }
`;
