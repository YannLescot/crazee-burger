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
        Icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={handleCollapse}
        isActive={isPanelCollapsed}
      />

      <Tab
        id="add"
        Icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        onClick={handleClick}
        isActive={activeTab === "add" ? true : false}
      />

      <Tab
        id="edit"
        Icon={<MdModeEditOutline />}
        label="Modifier un produit"
        onClick={handleClick}
        isActive={activeTab === "edit" ? true : false}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  gap: 1px;
  margin-left: 71px;
  height: 43px;
  display: flex;
  align-items: center;
`;
