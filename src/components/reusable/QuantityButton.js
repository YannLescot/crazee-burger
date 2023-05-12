import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

const QuantityButton = ({ label, onIncrease, onDecrease }) => {
  return (
    <QuantityButtonStyled>
      <div className="decrease" onClick={onDecrease}>
        -
      </div>
      <div className="quantity">{label}</div>
      <div className="increase" onClick={onIncrease}>
        +
      </div>
    </QuantityButtonStyled>
  );
};

export default QuantityButton;

const QuantityButtonStyled = styled.div`
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};

  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${theme.font.weights.bold};
  line-height: 1;
  color: ${theme.colors.white};

  width: ${theme.button.sizes.width.SM};
  height: ${theme.button.sizes.height.MD};
  font-size: ${theme.font.sizes.SM};

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.33%;
    height: 100%;
  }

  .increase,
  .decrease {
    box-sizing: border-box;
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease-out;
      color: ${theme.colors.primary};
      background-color: ${theme.colors.white};

      &:active {
        transition: all 0.2s ease-out;
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
  }

  .quantity {
    box-sizing: border-box;
    border: 1px solid ${theme.colors.primary};
    border-right: none;
    border-left: none;

    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
  }

  .increase {
    border-left: none;
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
  }

  .decrease {
    border-right: none;
    border-top-left-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: ${theme.borderRadius.round};
  }
`;
