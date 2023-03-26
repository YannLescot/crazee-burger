import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable/Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const [menu, setMenu] = React.useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({ key, imageSource, title, price }) => {
        return (
          <Card
            key={key}
            imageSource={imageSource}
            title={title}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;

  min-height: 75%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;

  grid-row-gap: 60px;
  grid-column-gap: 5px;
`;
