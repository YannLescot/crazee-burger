import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import Tab from "../../../../reusable/Tab";
import { getTabsConfig } from "./tabsConfig";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { focusTitleEditBox } from "../../../../../utils/ref";

export default function PanelTabs() {
  const {
    activeTab,
    isPanelCollapsed,
    setIsPanelCollapsed,
    productToEdit,
    titleEditBoxRef,
    setActiveTab,
  } = useContext(OrderContext);

  const tabs = getTabsConfig(productToEdit);

  const handleCollapseClick = async () => {
    await setIsPanelCollapsed(!isPanelCollapsed);
    focusTitleEditBox(titleEditBoxRef);
  };

  const onClick = async (id: string) => {
    await setActiveTab(id);
    await setIsPanelCollapsed(false);
    focusTitleEditBox(titleEditBoxRef);
  };

  return (
    <PanelTabsStyled>
      {tabs.map(({ id, Icon, label }) => (
        <Tab
          key={id}
          Icon={Icon}
          label={label}
          onClick={() => onClick(id)}
          className={activeTab === id ? "active" : ""}
        />
      ))}
      <Tab
        Icon={isPanelCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        onClick={handleCollapseClick}
        className={isPanelCollapsed ? "active" : ""}
      />
    </PanelTabsStyled>
  );
}

const PanelTabsStyled = styled.div`
  gap: 1px;
  margin-left: 53px;
  height: 43px;
  display: inline-flex;
`;
