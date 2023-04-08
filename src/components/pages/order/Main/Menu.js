import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../reusable/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import EmptyMenuCustomer from "./EmptyMenuCustomer";

export default function Menu() {
  const { isAdmin, menu, setMenu, productToEdit, setProductToEdit } =
    useContext(OrderContext);

  const handleDelete = (id) => {
    const newMenu = menu.filter((item) => item.id !== id);
    setMenu(newMenu);
  };

  const selectProductToEdit = (id) => {
    const product = menu.find((item) => item.id === id);
    setProductToEdit(product);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
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
              onDelete={() => handleDelete(id)}
              onClick={isAdmin ? () => selectProductToEdit(id) : null}
            />
          );
        })
      ) : isAdmin ? (
        <EmptyMenuAdmin reloadMenu={reloadMenu} />
      ) : (
        <EmptyMenuCustomer />
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
