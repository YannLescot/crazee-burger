import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import AdminContext from "../../../../../context/AdminContext";
import Tab from "../../../../reusable/Tab";

export default function PanelTabs() {
  const { activeTab, setActiveTab, isPanelCollapsed, setIsPanelCollapsed } =
    useContext(AdminContext);

  return (
    <PanelTabsStyled>
      <Tab
        id="collapse"
        icon={<FiChevronDown />}
        label=""
        onClick={() => {}}
        isActive={isPanelCollapsed}
      />

      <Tab
        id="add"
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={() => {}}
        isActive={activeTab === "add" ? true : false}
      />

      <Tab
        id="edit"
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={() => {}}
        isActive={activeTab === "edit" ? true : false}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  margin-left: 71px;
  display: flex;
  align-items: center;
`;
