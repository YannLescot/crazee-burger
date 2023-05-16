import styled, { keyframes } from "styled-components";
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
import { TbBowl } from "react-icons/tb";
import { useModal } from "../../../hooks/useModal";

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
          {modalContent.wasOrderConfirmed && (
            <div className="orderConfirmedModalContainer">
              <div className="orderConfirmedModal">
                <div className="texts">
                  <h1>Chaud devant !</h1>
                  <p>Votre commande est partie en cuisine ! 🍜</p>
                </div>
                <div className="bowl">
                  <div className="smoke">
                    <div className="smoke1"></div>
                    <div className="smoke2"></div>
                    <div className="smoke3"></div>
                  </div>
                  <TbBowl className="icon" />
                </div>
              </div>
            </div>
          )}
          <Navbar />
          <Main />
        </div>
      </OrderContext.Provider>
    </OrderPageStyled>
  );
}

const smokeAnimation = keyframes`
  0% {
    transform: translateY(60px);
    background-position: 0% 50%;
  }
  50% {
    transform: translateY(60px);
    background-position: 100% 50%;
    filter: blur(6.5px);
  }
  100% {
    transform: translateY(60px);
    background-position: 0% 50%;
  }
`;

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

    .orderConfirmedModalContainer {
      position: absolute;
      top: 2.5vh;
      left: 10vw;
      bottom: 0;
      right: 0;
      width: 80vw;
      height: 95vh;
      background-color: rgba(0, 0, 0, 0.85);
      z-index: 4;

      border-radius: ${theme.borderRadius.extraRound};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 50px;
      font-weight: bold;
      opacity: 1;
      //pointer-events: none;
      transition: all 0.3s ease-out;

      .orderConfirmedModal {
        background-color: ${theme.colors.primary};
        width: 65%;
        height: 65%;
        border-radius: ${theme.borderRadius.extraRound};
        display: grid;
        grid-template-rows: 1fr 3fr;
        align-items: center;
        justify-items: center;
        padding: 30px;
        box-sizing: border-box;

        .texts {
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;

          h1 {
            line-height: 95%;
            color: ${theme.colors.white};
            font-size: ${theme.font.sizes.HUGE};
            font-weight: ${theme.font.weights.bold};
            font-family: ${theme.font.families.stylish};
            margin: 0px;
            padding: 0px;
          }

          p {
            font-size: ${theme.font.sizes.P4};
            letter-spacing: 0.3px;
            font-family: ${theme.font.families.stylish};
            font-weight: ${theme.font.weights.regular};
            margin-top: 0px;
            margin-bottom: 0px;
            padding: 0px;
          }
        }

        .bowl {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          height: 100%;

          .icon {
            font-size: 220px;
            color: ${theme.colors.white};
          }

          .smoke {
            display: flex;
            justify-content: center;
            align-items: flex-end;

            gap: 20px;

            .smoke1,
            .smoke2,
            .smoke3 {
              background-color: ${theme.colors.white};
              width: 5px;
              height: 90px;

              background: linear-gradient(
                300deg,
                ${theme.colors.primary},
                ${theme.colors.white},
                ${theme.colors.primary},
                ${theme.colors.white}
              );
              background-size: 200% 175%;

              filter: blur(6px);

              animation: ${smokeAnimation} 2s ease-in-out infinite;
            }

            .smoke2 {
              height: 110px;
              animation: ${smokeAnimation} 2.5s ease-in-out 0.5s infinite;
            }
          }
        }
      }
    }
  }
`;
