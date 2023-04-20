import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { useRef, useState } from "react";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { EMPTY_PRODUCT } from "../../../js/enum";
import { deepClone } from "../../../utils/array";
import { focusTitleEditBox } from "../../../utils/ref";

export default function OrderPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.LARGE);
  const [basket, setBasket] = useState([]);
  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState();
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const titleEditBoxRef = useRef();

  const handleAddToBasket = (productID) => {
    const productInBasket = basket.find((item) => item.id === productID);
    if (productInBasket) {
      productInBasket.quantity++;
      return;
    }
    const newProduct = { id: productID, quantity: 1 };
    const newBasket = [newProduct, ...basket];
    setBasket(newBasket);
  };

  const handleRemoveFromBasket = (productID) => {
    const basketCopy = deepClone(basket);

    const newBasket = basketCopy.filter((item) => item.id !== productID);
    setBasket(newBasket);
  };

  const selectProductToEdit = async (id) => {
    const product = menu.find((item) => item.id === id);
    await setActiveTab("edit");
    await setIsPanelCollapsed(false);
    await setProductToEdit(product);

    focusTitleEditBox(titleEditBoxRef);
  };

  const verifyIfCardIsSelected = (id) => {
    return productToEdit && activeTab === "edit" && productToEdit.id === id;
  };

  const handleProductAdd = () => {
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

  const handleProductEdited = (productEdited) => {
    const newMenu = menu.map((product) =>
      product.id === productEdited.id ? productEdited : product
    );
    setMenu(newMenu);
  };

  const handleProductDelete = (id) => {
    const menuCopy = deepClone(menu);

    const newMenu = menuCopy.filter((item) => item.id !== id);
    setMenu(newMenu);

    if (basket.find((item) => item.id === id)) {
      const basketCopy = deepClone(basket);
      const newBasket = basketCopy.filter((item) => item.id !== id);
      setBasket(newBasket);
    }

    if (productToEdit && productToEdit.id === id) setProductToEdit(null);
  };

  const reloadMenu = () => {
    setMenu(fakeMenu.SMALL);
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

    selectProductToEdit,
    verifyIfCardIsSelected,

    menu,
    handleProductAdd,
    handleProductDelete,
    handleProductEdited,
    reloadMenu,

    basket,
    handleAddToBasket,
    handleRemoveFromBasket,

    wasProductAdded,
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
