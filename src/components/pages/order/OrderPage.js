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
import { checkProductSelection, findObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";
import bgPattern from "../../../assets/images/bgPattern.svg";
import { initOrderPage } from "../../../hooks/useInitOrderPage";
import { useModal } from "../../../hooks/useModal";
import OrderConfirmed from "./modals/OrderConfirmed/OrderConfirmed";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("add");
  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState(null);
  const { username } = useParams();
  const [userName, setUserName] = useState(username);
  const [isLoading, setIsLoading] = useState(false);

  const menuContent = useMenu(userName);
  const basketContent = useBasket(userName);
  const modalContent = useModal();

  const titleEditBoxRef = useRef();

  const selectProductToEdit = async (id) => {
    const product = await findObjectById(id, menuContent.menu);
    await setProductToEdit(product);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);

    focusTitleEditBox(titleEditBoxRef);
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
    ...modalContent,

    isLoading,
  };

  useLayoutEffect(() => {
    initOrderPage(userName, menuContent, basketContent, setIsLoading);
  }, [userName]);

  return (
    <OrderPageStyled>
      <OrderContext.Provider value={orderContextValue}>
        <div className="container">
          {modalContent.wasOrderConfirmed && <OrderConfirmed />}
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
  background-image: url(${bgPattern});
  background-size: 50px;
  background-repeat: repeat;
  background-position: center;

  .container {
    height: 95vh;
    width: 1400px;
    width: 80vw;
  }
`;
