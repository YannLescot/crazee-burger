import React, { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";

export default function PanelTabs() {
  const { activeTab, setActiveTab, isPanelCollapsed, setIsPanelCollapsed } =
    useContext(OrderContext);

  const handleCollapse = () => {
    setIsPanelCollapsed(!isPanelCollapsed);
  };

  const handleClick = (e) => {
    setActiveTab(e.target.id);
    setIsPanelCollapsed(false);
  };

  return (
    <PanelTabsStyled>
      <Tab
        id="collapse"
        icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={handleCollapse}
        isActive={isPanelCollapsed}
      />

      <Tab
        id="add"
        icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={handleClick}
        isActive={activeTab === "add" ? true : false}
      />

      <Tab
        id="edit"
        icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={handleClick}
        isActive={activeTab === "edit" ? true : false}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  margin-left: 71px;
  height: 43px;
  display: flex;
  align-items: center;
`;
