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
  justify-content: space-between;
  align-items: center;
  font-weight: ${theme.font.weights.bold};
  line-height: 1;
  color: ${theme.colors.white};

  background-color: ${theme.colors.primary};

  width: ${theme.button.sizes.width.SM};
  height: ${theme.button.sizes.height.MD};
  font-size: ${theme.font.sizes.SM};

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33%;
    height: 100%;

    border: 1px solid ${theme.colors.primary};
  }

  .increase,
  .decrease {
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};

    &:hover {
      transition: all 0.3s ease-out;
      color: ${theme.colors.white};

      &:active {
        transition: all 0.2s ease-out;
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
      }
    }
  }

  .increase {
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
    &:hover {
      background-color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
    }
  }

  .decrease {
    border-top-left-radius: ${theme.borderRadius.round};
    border-bottom-left-radius: ${theme.borderRadius.round};
    &:hover {
      background-color: ${theme.colors.red};
      border: 1px solid ${theme.colors.red};
    }
  }
`;
