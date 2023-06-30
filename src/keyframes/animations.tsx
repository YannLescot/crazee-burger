import { keyframes, css } from "styled-components";

export const slideFromBottom = keyframes`
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
`;

export const slideFromLeft = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const slideFromRight = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }   
    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const menuCardAnimation = css`
  .card-enter {
    opacity: 0;
    transform: translateX(70%);
  }

  .card-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: 500ms;
  }

  .card-exit {
    opacity: 1;
  }
  .card-exit-active {
    opacity: 0;
    transition: 500ms;
  }
`;

export const basketCardAnimation = css`
  .basket-card-enter,
  .basket-card-appear {
    opacity: 0;
    transform: translateX(-100px);
  }
  .basket-card-enter-active,
  .basket-card-appear-active {
    opacity: 1;
    transform: translateX(0px);
    transition: 0.3s;
  }

  .basket-card-exit {
    opacity: 1;
    transform: translateX(0px);
  }

  .basket-card-exit-active {
    opacity: 0;
    transform: translateX(100px);
    transition: 0.3s;
  }
`;

export const casinoTextAnimation = css`
  .casino-text-animated-enter {
    transform: translateY(100%);
  }
  .casino-text-animated-enter-active {
    transform: translateY(0%);
    transition: 300ms;
  }

  .casino-text-animated-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
  }
  .casino-text-animated-exit-active {
    transform: translateY(-100%);
    transition: 300ms;
  }
`;
