import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";
import { getTabsConfig } from "./tabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function PanelTabs() {
  const {
    activeTab,
    isPanelCollapsed,
    setIsPanelCollapsed,
    productToEdit,
    focusTitleEditBox,
    titleEditBoxRef,
    setActiveTab,
  } = useContext(OrderContext);

  const tabs = getTabsConfig(productToEdit);

  const onCollapseClick = async () => {
    await setIsPanelCollapsed(!isPanelCollapsed);
    focusTitleEditBox(titleEditBoxRef);
  };

  const onTabClick = async (id) => {
    await setActiveTab(id);
    await setIsPanelCollapsed(false);
    focusTitleEditBox(titleEditBoxRef);
  };

  return (
    <PanelTabsStyled>
      <Tab
        Icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={() => onCollapseClick()}
        className={isPanelCollapsed ? "active" : ""}
      />
      {tabs.map(({ id, Icon, label }) => (
        <Tab
          key={id}
          Icon={Icon}
          label={label}
          onClick={() => onTabClick(id)}
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
