import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import Tab from "../../../../reusable/Tab";

export default function PanelTabs() {
  return (
    <PanelTabsStyled>
      <Tab
        icon={<FiChevronDown />}
        label=""
        onClick={() => {}}
        isActive={false}
      />

      <Tab
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={() => {}}
        isActive={false}
      />

      <Tab
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={() => {}}
        isActive={false}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  margin-left: 71px;
  display: flex;
  align-items: center;
`;
