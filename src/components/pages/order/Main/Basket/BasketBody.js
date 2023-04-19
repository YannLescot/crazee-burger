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
    activeTab,
  } = useContext(OrderContext);

  const selectProductToEdit = async (id) => {
    const product = menu.find((item) => item.id === id);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);
    await setProductToEdit(product);

    focusTitleEditBox(titleEditBoxRef);
  };

  const isCardSelected = (id) => {
    return productToEdit && activeTab === "edit" && productToEdit.id === id;
  };

  return (
    <BasketBodyStyled>
      {basket.length === 0 ? (
        <div className="empty">Votre commande est vide.</div>
      ) : (
        <div className="produits">
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
                isSelected={isCardSelected(product.id)}
                onClick={() => selectProductToEdit(product.id)}
              />
            );
          })}
        </div>
      )}
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  z-index: 2;
  overflow: hidden;

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

  .produits {
    display: grid;
    overflow-y: scroll;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 86px);
    grid-row-gap: 20px;
    justify-items: center;
    //padding: 0px 16px;

    /* overflow-y: scroll;
    flex-shrink: 0;
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; */
  }
`;
