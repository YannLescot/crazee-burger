import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../js/enum";
import { deepClone } from "../../../utils/array";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.SMALL);
  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState();
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const titleEditBoxRef = useRef();

  const handleAdminChange = (bool) => {
    setIsAdmin(bool);
  };

  const handlePanelCollapsing = async (bool) => {
    await setIsPanelCollapsed(bool);
    if (bool === false) focusTitleEditBox();
  };

  const handleSelectTab = (tabId) => {
    setActiveTab(tabId);
    handlePanelCollapsing === true && handlePanelCollapsing(false);
  };

  const focusTitleEditBox = () => {
    if (activeTab === "edit" && menu.length && productToEdit.id !== "")
      titleEditBoxRef.current.focus();
  };

  const handleCardDelete = (id) => {
    const menuCopy = deepClone(menu);

    const newMenu = menuCopy.filter((item) => item.id !== id);
    setMenu(newMenu);

    if (productToEdit && productToEdit.id === id) setProductToEdit(null);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
  };

  const selectProductToEdit = async (id) => {
    const product = menu.find((item) => item.id === id);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);
    await setProductToEdit(product);
    // setTimeout is needed to wait for the states to update
    setTimeout(() => {
      titleEditBoxRef.current.focus();
    }, 0);
  };

  const handleEditFieldChange = (event) => {
    const { name, value } = event.target;
    setProductToEdit({ ...productToEdit, [name]: value });

    const newMenu = menu.map((product) =>
      product.id === productToEdit.id ? { ...product, [name]: value } : product
    );
    setMenu(newMenu);
  };

  const handleProductAddition = (e) => {
    setMenu([
      {
        ...productToAdd,
        id: crypto.randomUUID(),
      },
      ...menu,
    ]);
    setWasProductAdded(!wasProductAdded);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);
    setProductToAdd(EMPTY_PRODUCT);
  };

  const handleAddFieldChange = (event) => {
    const { name, value } = event.target;
    setProductToAdd({ ...productToAdd, [name]: value });
  };

  const orderContextValue = {
    isAdmin,
    isPanelCollapsed,
    activeTab,
    menu,
    productToAdd,
    productToEdit,
    titleEditBoxRef,
    wasProductAdded,
    handleSelectTab,
    handlePanelCollapsing,
    handleAdminChange,
    focusTitleEditBox,
    handleCardDelete,
    reloadMenu,
    selectProductToEdit,
    handleEditFieldChange,
    handleAddFieldChange,
    handleProductAddition,
  };

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
