import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable/Card";
import { formatPrice } from "../../../../utils/maths";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({ id, imageSource, title, price }) => {
        return (
          <Card
            key={id}
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 5px;
  min-height: 75%;
  background: none;
  padding: 50px 50px 150px;
`;
