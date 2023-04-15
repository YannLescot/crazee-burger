import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";
import { getTabsConfig } from "./tabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PanelTabs() {
  const {
    activeTab,
    handleSelectTab,
    isPanelCollapsed,
    handlePanelCollapsing,
    productToEdit,
  } = useContext(OrderContext);

  const tabs = getTabsConfig(productToEdit);

  return (
    <PanelTabsStyled>
      <Tab
        Icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={() => handlePanelCollapsing(!isPanelCollapsed)}
        className={isPanelCollapsed ? "active" : ""}
      />
      {tabs.map(({ id, Icon, label }) => (
        <Tab
          key={id}
          Icon={Icon}
          label={label}
          onClick={() => handleSelectTab(id)}
          className={activeTab === id ? "active" : ""}
        />
      ))}
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
