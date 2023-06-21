import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface QuantityButtonProps {
  label: number;
  onIncrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDecrement?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const QuantityButton = ({
  label,
  onIncrement,
  onDecrement,
}: QuantityButtonProps) => {
  return (
    <QuantityButtonStyled>
      <button className="decrease" onClick={onDecrement}>
        -
      </button>
      <div className="quantity">{label}</div>
      <button className="increase" onClick={onIncrement}>
        +
      </button>
    </QuantityButtonStyled>
  );
};

export default QuantityButton;

const QuantityButtonStyled = styled.div`
  box-sizing: border-box;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  background-color: ${theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  width: ${theme.button.sizes.width.SM};
  height: ${theme.button.sizes.height.MD};

  div,
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 33.33%;
    height: 100%;

    font-size: ${theme.font.sizes.SM};
    color: ${theme.colors.white};
    font-weight: ${theme.font.weights.bold};
    line-height: 1;

    box-sizing: border-box;
    background-color: ${theme.colors.primary};
    border: none;
  }

  .increase,
  .decrease {
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
