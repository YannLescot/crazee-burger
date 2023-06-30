import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { RiDeleteBin2Line } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import Button from "../../../../reusable/Button";
import OrderContext from "../../../../../context/OrderContext";
import { isEmpty } from "../../../../../utils/array";
import { slideFromBottom } from "../../../../../keyframes/animations";

export default function BasketFooter() {
  const { handleEmptyBasket, basket, handleOrderConfirmation } =
    useContext(OrderContext);
  const isBasketEmpty = isEmpty(basket);

  const handleOnOrder = () => {
    handleEmptyBasket();
    handleOrderConfirmation(5000);
  };
  return (
    <BasketFooterStyled>
      {!isBasketEmpty && (
        <div className="buttonsContainer">
          <Button
            label="Valider"
            variant="add"
            Icon=<GiConfirmed className="icon" />
            iconPos="left"
            size="small"
            onClick={handleOnOrder}
          />
          <Button
            label="Annuler"
            variant="primary"
            Icon=<RiDeleteBin2Line className="icon" />
            iconPos="left"
            size="small"
            onClick={handleEmptyBasket}
          />
        </div>
      )}
    </BasketFooterStyled>
  );
}

const BasketFooterStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${theme.colors.background_dark};
  width: 100%;

  font-size: ${theme.font.sizes.P2};
  font-family: ${theme.font.families.stylish};
  color: ${theme.colors.white};
  font-weight: ${theme.font.weights.bold};
  .buttonsContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    .icon {
      font-size: ${theme.font.sizes.P2};
    }

    animation: ${slideFromBottom} ${theme.animations.speed.medium} ease-in-out;
  }
`;
