import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";
import { tabsConfig } from "./tabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PanelTabs() {
  const {
    activeTab,
    handleSelectTab,
    isPanelCollapsed,
    handlePanelCollapsing,
    focusTitleEditBox,
  } = useContext(OrderContext);

  const selectTab = async (tabId) => {
    await handleSelectTab(tabId);
    await handlePanelCollapsing(false);
    focusTitleEditBox();
  };

  const tabs = tabsConfig;

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
          onClick={() => selectTab(id)}
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
