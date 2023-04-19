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
  const [basket, setBasket] = useState([]);
  const [productToAdd, setProductToAdd] = useState(EMPTY_PRODUCT);
  const [productToEdit, setProductToEdit] = useState();
  const [wasProductAdded, setWasProductAdded] = useState(false);

  const titleEditBoxRef = useRef();

  const handleAddToBasket = (productID) => {
    const basketCopy = deepClone(basket);

    //if the product ID is already in the basket, increase the quantity
    const productInBasket = basketCopy.find((item) => item.id === productID);
    if (productInBasket) {
      productInBasket.quantity++;
      setBasket(basketCopy);
      return;
    } else {
      //if the product ID is not in the basket, add it to the basket with quantity 1
      const newProduct = { id: productID, quantity: 1 };
      const newBasket = [...basketCopy, newProduct];
      setBasket(newBasket);
    }
  };

  const handleRemoveFromBasket = (productID) => {
    const basketCopy = deepClone(basket);

    const newBasket = basketCopy.filter((item) => item.id !== productID);
    setBasket(newBasket);
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

    //if the product deleted was in the basket, remove it from the basket
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
