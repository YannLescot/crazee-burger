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
        id="collapse"
        icon={<FiChevronDown />}
        label=""
        onClick={() => {}}
        activeTab={""}
      />

      <Tab
        id="add"
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={() => {}}
        activeTab={""}
      />

      <Tab
        id="edit"
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={() => {}}
        activeTab={""}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  margin-left: 71px;
  display: flex;
  align-items: center;
`;
