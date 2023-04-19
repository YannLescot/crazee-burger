import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import BasketCard from "../../../../reusable/BasketCard";
import OrderContext from "../../../../../context/OrderContext";
import { formatPrice } from "../../../../../utils/maths";
import { focusTitleEditBox } from "../../../../../utils/ref";

export default function BasketBody() {
  const {
    basket,
    menu,
    handleRemoveFromBasket,
    isAdmin,
    productToEdit,
    setActiveTab,
    setIsPanelCollapsed,
    setProductToEdit,
    titleEditBoxRef,
  } = useContext(OrderContext);

  const selectProductToEdit = async (id) => {
    const product = menu.find((item) => item.id === id);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);
    await setProductToEdit(product);

    focusTitleEditBox(titleEditBoxRef);
  };

  return (
    <BasketBodyStyled>
      <div className="produits">
        {basket.length === 0 && (
          <div className="empty">Votre commande est vide.</div>
        )}
        {basket.map((product) => {
          const productInfo = menu.find((item) => item.id === product.id);
          return (
            <BasketCard
              key={product.id}
              imageSource={productInfo.imageSource}
              title={productInfo.title}
              price={formatPrice(productInfo.price)}
              quantity={product.quantity}
              onDelete={() => handleRemoveFromBasket(product.id)}
              isHoverable={isAdmin}
              isSelected={productToEdit && productToEdit.id === product.id}
              onClick={() => selectProductToEdit(product.id)}
            />
          );
        })}
      </div>
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  //background: ${theme.colors.background_white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  overflow-y: scroll;

  z-index: 2;

  .produits {
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .empty {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${theme.font.sizes.P4};
      font-family: ${theme.font.families.stylish};
      color: ${theme.colors.greyBlue};
    }
  }
`;
