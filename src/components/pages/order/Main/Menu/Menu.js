import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { focusTitleEditBox } from "../../../../../utils/ref";
import { theme } from "../../../../../theme";
import { getImageSource } from "../../../../../utils/falsy";
import { findObjectById, isEmpty } from "../../../../../utils/array";
import LoadingMessage from "./LoadingMessage";

export default function Menu() {
  const {
    isAdmin,
    menu,
    selectProductToEdit,
    handleProductDelete,
    reloadMenu,
    titleEditBoxRef,
    handleAddToBasket,
    productToEdit,
    setProductToEdit,
    basket,
    handleRemoveFromBasket,
    isCardSelected,
    isLoading,
    updateProductQuantity,
  } = useContext(OrderContext);

  const isMenuEmpty = isEmpty(menu);

  const onDelete = (event, id) => {
    event.stopPropagation();
    handleProductDelete(id);
    focusTitleEditBox(titleEditBoxRef);
    if (productToEdit && productToEdit.id === id) setProductToEdit(null);
    if (findObjectById(id, basket)) handleRemoveFromBasket(id);
  };

  const onAdd = (e, id) => {
    e.stopPropagation();
    handleAddToBasket(id);
  };

  const onRemove = (e, id) => {
    e.stopPropagation();
    handleRemoveFromBasket(id);
  };

  const onIncrement = (e, productInBasket) => {
    e.stopPropagation();
    if (!productInBasket) return;
    updateProductQuantity(productInBasket, +1);
  };

  const onDecrement = (e, productInBasket) => {
    e.stopPropagation();
    if (!productInBasket) return;

    const quantity = productInBasket.quantity;

    if (quantity === 0) return;

    if (quantity === 1) {
      handleRemoveFromBasket(productInBasket.id);
      return;
    }
    updateProductQuantity(productInBasket, -1);
  };

  if (isLoading) return <LoadingMessage />;

  if (isMenuEmpty)
    return <EmptyMenu isAdmin={isAdmin} reloadMenu={reloadMenu} />;

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={getImageSource(imageSource)}
            title={title}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdmin}
            onDelete={(e) => onDelete(e, id)}
            onClick={isAdmin ? () => selectProductToEdit(id) : null}
            addProductToBasket={(e) => onAdd(e, id)}
            removeProductFromBasket={(e) => onRemove(e, id)}
            isHoverable={isAdmin}
            isSelected={isCardSelected(id)}
            basketQuantity={findObjectById(id, basket)?.quantity}
            onIncrement={(e) => onIncrement(e, findObjectById(id, basket))}
            onDecrement={(e) => onDecrement(e, findObjectById(id, basket))}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 5px;
  min-height: 83%;
  background: none;
  padding: 50px 50px 150px;
  overflow-y: scroll;
  box-shadow: ${theme.shadows.strong};

  ::-webkit-scrollbar {
    display: none;
  }
`;
