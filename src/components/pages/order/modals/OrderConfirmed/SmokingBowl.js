import React from "react";
import { TbBowl } from "react-icons/tb";
import styled, { keyframes } from "styled-components";
import { theme } from "../../../../../theme";

const SmokingBowl = () => {
  return (
    <SmokingBowlStyled>
      <div className="bowl">
        <div className="smoke">
          <div className="smoke1"></div>
          <div className="smoke2"></div>
          <div className="smoke3"></div>
        </div>
        <TbBowl className="icon" />
      </div>
    </SmokingBowlStyled>
  );
};

export default SmokingBowl;

const smokeAnimation = keyframes`
  0% {
    transform: translateY(60px);
    background-position: 0% 50%;
  }
  50% {
    transform: translateY(60px);
    background-position: 100% 50%;
    filter: blur(6.5px);
  }
  100% {
    transform: translateY(60px);
    background-position: 0% 50%;
  }
`;

const SmokingBowlStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  .icon {
    font-size: 220px;
    color: ${theme.colors.white};
  }

  .smoke {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    gap: 20px;

    .smoke1,
    .smoke2,
    .smoke3 {
      background-color: ${theme.colors.white};
      width: 5px;
      height: 90px;

      background: linear-gradient(
        300deg,
        ${theme.colors.primary},
        ${theme.colors.white},
        ${theme.colors.primary},
        ${theme.colors.white}
      );
      background-size: 200% 175%;

      filter: blur(5.5px);

      animation: ${smokeAnimation} 2s ease-in-out infinite;
    }

    .smoke2 {
      height: 110px;
      animation: ${smokeAnimation} 2.5s ease-in-out infinite;
    }
  }
`;
