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

  const focusTitleEditBox = (ref) => {
    if (!ref.current) return;
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

  const handleEdit = (productEdited) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
  };

  const handleProductAddition = () => {
    const menuCopy = deepClone(menu);
    const productToAddCopy = deepClone(productToAdd);
    const newMenu = [
      { ...productToAddCopy, id: crypto.randomUUID() },
      ...menuCopy,
    ];
    setMenu(newMenu);

    setWasProductAdded(!wasProductAdded);
    setTimeout(() => {
      setWasProductAdded(false);
    }, 2000);

    setProductToAdd(EMPTY_PRODUCT);
  };

  const handleAddFieldChange = (event) => {
    const { name, value } = event.target;

    const productToAddCopy = deepClone(productToAdd);
    const newProductToAdd = { ...productToAddCopy, [name]: value };
    setProductToAdd(newProductToAdd);
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

    setIsAdmin,
    setActiveTab,
    setIsPanelCollapsed,
    setProductToEdit,

    handleProductAddition,
    handleEdit,
    handleCardDelete,

    handleAddFieldChange,
    reloadMenu,

    focusTitleEditBox,
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
