import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../../reusable/Card";
import { formatPrice } from "../../../../../utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { focusTitleEditBox } from "../../../../../utils/ref";

export default function Menu() {
  const {
    isAdmin,
    menu,
    productToEdit,
    activeTab,
    handleProductDelete,
    reloadMenu,
    titleEditBoxRef,
    setActiveTab,
    setIsPanelCollapsed,
    setProductToEdit,
  } = useContext(OrderContext);

  const onDelete = (event, id) => {
    event.stopPropagation();
    handleProductDelete(id);
    focusTitleEditBox(titleEditBoxRef);
  };

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
    <MenuStyled>
      {menu.length ? (
        menu.map(({ id, imageSource, title, price }) => {
          return (
            <Card
              key={id}
              imageSource={
                imageSource ? imageSource : "/images/coming-soon.png"
              }
              title={title}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isAdmin}
              onDelete={(event) => onDelete(event, id)}
              onClick={isAdmin ? () => selectProductToEdit(id) : null}
              onAdd={(e) => e.stopPropagation()}
              isHoverable={isAdmin}
              isSelected={isCardSelected(id)}
            />
          );
        })
      ) : (
        <EmptyMenu isAdmin={isAdmin} reloadMenu={reloadMenu} />
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 5px;
  min-height: 83%;
  background: none;
  padding: 50px 50px 150px;
  overflow-y: scroll;
`;
