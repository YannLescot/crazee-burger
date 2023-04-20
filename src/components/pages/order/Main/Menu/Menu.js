import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { focusTitleEditBox } from "../../../../../utils/ref";
import { theme } from "../../../../../theme";
import { DEFAULT_IMAGE_SOURCE } from "../../../../../js/enum";

export default function Menu() {
  const {
    isAdmin,
    menu,
    verifyIfCardIsSelected,
    selectProductToEdit,
    handleProductDelete,
    reloadMenu,
    titleEditBoxRef,
    handleAddToBasket,
  } = useContext(OrderContext);

  const onDelete = (event, id) => {
    event.stopPropagation();
    handleProductDelete(id);
    focusTitleEditBox(titleEditBoxRef);
  };

  const onAdd = (e, id) => {
    e.stopPropagation();
    handleAddToBasket(id);
  };

  if (menu.length === 0)
    return <EmptyMenu isAdmin={isAdmin} reloadMenu={reloadMenu} />;

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
            imageSource={imageSource ? imageSource : DEFAULT_IMAGE_SOURCE}
            title={title}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isAdmin}
            onDelete={(e) => onDelete(e, id)}
            onClick={isAdmin ? () => selectProductToEdit(id) : null}
            onAdd={(e) => onAdd(e, id)}
            isHoverable={isAdmin}
            isSelected={verifyIfCardIsSelected(id)}
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
`;
