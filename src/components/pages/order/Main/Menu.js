import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../reusable/Card";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import { fakeMenu } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const { isAdmin, menu, setMenu } = useContext(OrderContext);

  const EmptyMenuMessage = isAdmin
    ? {
        title: "Le menu est vide ?",
        subtitle: "Cliquez ci-dessous pour le réinitialiser",
        showh3: false,
        showReload: true,
      }
    : {
        title: "Victime de notre succès ! :D",
        subtitle: "De nouvelles recettes sont encours de préparation.",
        showh3: true,
        showReload: false,
      };

  const handleDelete = (id) => {
    const newMenu = menu.filter((item) => item.id !== id);
    setMenu(newMenu);
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
            />
          );
        })
      ) : (
        <EmptyMenu message={EmptyMenuMessage} reloadMenu={reloadMenu} />
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
