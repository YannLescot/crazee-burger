import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "../../../../reusable/BasketCard";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";

export default function BasketBody() {
  const { basket, menu } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      {basket.length === 0 && (
        <div className="empty">Votre commande est vide.</div>
      )}

      <div className="produits">
        {basket.length > 0 &&
          basket.map((product) => {
            console.log(product);
            console.log(product.id);
            console.log(menu);
            const productInfo = menu.find((item) => item.id === product.id);
            return (
              <BasketCard
                key={product.id}
                imageSource={productInfo.imageSource}
                title={productInfo.title}
                price={formatPrice(productInfo.price)}
                quantity={product.quantity}
              />
            );
          })}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  background: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  overflow-y: scroll;

  z-index: 2;

  .empty {
    font-size: ${theme.font.sizes.P4};
    font-family: ${theme.font.families.stylish};
    color: ${theme.colors.greyBlue};
  }

  .produits {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
