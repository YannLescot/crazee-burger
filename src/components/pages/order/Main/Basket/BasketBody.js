import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "../../../../reusable/BasketCard";
import OrderContext from "../../../../../context/OrderContext";

export default function BasketBody() {
  const { basket, menu } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {basket.length === 0 ? (
        <div className="empty">Votre commande est vide.</div>
      ) : (
        basket.map((product) => {
          const productInfo = menu.find((item) => item.id === product.id);
          return (
            <BasketCard
              key={product.id}
              imageSource={productInfo.image}
              title={productInfo.title}
              price={productInfo.price}
              quantity={product.quantity}
            />
          );
        })
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.background_white};

  max-height: 100%;
  overflow-y: scroll;

  z-index: 2;

  .empty {
    text-align: center;
    font-size: ${theme.font.sizes.P4};
    font-family: ${theme.font.families.stylish};
    color: ${theme.colors.greyBlue};
  }

  .produits {
    align-items: flex-start;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`;
