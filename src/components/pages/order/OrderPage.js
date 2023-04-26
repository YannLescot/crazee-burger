import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { useLayoutEffect, useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../js/enum";
import { focusTitleEditBox } from "../../../utils/ref";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById, isProductSelected } from "../../../utils/array";
import { retrieveFromLocalStorage, storeLocally } from "../../../utils/window";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("add");
  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState(null);

  const menuContent = useMenu();
  const basketContent = useBasket();

  const titleEditBoxRef = useRef();

  const selectProductToEdit = async (id) => {
    const product = await findObjectById(id, menuContent.menu);
    await setProductToEdit(product);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);

    focusTitleEditBox(titleEditBoxRef);
    storeLocally("productToEdit", product);
  };

  const isCardSelected = (id) => {
    if (activeTab === "add" || !productToEdit) return false;
    const isProductSelected = checkProductSelection(id, productToEdit.id);
    return isProductSelected;
  };

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isPanelCollapsed,
    setIsPanelCollapsed,
    activeTab,
    setActiveTab,
    productToAdd,
    setProductToAdd,
    productToEdit,
    setProductToEdit,
    titleEditBoxRef,
    isCardSelected,

    selectProductToEdit,

    ...menuContent,

    ...basketContent,
  };

  useLayoutEffect(() => {
    const localProductToEdit = retrieveFromLocalStorage("productToEdit");
    if (localProductToEdit) setProductToEdit(localProductToEdit);

    const localProductToAdd = retrieveFromLocalStorage("productToAdd");
    if (localProductToAdd) setProductToAdd(localProductToAdd);

    const localMenu = retrieveFromLocalStorage("menu");
    if (localMenu) menuContent.setMenu(localMenu);

    const localBasket = retrieveFromLocalStorage("basket");
    if (localBasket) basketContent.setBasket(localBasket);
  }, []);

  return (
    <OrderPageStyled>
      <OrderContext.Provider value={orderContextValue}>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderContext.Provider>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.primary};

  .container {
    height: 95vh;
    width: 1400px;
  }
`;
