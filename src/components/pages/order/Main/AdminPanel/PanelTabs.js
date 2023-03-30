import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";
import { tabsConfig } from "./tabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PanelTabs() {
  const { activeTab, setActiveTab, isPanelCollapsed, setIsPanelCollapsed } =
    useContext(OrderContext);

  const handleCollapse = () => {
    setIsPanelCollapsed(!isPanelCollapsed);
  };

  const selectTab = (tabId) => {
    setActiveTab(tabId);
    setIsPanelCollapsed(false);
  };

  const tabs = tabsConfig;

  return (
    <PanelTabsStyled>
      <Tab
        key="collapse"
        Icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={handleCollapse}
        isTabActive={isPanelCollapsed}
      />
      {tabs.map(({ id, Icon, label }) => {
        return (
          <Tab
            key={id}
            Icon={Icon}
            label={label}
            onClick={() => selectTab(id)}
            isTabActive={activeTab === id ? true : false}
          />
        );
      })}
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
